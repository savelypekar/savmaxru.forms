<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class AnswerResultTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_answer_result';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_RESULT"),
			new IntegerField("ID_INTERVIEW"),
			new IntegerField("ID_USER"),
		];
	}

	public static function saveAnswerResult($idResult, $idInterview, $idUser)
	{
		$result = AnswerResultTable::add(array(
			'ID_RESULT' => $idResult,
			'ID_INTERVIEW' => $idInterview,
			'ID_USER' => $idUser,
		));

		if ($result->isSuccess())
		{
			$id = $result->getId();
		}
	}

	public function getAllResult()
	{
		$result = AnswerResultTable::getList(array(
			'select' => array('ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER')
		));
		$row = $result ->fetchAll();
		return $row;
	}

	public function getResultByIdUser($idUser)
	{
		$resultRows = [];
		$result = AnswerResultTable::getList(array(
			'select' => array('ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER')
		));
		$rows = $result ->fetchAll();

		foreach ($rows as $row)
		{
			if ($row['ID_USER'] == $idUser)
			{
				array_push($resultRows, $row);
			}
		}

		return $resultRows;
	}

	public function getResultByIdInterview($idInterview)
	{
		$resultRows = [];
		$result = AnswerResultTable::getList(array(
			'select' => array('ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER')
		));
		$rows = $result ->fetchAll();

		foreach ($rows as $row)
		{
			if ($row['ID_INTERVIEW'] == $idInterview)
			{
				array_push($resultRows, $row);
			}
		}

		return $resultRows;
	}
}