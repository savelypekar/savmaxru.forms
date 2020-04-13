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
		];
	}
}
