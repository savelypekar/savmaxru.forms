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

	public function getAllOptions()
	{
		$result = OptionTable::getList(array(
			'select' => array('ID', 'ID_QUESTION', 'CONTENT', 'POSITION')
		));
		$arResult['123456'] = $result ->fetchAll();
		return $arResult['123456'];
	}
}