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
}