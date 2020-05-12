<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class ConnectionInterviewWithQuestionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_connection_interview_with_question';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_INTERVIEW"),
			new IntegerField("ID_QUESTION"),
		];
	}

	public function addRow($idInterview, $idQuestion)
	{
		$result = ConnectionInterviewWithQuestionTable::add([
			'ID_INTERVIEW' => $idInterview,
			'ID_QUESTION' => $idQuestion,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public function getAllRows()
	{
		$result = ConnectionInterviewWithQuestionTable::getList([
			'select' => ['ID', 'ID_INTERVIEW', 'ID_QUESTION']
		]);
		$rows = $result ->fetchAll();
		return $rows;
	}

	public function getIdQuestionForIdInterview($idInterview)
	{
		$result = ConnectionInterviewWithQuestionTable::getList([
			'select' => ['ID', 'ID_INTERVIEW', 'ID_QUESTION'],
			'filter' => ['ID_INTERVIEW' => $idInterview],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function deleteRow($id)
	{
		$result = ConnectionInterviewWithQuestionTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
			return $error;
		}
	}

	public function updateRow($id, $idInterview, $idPosition)
	{
		$result = ConnectionInterviewWithQuestionTable::update($id, [
			'ID_INTERVIEW' => $idInterview,
			'ID_QUESTION' => $idPosition,
		]);

		if ($result->isSuccess())
		{
			return true;
		}
	}

	public function getIdQuestionForIdInterviewAndIdQuestion($idInterview, $idQuestion)
	{
		$result = ConnectionInterviewWithQuestionTable::getList([
			'select' => ['ID', 'ID_INTERVIEW', 'ID_QUESTION'],
			'filter' => ['ID_INTERVIEW' => $idInterview, 'ID_QUESTION' => $idQuestion],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}
}