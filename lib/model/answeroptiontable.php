<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class AnswerOptionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_answer_option';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_ANSWER"),
			new IntegerField("ID_OPTION"),
			new StringField("CONTENT"),
		];
	}

	public static function saveOptionAnswer($idAnswer, $idOption, $content)
	{
		$result = AnswerOptionTable::add(array(
			'ID_ANSWER' => $idAnswer,
			'ID_OPTION' => $idOption,
			'CONTENT' => $content,
		));

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public static function getAllAnswer()
	{
		$result = AnswerOptionTable::getList(array(
			'select' => array('ID', 'ID_ANSWER', 'ID_OPTION', 'CONTENT')
		));
		$row = $result ->fetchAll();
		return $row;
	}

	public static function getAnswerByIdAnswer($idAnswer)
	{
		$result = AnswerOptionTable::getList([
			'select' => ['ID', 'ID_ANSWER', 'ID_OPTION', 'CONTENT'],
			'filter' => ['ID_ANSWER' => $idAnswer],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function deleteRow($id)
	{
		$result = AnswerOptionTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
			return $error;
		}
	}

	public function updateRow($id, $idAnswer, $idOption)
	{
		$result = AnswerOptionTable::update($id, [
			'ID_ANSWER' => $idAnswer,
			'ID_OPTION' => $idOption,
		]);

		if ($result->isSuccess())
		{
			return true;
		}
	}
}
