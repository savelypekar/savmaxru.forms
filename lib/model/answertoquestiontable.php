<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class AnswerToQuestionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_answer_to_question';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_QUESTION"),
			new IntegerField("ID_RESULT"),
			new StringField("CONTENT_ANSWER"),
		];
	}

	public static function saveAnswerToQuestion($idQuestion, $idResult, $contentAnswer)
	{
		$result = AnswerToQuestionTable::add([
			'ID_QUESTION' => $idQuestion,
			'ID_RESULT' => $idResult,
			'CONTENT_ANSWER' => $contentAnswer,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
		}
	}

	public static function getAllAnswer()
	{
		$result = AnswerToQuestionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'ID_RESULT', 'CONTENT_ANSWER']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public static function getResultByIdQuestion($idQuestion)
	{
		$resultRows = [];
		$result = AnswerToQuestionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'ID_RESULT', 'CONTENT_ANSWER']
		]);
		$rows = $result ->fetchAll();

		foreach ($rows as $row)
		{
			if ($row['ID_QUESTION'] == $idQuestion)
			{
				array_push($resultRows, $row);
			}
		}
		return $resultRows;
	}

	public static function getAnswerByUserId($idUser)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$setAnswer = $answerResultTable->getResultByIdUser($idUser);
		$setAnswerById = [];

		$result = AnswerToQuestionTable::getList(array(
			'select' => array('ID', 'ID_QUESTION', 'ID_RESULT', 'CONTENT_ANSWER')
		));
		$setAnswerToQuestion = $result ->fetchAll();

		foreach ($setAnswerToQuestion as $answerToQuestion)
		{
			foreach ($setAnswer as $answer)
			{
				if ($answer['ID_RESULT']==$answerToQuestion["ID_RESULT"])
				{
					array_push($setAnswerById, $answerToQuestion);
				}
			}
		}
		return $setAnswerById;
	}

	public static function getAnswerByInterviewId($idInterview)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$setAnswer = $answerResultTable->getResultByIdInterview($idInterview);
		$setAnswerByIdInterview = [];

		$result = AnswerToQuestionTable::getList(array(
			'select' => array('ID', 'ID_QUESTION', 'ID_RESULT', 'CONTENT_ANSWER')
		));
		$setAnswerToQuestion = $result ->fetchAll();

		foreach ($setAnswerToQuestion as $answerToQuestion)
		{
			foreach ($setAnswer as $answer)
			{
				if ($answer['ID_RESULT']==$answerToQuestion["ID_RESULT"])
				{
					array_push($setAnswerByIdInterview, $answerToQuestion);
				}
			}
		}
		return $setAnswerByIdInterview;
	}
}