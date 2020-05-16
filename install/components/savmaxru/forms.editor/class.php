<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Loader;
use \Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Localization\Loc;


\Bitrix\Main\Loader::includeModule('savmaxru.forms');


class CSavmaxruEditor extends CBitrixComponent implements Controllerable
{
	public function executeComponent()
	{
		$this->arResult = [
			'ID' => $this->arParams['ID'],
		];
		$this->includeComponentTemplate();
	}

	public function configureActions()
	{
		return array();
	}

	public function validationForSaveInterviewStructure($result)
	{
		$whiteListTypesQuestion = [
			'DropDownList',
			'CheckboxList',
			'Button',
			'RadiobuttonList',
			'Heading',
			'SingleLineTextBox',
			'MultiLineTextBox' ];

		$result["title"] = strval($result["title"]);
		$result["visible"] = boolval($result["visible"]);
		foreach ($result['questions'] as &$question)
		{
			if (in_array($question['type'], $whiteListTypesQuestion))
			{
				$question['index'] = intval($question['index']);
				$question['description'] = strval($question['description']);
				$question['comment'] = strval($question['comment']);
				foreach ($question['options'] as &$option)
				{
					$option['index'] = intval($option['index']);
					$option['value'] = strval($option['value']);
				}
			}
			else
			{
				$question['type'] = 'NotValid';
			}
		}
		return $result;
	}

	//save structure interview with question and option
	public function saveInterviewStructureAction($result)
	{
		$optionTable = new \Savmaxru\Forms\Model\OptionTable();
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
		$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();
		$dateInfoTable = new \Savmaxru\Forms\Model\DateInfoTable();

		$result = $this->validationForSaveInterviewStructure($result);

		global $USER;
		$idUser = $USER->GetID();

		if ($result["ID"] == 'NEW_FORM')
		{
			$dateInfo = [
				'TYPE_OBJECT' => 'InterviewStructure',
				'DATE_CREATE' => date("Y-m-d H:i:s"),
			];
			$idDate = $dateInfoTable->saveDate($dateInfo);
			$idInterview = $interviewTable->addInterview($idUser, $result["title"], $idDate, $result["visible"]);
			$idQuestion = $questionTable->getMaxIDKey() + 1;
			foreach ($result['questions'] as $question)
			{
				if ($question['type'] != 'NotValid')
				{
					$questionTable->addQuestion($question['type'], $question['description'], $question['index'], $question['comment']);
					$connectionInterviewWithQuestion->addRow($idInterview, $idQuestion);
					foreach ($question['options'] as $option)
					{
						$optionTable->addOption($idQuestion, $option['value'], $option['index']);
					}
					$idQuestion = $idQuestion + 1;
				}
			}
		}
		else
		{
			if ($result['change'] == 'changed')
			{
				$idDate = $interviewTable->getInterviewsById($result['ID']);
				$dateInfo = [
					'DATE_CHANGE' => date("Y-m-d H:i:s"),
				];
				$dateInfoTable->updateRow($idDate[0]['DATE_CREATE'], $dateInfo);
				$dataInterview['TITLE'] = $result['title'];
				$dataInterview['VISIBLE'] = $result['visible'];
				$interviewTable->updateRow($result['ID'], $dataInterview);
				foreach ($result['questions'] as $question)
				{
					if ($question['change'] == 'changed')
					{
						if ($question['ID']!= undefined)
						{
							//��� ������� ������
							$dataQuestion['CONTENT'] = $question['description'];
							$dataQuestion['POSITION'] = $question['index'];
							$dataQuestion['TYPE'] = $question['type'];
							$questionTable->updateRow($question['ID'], $dataQuestion);
							foreach ($question['options'] as $option)
							{
								if ($option['change'] == 'changed')
								{
									if ($option['ID'] != undefined)
									{
										//��� ������� ������
										$dataOption['CONTENT'] = $option['value'];
										$dataOption['POSITION'] = $option['index'];
										$optionTable->updateRow($option['ID'], $dataOption);
									}
									else
									{
										$optionTable->addOption($question['ID'], $option['value'], $option['index']);
									}
								}
								if ($option['change'] == 'removed')
								{
									$optionTable->deleteRow($option['ID']);
								}
							}
						}
						else
						{
							$idQuestion = $questionTable->getMaxIDKey() + 1;
							$questionTable->addQuestion($question['type'], $question['description'], $question['index'], $question['comment']);
							$connectionInterviewWithQuestion->addRow($result['ID'], $idQuestion);
							foreach ($question['options'] as $option)
							{
								$optionTable->addOption($idQuestion, $option['value'], $option['index']);
							}
						}
					}
					if ($question['change'] == 'removed')
					{
						$questionTable->deleteRow($question['ID']);
					}
				}
			}
			if ($result['change'] == 'removed')
			{
				$interviewTable->deleteRow($result["ID"]);
			}
		}
	}
}