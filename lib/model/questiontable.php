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
		$result = QuestionTable::add(array(
			'TYPE' => $type,
			'CONTENT' => $content,
			'POSITION' => $position,
		));

		if ($result->isSuccess())
		{
			$id = $result->getId();
		}
	}

	public function getAllQuestions()
	{
		$result = QuestionTable::getList(array(
			'select' => array('ID', 'TYPE', 'CONTENT', 'POSITION')
		));
		$row = $result ->fetchAll();
		return $row;
	}
}