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
			$countOptions = 0;
			$idAnswer = $answer['ID'];
			$options = $answerOptionTable->getAnswerByIdAnswer($idAnswer);
			foreach ($options as $option)
			{
				$result['answers'][$countAnswers]['options'][$countOptions] = $option;
				$countOptions = $countOptions + 1;
			}
			$countAnswers = $countAnswers + 1;
		}

		return [
			'result' => $result,
		];
	}
}