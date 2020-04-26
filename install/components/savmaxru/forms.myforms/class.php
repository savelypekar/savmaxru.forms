<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Loader;
use \Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Localization\Loc;


\Bitrix\Main\Loader::includeModule('savmaxru.forms');


class CSavmaxruFormsMyForms extends CBitrixComponent implements Controllerable
{
	private $modeNames = [
		"result" =>'result-list',
		'' => 'form-list',
	];

	private function getModeName()
	{
		$modeName = $this->modeNames[$this->arParams['MODE']];
		if($modeName === null)
		{
			$modeName = $this->modeNames[''];
		}

		return $modeName;
	}

	public function executeComponent()
	{
		$this->arResult = [
			'MODE' => $this->getModeName(),
			'URL' => $this->arParams['URL'],
		];

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
		$interviews = $interviewTable->getInterviewsCurrentUser($quantity, $firstPosition);

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
			$questionTable->addQuestion($questionItem[0], $questionItem[1], $questionItem[2]);
		}
	}
}