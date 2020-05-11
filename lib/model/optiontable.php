<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class OptionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_option';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_QUESTION"),
			new StringField("CONTENT"),
			new IntegerField("POSITION"),
		];
	}

	public function addOption($idQuestion, $content, $position)
	{
		$result = OptionTable::add([
			'ID_QUESTION' => $idQuestion,
			'CONTENT' => $content,
			'POSITION' => $position,
		]);

		if ($result->isSuccess())
		{
			$id = $result->getId();
		}
	}

	public function getAllOptions()
	{
		$result = OptionTable::getList([
			'select' => ['ID', 'ID_QUESTION', 'CONTENT', 'POSITION']
		]);
		$row = $result ->fetchAll();
		return $row;
	}

	public function getOptionsForQuestion($idQuestion)
	{
		$result = OptionTable::getList([
			'select' => array('ID', 'ID_QUESTION', 'CONTENT', 'POSITION'),
			'filter' =>['ID_QUESTION' => $idQuestion],
		]);
		$row = $result -> fetchAll();
		return $row;
	}

	public function deleteRow($id)
	{
		$result = OptionTable::delete($id);

		if (!$result->isSuccess())
		{
			$error = $result->getErrorMessages();
		}
	}

	public function updateRow($id, $data)
	{
		$result = OptionTable::update($id, $data);

		if ($result->isSuccess())
		{

		}
	}
}