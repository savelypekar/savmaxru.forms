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
		];
	}

	public static function saveAnswerToQuestion($idQuestion, $idResult)
	{
		$result = AnswerToQuestionTable::add([
			'ID_QUESTION' => $idQuestion,
			'ID_RESULT' => $idResult,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public static function getAllAnswer()
	{
		$result = AnswerToQuestionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'ID_RESULT']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public static function getResultByIdQuestion($idQuestion)
	{
		$result = AnswerToQuestionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'ID_RESULT'],
			'filter' => ['ID_QUESTION' => $idQuestion],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public static function getResultByIdResult($idResult)
	{
		$result = AnswerToQuestionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'ID_RESULT'],
			'filter' => ['ID_RESULT' => $idResult],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public static function getAnswerByUserId($idUser)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$setAnswer = $answerResultTable->getResultByIdUser($idUser);
		$setAnswerById = [];
		$setUniqueId = [];

		foreach ($setAnswer as $answer)
		{
			if (!in_array($answer['ID_RESULT'], $setUniqueId))
			{
				array_push($setUniqueId, $answer['ID_RESULT']);
			}
		}

		$result = AnswerToQuestionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'ID_RESULT'],
			'filter' => ['ID_RESULT' => $setUniqueId],
		]);
		$setAnswerById = $result->fetchAll();

		return $setAnswerById;
	}

	public static function getAnswerByInterviewId($idInterview)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$setAnswer = $answerResultTable->getResultByIdInterview($idInterview);
		$setAnswerByIdInterview = [];
		$setUniqueId = [];

		foreach ($setAnswer as $answer)
		{
			if (!in_array($answer['ID_RESULT'], $setUniqueId))
			{
				array_push($setUniqueId, $answer['ID_RESULT']);
			}
		}

		$result = AnswerToQuestionTable::getList(array(
			'select' => array('ID', 'ID_QUESTION', 'ID_RESULT'),
			'filter' => ['ID_RESULT' => $setUniqueId],
		));
		$setAnswerByIdInterview = $result->fetchAll();

		return $setAnswerByIdInterview;
	}

	public function deleteRow($id)
	{
		$result = AnswerToQuestionTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
			return $error;
		}
	}

	public function updateRow($id, $idQuestion, $idResult)
	{
		$result = AnswerToQuestionTable::update($id, [
			'ID_QUESTION' => $idQuestion,
			'ID_RESULT' => $idResult,
		]);

		if ($result->isSuccess())
		{
			return true;
		}
	}
}