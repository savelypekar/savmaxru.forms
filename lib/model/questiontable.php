<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class QuestionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_question';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new StringField("TYPE"),
			new StringField("CONTENT"),
			new IntegerField("POSITION"),
			new StringField("COMMENT"),
		];
	}

	public function addQuestion($type, $content, $position, $comment)
	{
		$result = QuestionTable::add([
			'TYPE' => $type,
			'CONTENT' => $content,
			'POSITION' => $position,
			'COMMENT' => $comment,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public function getAllQuestions()
	{
		$result = QuestionTable::getList([
			'select' => ['ID', 'TYPE', 'CONTENT', 'POSITION']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getQuestionsForSetIdInterview($idInterview)
	{
		$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();
		$setIdQuestion = $connectionInterviewWithQuestion->getIdQuestionForIdInterview($idInterview);
		$questions = [];
		$setUniqueId = [];

		foreach ($setIdQuestion as $idQuestion)
		{
			if (!in_array($idQuestion['ID_QUESTION'], $setUniqueId))
			{
				array_push($setUniqueId, $idQuestion['ID_QUESTION']);
			}
		}

		$result = QuestionTable::getList([
			'select' => array('ID', 'TYPE', 'CONTENT', 'COMMENT', 'POSITION'),
			'filter' => ['ID' => $setUniqueId],
		]);
		$setQuestions = $result->fetchAll();

		return $setQuestions;
	}

	public function deleteRow($id)
	{
		$result = QuestionTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
			return $error;
		}
	}

	public function updateRow($id, $data)
	{
		$result = QuestionTable::update($id, $data);

		if ($result->isSuccess())
		{
			return true;
		}
	}

	public function getMaxIDKey()
	{
		$result = QuestionTable::getList([
			'select' => ['ID'],
		]);
		$maxIDKey = max($result ->fetchAll());
		$result = $maxIDKey['ID'];
		return $result;
	}

	public function getTypeByIdQuestion($idQuestion)
	{
		$result = QuestionTable::getList([
			'select' => ['TYPE'],
			'filter' => ['ID' => $idQuestion],
		]);
		$type = $result ->fetchAll();
		return $type[0]['TYPE'];
	}

	public function getQuestionById($idQuestion)
	{
		$result = QuestionTable::getList([
			'select' => ['ID', 'TYPE', 'CONTENT', 'POSITION'],
			'filter' => ['ID' => $idQuestion],
		]);
		$row = $result ->fetchAll();
		return $row;
	}
}