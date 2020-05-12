<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class DateInfoTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_date_info';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_OBJECT"),
			new StringField("TYPE_OBJECT"),

			new StringField("YEAR_CREATE"),
			new StringField("MONTH_CREATE"),
			new StringField("DAY_CREATE"),
			new StringField("TIME_CREATE"),

			new StringField("YEAR_CHANGE"),
			new StringField("MONTH_CHANGE"),
			new StringField("DAY_CHANGE"),
			new StringField("TIME_CHANGE"),
		];
	}

	public static function saveDate($data)
	{
		$result = DateInfoTable::add($data);

		if ($result->isSuccess())
		{
			$id = $result->getId();
			return $id;
		}
	}

	public static function getDateById($idDate)
	{
		$result = DateInfoTable::getList([
			'select' => [
				'ID',
				'ID_OBJECT',
				'TYPE_OBJECT',
				'YEAR_CREATE',
				'MONTH_CREATE',
				'DAY_CREATE',
				'TIME_CREATE',
				'YEAR_CHANGE',
				'MONTH_CHANGE',
				'DAY_CHANGE',
				'TIME_CHANGE',
			],
			'filter' => ['ID' => $idDate],
		]);
		$rows = $result ->fetchAll();

		return $rows;
	}

	public function updateRow($id, $data)
	{
		$result = DateInfoTable::update($id, $data);

		if ($result->isSuccess())
		{
			return true;
		}
	}
}
