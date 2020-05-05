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
		];
	}

	public function addQuestion($type, $content, $position)
	{
		$result = QuestionTable::add([
			'TYPE' => $type,
			'CONTENT' => $content,
			'POSITION' => $position,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
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
				$result = QuestionTable::getList([
					'select' => array('ID', 'TYPE', 'CONTENT', 'POSITION'),
					'filter' => ['ID' => $idQuestion['ID_QUESTION']],
				]);
				$setQuestions = $result->fetchAll();
				if (!empty($setQuestions)) {
					array_push($questions, $setQuestions);
				}
			}
		}

		return $questions;
	}

	public function deleteRow($id)
	{
		$result = QuestionTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
		}
	}

	public function updateRow($id, $type, $content, $position)
	{
		$result = QuestionTable::update($id, [
			'TYPE' => $type,
			'CONTENT' => $content,
			'POSITION' => $position,
		]);

		if ($result->isSuccess())
		{

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
}