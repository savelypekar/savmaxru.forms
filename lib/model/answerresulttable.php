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
			new StringField("NAME_USER"),
			new StringField("DATE"),
		];
	}

	public static function saveAnswerResult($idResult, $idInterview, $idUser, $nameUser, $date)
	{
		$result = AnswerResultTable::add([
			'ID_RESULT' => $idResult,
			'ID_INTERVIEW' => $idInterview,
			'ID_USER' => $idUser,
			'NAME_USER' => $nameUser,
			'DATE' => $date,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public function getAllResult()
	{
		$result = AnswerResultTable::getList([
			'select' => ['ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getResultByIdUser($idUser)
	{
		$result = AnswerResultTable::getList([
			'select' => ['ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER'],
			'filter' => ['ID_USER' => $idUser],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function getResultByIdInterview($idInterview)
	{
		$result = AnswerResultTable::getList([
			'select' => ['ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER'],
			'filter' => ['ID_INTERVIEW' => $idInterview],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function getResultByIdResult($idResult)
	{
		$result = AnswerResultTable::getList([
			'select' => ['ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER', 'NAME_USER', 'DATE'],
			'filter' => ['ID_RESULT' => $idResult],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function deleteRow($id)
	{
		$result = AnswerResultTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
			return $error;
		}
	}

	public function updateRow($id, $idResult, $idInterview, $idUser)
	{
		$result = AnswerResultTable::update($id, [
			'ID_RESULT' => $idResult,
			'ID_INTERVIEW' => $idInterview,
			'ID_USER' => $idUser,
		]);

		if ($result->isSuccess())
		{
			return true;
		}
	}

	public function getMaxIdResult()
	{
		$result = AnswerResultTable::getList([
			'select' => ['ID_RESULT'],
		]);
		$maxIdResult = max($result ->fetchAll());
		$result = $maxIdResult['ID_RESULT'];
		return $result;
	}

	public function getResultByIdInterviewWithAmount($idInterview, $quantity, $firstPosition)
	{
		$firstPosition = $firstPosition - 1;
		$result = AnswerResultTable::getList([
			'select' => ['ID', 'ID_RESULT', 'ID_INTERVIEW', 'ID_USER', 'NAME_USER', 'DATE'],
			'filter' => ['ID_INTERVIEW' => $idInterview],
			'limit' => $quantity,
			'offset' => $firstPosition,
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function getCountAnswersByIdInterview($idInterview)
	{
		$result = AnswerResultTable::getList([
			'select' => ['ID'],
			'filter' => ['ID_INTERVIEW' => $idInterview],
		]);
		$rows = $result ->fetchAll();
		$count = count($rows);
		return $count;
	}
}