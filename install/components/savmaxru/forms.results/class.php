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
		$this->includeComponentTemplate();
	}

	public function configureActions()
	{
		return array();
	}

	public function sendResultsAction($idInterview, $quantity, $firstPosition)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();

		$result = $answerResultTable->getResultByIdInterviewWithAmount($idInterview, $quantity, $firstPosition);
		return [
			'result' => $result,
		];
	}

	public function sendSelectedResultAction($idResult)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
		$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
		$optionTable = new \Savmaxru\Forms\Model\OptionTable();

		$result = [];
		$answerResult = $answerResultTable->getResultByIdResult($idResult);
		$result['ID'] = $answerResult[0]['ID'];
		$result['ID_RESULT'] = $answerResult[0]['ID_RESULT'];
		$result['ID_INTERVIEW'] = $answerResult[0]['ID_INTERVIEW'];
		$result['ID_USER'] = $answerResult[0]['ID_USER'];
		$answers = $answerToQuestionTable->getResultByIdResult($idResult);
		$countAnswers = 0;
		foreach ($answers as $answer)
		{
			$result['answers'][$countAnswers]['ID'] = $answer['ID'];
			$result['answers'][$countAnswers]['ID_QUESTION'] = $answer['ID_QUESTION'];
			$result['answers'][$countAnswers]['ID_RESULT'] = $answer['ID_RESULT'];
			$questionInfo = $questionTable->getQuestionById($answer['ID_QUESTION']);
			$result['answers'][$countAnswers]['TYPE'] = $questionInfo[0]['TYPE'];
			$result['answers'][$countAnswers]['CONTENT'] = $questionInfo[0]['CONTENT'];
			$result['answers'][$countAnswers]['POSITION'] = $questionInfo[0]['POSITION'];
			$countOptions = 0;
			$idAnswer = $answer['ID'];
			$options = $answerOptionTable->getAnswerByIdAnswer($idAnswer);
			foreach ($options as $option)
			{
				$result['answers'][$countAnswers]['options'][$countOptions] = $option;
				if ($result['answers'][$countAnswers]['options'][$countOptions]['CONTENT'] == '')
				{
					$idOption = $result['answers'][$countAnswers]['options'][$countOptions]['ID_OPTION'];
					$optionInfo = $optionTable->getOptionsById($idOption);
					$result['answers'][$countAnswers]['options'][$countOptions]['CONTENT'] = $optionInfo[0]['CONTENT'];
				}
				$countOptions = $countOptions + 1;
			}
			$countAnswers = $countAnswers + 1;
		}

		return [
			'result' => $result,
		];
	}
}