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
		$this->includeComponentTemplate();
	}

	public function configureActions()
	{
		return array();
	}

	public function saveResultAction($result)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
		$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();

		global $USER;
		$idUser = $USER->GetID();

		$maxIdResult = $answerResultTable->getMaxIdResult();
		$idResult = $maxIdResult + 1;

		$answerResultTable->saveAnswerResult($idResult, $result["ID"], $idUser);

		foreach ($result["questions"] as $question) {
			$answerToQuestionTable->saveAnswerToQuestion($question["ID"], $idResult);
			if (array_key_exists('userValue', $question["options"])) {
				$answerOptionTable->saveOptionAnswer($question["ID"], 0, $question["options"]["userValue"]);
			} else {
				foreach ($question["options"] as $option) {
					$answerOptionTable->saveOptionAnswer($question["ID"], $option, '');
				}
			}
		}
	}

	//send interview structure by id
	public function sendInterviewStructureAction($idInterview)
	{
		$optionTable = new \Savmaxru\Forms\Model\OptionTable();
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();

		$interview = $interviewTable->getInterviewsById($idInterview);
		$questions = $questionTable->getQuestionsForSetIdInterview($idInterview);

		$result["ID"] = $interview[0]["ID"];
		$countQuestion = 1;
		foreach ($questions as $question) {
			$result['question'][$countQuestion]['ID'] = $question[0]['ID'];
			$result['question'][$countQuestion]['index'] = $question[0]['POSITION'];
			$result['question'][$countQuestion]['type'] = $question[0]['TYPE'];
			$result['question'][$countQuestion]['description'] = $question[0]['CONTENT'];
			$result['question'][$countQuestion]['comment'] = '';
			$result['question'][$countQuestion]['required'] = '';

			$idQuestion = $question[0]['ID'];
			$options = $optionTable->getOptionsForQuestion($idQuestion);

			$countOption = 1;
			foreach ($options as $option) {
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

	//save structure interview with question and option
	public function saveInterviewStructureAction($result)
	{
		$optionTable = new \Savmaxru\Forms\Model\OptionTable();
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
		$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();

		global $USER;
		$idUser = $USER->GetID();

		if ($result["ID"] == 'NEW_FORM') {
			//$idInterviewPre = $interviewTable->getMaxIDKey();
			$interviewTable->addInterview($idUser, $result["title"],'', '', $result["visible"]);
			$idInterview = $interviewTable->getMaxIDKey();
			//if (!(($idInterviewPre['ID'] + 1) == $idInterview['ID'])) {
				//error getting id
			//}
			$idQuestion = $questionTable->getMaxIDKey() + 1;
			foreach ($result['questions'] as $question) {
				$questionTable->addQuestion($question['type'], $question['description'], $question['index']);
				$connectionInterviewWithQuestion->addRow($idInterview['ID'], $idQuestion);
				foreach ($question['options'] as $option) {
					$optionTable->addOption($idQuestion, $option['value'], $option['index']);
				}
				$idQuestion = $idQuestion + 1;
			}
		} else {
			if ($result['change'] == 'changed') {
				foreach ($result['questions'] as $question) {
					if ($question['change'] == 'changed') {
						$questionTable->updateRow($question['ID'], $question['type'], $question['description'], $question['index']);
						foreach ($question['options'] as $option) {
							if ($option['change'] == 'changed') {
								$optionTable->updateRow($option['ID'], $question['ID'], $option['value'], $option['index']);
							}
							if ($option['change'] == 'removed') {
								$optionTable->deleteRow($option['ID']);
							}
						}
					}
					if ($question['change'] == 'removed') {
						$questionTable->deleteRow($question['ID']);
					}
				}
			}
			if ($result['change'] == 'removed') {
				$interviewTable->deleteRow($result["ID"]);
			}
		}
	}
}