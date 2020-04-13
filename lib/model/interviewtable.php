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
}