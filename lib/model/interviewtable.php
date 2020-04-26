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
			new DateField("DATE_CREATE"),
			new DateField("DATE_EDIT"),
			new BooleanField("VISIBLE"),
		];
	}

	public function addInterview($idAuthor, $title, $dateCreate, $dateEdit, $visible)
	{
		$result = InterviewTable::add([
			'ID_AUTHOR' => $idAuthor,
			'TITLE' => $title,
			'DATE_CREATE' => $dateCreate,
			'DATE_EDIT' => $dateEdit,
			'VISIBLE' => $visible,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
		}
	}

	public function getAllInterviews()
	{
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'DATE_EDIT', 'VISIBLE']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getInterviewsByIdAuthor($idAuthor)
	{
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'DATE_EDIT', 'VISIBLE'],
			'filter' => ['ID_AUTHOR' => $idAuthor],
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getInterviewsByAmount($quantity, $firstPosition)
	{
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'DATE_EDIT', 'VISIBLE'],
			'limit' => $quantity,
			'offset' => $firstPosition,
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getInterviewsCurrentUser($quantity, $firstPosition)
	{
		global $USER;
		$idUser = $USER->GetID();
		$result = InterviewTable::getList([
			'select' => ['ID', 'ID_AUTHOR', 'TITLE', 'DATE_CREATE', 'DATE_EDIT', 'VISIBLE'],
			'filter' => ['ID_AUTHOR' => $idUser],
			'limit' => $quantity,
			'offset' => $firstPosition,
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function deleteRow($id)
	{
		$result = InterviewTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
		}
	}

	public function updateRow($id, $idAuthor, $title, $dateCreate, $dateEdit, $visible)
	{
		$result = InterviewTable::update($id, [
				'ID_AUTHOR' => $idAuthor,
				'TITLE' => $title,
				'DATE_CREATE' => $dateCreate,
				'DATE_EDIT' => $dateEdit,
				'VISIBLE' => $visible,
		]);

		if ($result->isSuccess())
		{

		}
	}
}