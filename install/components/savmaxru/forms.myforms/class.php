<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Loader;
use \Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Localization\Loc;


\Bitrix\Main\Loader::includeModule('savmaxru.forms');


class CSavmaxruFormsMyForms extends CBitrixComponent implements Controllerable
{
	public function executeComponent()
	{
		$this->includeComponentTemplate();
	}

	public function configureActions()
	{
		return array();
	}

	public function loadAllInterviewAction()
	{
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$interviews = $interviewTable->getAllInterviews();

		return [
			'INTERVIEWS' => $interviews,
		];
	}

	public function loadInterviewByAmountAction($quantity, $firstPosition)
	{
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$interviews = $interviewTable->getInterviewsByAmount($quantity, $firstPosition);

		return [
			'result' => $interviews,
		];
	}

	public function loadInterviewCurrentUserAction($quantity, $firstPosition)
	{
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$dateInfoTable = new \Savmaxru\Forms\Model\DateInfoTable();

		$interviews = $interviewTable->getInterviewsCurrentUser($quantity, $firstPosition);
		foreach ($interviews as &$oneInterview)
		{
			$idDate = $oneInterview['DATE_CREATE'];
			$dateInfo = $dateInfoTable->getDateById($idDate);
			$dateInfo = $dateInfo[0]['DATE_CREATE'];
			$oneInterview['DATE_DAY'] = substr($dateInfo, 8,2);
			$monthNumber = substr($dateInfo, 5,2);
			$oneInterview['DATE_MONTH'] = $dateInfoTable->monthToText($monthNumber);
			$oneInterview['TIME'] = substr($dateInfo, 11,5);
		}
		return [
			'result' => $interviews,
		];
	}

	public function saveInterviewAndQuestionAction($interview, $questions)
	{
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();

		$interviewTable->addInterview($interview[0], $interview[1], $interview[2], $interview[3], $interview[4]);
		foreach ($questions as $questionItem)
		{
		//	$questionTable->addQuestion($questionItem[0], $questionItem[1], $questionItem[2]);
		}
	}

	public function saveAllDataAction($interviews, $questions, $options)
	{
		$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
		$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
		$optionTable = new \Savmaxru\Forms\Model\OptionTable();

		$lastIdQuestion = $questionTable->getMaxIDKey();
		foreach ($interviews as $interviewItem)
		{
			$interviewTable->addInterview($interviewItem[0], $interviewItem[1], $interviewItem[2], $interviewItem[3], $interviewItem[4]);
		}
		foreach ($questions as $questionItem)
		{
			//$questionTable->addQuestion($questionItem[0], $questionItem[1], $questionItem[2]);
		}
		foreach ($options as $optionItem)
		{
			$optionItem[0] = $optionItem[0] + $lastIdQuestion;
			$optionTable->addOption($optionItem[0], $optionItem[1], $optionItem[2]);
		}
	}
}