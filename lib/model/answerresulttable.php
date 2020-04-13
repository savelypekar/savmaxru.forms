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
}