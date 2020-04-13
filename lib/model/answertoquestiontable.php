<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class AnswerToQuestionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_answer_to_question';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_QUESTION"),
			new IntegerField("IN_RESULT"),
		];
	}
}