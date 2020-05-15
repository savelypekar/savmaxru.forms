<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\Entity\BooleanField;
use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\DateField;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class InterviewTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_interview';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new StringField("ID_AUTHOR"),
			new StringField("TITLE"),
			new StringField("DATE_CREATE"),
			new BooleanField("VISIBLE"),
		];
	}

	public function addInterview($idAuthor, $title, $dateCreate, $visible)
	{
		$result = InterviewTable::add([
			'ID_AUTHOR' => $idAuthor,
			'TITLE' => $title,
			'DATE_CREATE' => $dateCreate,
			'VISIBLE' => $visible,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public function getAllInterviews()
	{
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'VISIBLE']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getInterviewsByIdAuthor($idAuthor)
	{
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'VISIBLE'],
			'filter' => ['ID_AUTHOR' => $idAuthor],
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getInterviewsByAmount($quantity, $firstPosition)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		$firstPosition = $firstPosition - 1;
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'VISIBLE'],
			'limit' => $quantity,
			'offset' => $firstPosition,
		]);
		$rows = $result ->fetchAll();
		foreach ($rows as &$row)
		{
			$count = $answerResultTable->getCountAnswersByIdInterview($row['ID']);
			$row['COUNT_ANSWERS'] = $count;
		}
		return $rows;
	}

	public function getInterviewsCurrentUser($quantity, $firstPosition)
	{
		$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
		global $USER;
		$firstPosition = $firstPosition - 1;
		$idUser = $USER->GetID();
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'VISIBLE'],
			'filter' => ['ID_AUTHOR' => $idUser],
			'limit' => $quantity,
			'offset' => $firstPosition,
		]);
		$rows = $result ->fetchAll();
		foreach ($rows as &$row)
		{
			$count = $answerResultTable->getCountAnswersByIdInterview($row['ID']);
			$row['COUNT_ANSWERS'] = $count;
		}
		return $rows;
	}

	public function deleteRow($id)
	{
		$result = InterviewTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
			return $error;
		}
	}

	public function updateRow($id, $data)
	{
		$result = InterviewTable::update($id, $data);

		if ($result->isSuccess())
		{
			return true;
		}
	}

	public function getMaxIDKey()
	{
		$result = InterviewTable::getList([
			'select' => ['ID'],
		]);
		$maxIDKey = max($result ->fetchAll());
		return $maxIDKey;
	}

	public function getInterviewsById($id)
	{
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'VISIBLE'],
			'filter' => ['ID' => $id],
		]);
		$row = $result ->fetchAll();
		return $row;
	}
}