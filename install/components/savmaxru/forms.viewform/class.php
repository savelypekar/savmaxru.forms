<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Loader;
use \Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Localization\Loc;


\Bitrix\Main\Loader::includeModule('savmaxru.forms');


class CSavmaxruFormsView extends CBitrixComponent implements Controllerable
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

	public function validationForSaveResult($result)
	{
		$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();

		$result['ID'] = intval($result["ID"]);

		foreach ($result["questions"] as &$question)
		{
			$rows = $connectionInterviewWithQuestion->getIdQuestionForIdInterviewAndIdQuestion($result['ID'], $question['ID']);
			$typeQuestion = $questionTable->getTypeByIdQuestion($question["ID"]);
			$countOptions = count($question["options"]);

			if (!empty($rows))
			{
				if (!(($countOptions > 1) &&
					(($typeQuestion == 'RadiobuttonList') ||
						($typeQuestion == 'Heading') ||
						($typeQuestion == 'Singlelinetextbox'))))
				{
					$question["ID"] = intval($question["ID"]);
					if (array_key_exists('userValue', $question["options"]))
					{
						$question["options"]["userValue"] = strval($question["options"]["userValue"]);
					}
					else
					{
						foreach ($question["options"] as &$option)
						{
							$option = intval($option);
						}
					}
				}
			}
			else
			{
				$question["ID"] = 0;
				$question["options"] = [];
			}
		}
		return $result;
	}

	public function saveResultAction($result)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
		$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();

		$result = $this->validationForSaveResult($result);

		global $USER;
		$idUser = $USER->GetID();

		$maxIdResult = $answerResultTable->getMaxIdResult();
		$idResult = $maxIdResult + 1;

		$answerResultTable->saveAnswerResult($idResult, $result["ID"], $idUser);

		foreach ($result["questions"] as $question)
		{
			if ($question["ID"] > 0)
			{
				$answerToQuestionTable->saveAnswerToQuestion($question["ID"], $idResult);
			}
			if (array_key_exists('userValue', $question["options"]))
			{
				$answerOptionTable->saveOptionAnswer($question["ID"], 0, $question["options"]["userValue"]);
			}
			else
			{
				foreach ($question["options"] as $option)
				{
					$answerOptionTable->saveOptionAnswer($question["ID"], $option, '');
				}
			}
		}
	}

	//send interview structure by id
	//not used now
	public function sendInterviewStructureAction($idInterview)
	{
		$optionTable = new \Savmaxru\Forms\Model\OptionTable();
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();

		$interview = $interviewTable->getInterviewsById($idInterview);
		$questions = $questionTable->getQuestionsForSetIdInterview($idInterview);
		$result["ID"] = $interview[0]["ID"];
		$countQuestion = 1;
		foreach ($questions as $question)
		{
			$result['question'][$countQuestion]['ID'] = $question[0]['ID'];
			$result['question'][$countQuestion]['index'] = $question[0]['POSITION'];
			$result['question'][$countQuestion]['type'] = $question[0]['TYPE'];
			$result['question'][$countQuestion]['description'] = $question[0]['CONTENT'];
			$result['question'][$countQuestion]['comment'] = '';
			$result['question'][$countQuestion]['required'] = '';
			$idQuestion = $question[0]['ID'];
			$options = $optionTable->getOptionsForQuestion($idQuestion);
			$countOption = 1;
			foreach ($options as $option)
			{
				$result['question'][$countQuestion]['options'][$countOption]["ID"] = $option["ID"];
				$result['question'][$countQuestion]['options'][$countOption]["value"] = $option["CONTENT"];
				$result['question'][$countQuestion]['options'][$countOption]["index"] = $option["POSITION"];
				$result['question'][$countQuestion]['options'][$countOption]["idQuestion"] = $option["ID_QUESTION"];
				$countOption = $countOption + 1;
			}
			$countQuestion = $countQuestion + 1;
		}

		return [
			'result' => $result,
		];
	}
}