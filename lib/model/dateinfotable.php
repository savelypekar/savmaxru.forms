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
			new StringField("TYPE_OBJECT"),
			new StringField("DATE_CREATE"),
			new StringField("DATE_CHANGE"),
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
				'TYPE_OBJECT',
				'DATE_CREATE'
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
			$id = $result->getId();
			return $id;
		}
	}

	public function monthToText($numberMonth)
	{
		$numberMonth = intval($numberMonth);
		switch ($numberMonth) {
			case 1:
				$textMonth = 'JANUARY';
				break;
			case 2:
				$textMonth = 'FEBRUARY';
				break;
			case 3:
				$textMonth = 'MARCH';
				break;
			case 4:
				$textMonth = 'APRIL';
				break;
			case 5:
				$textMonth = 'MAY';
				break;
			case 6:
				$textMonth = 'JUNE';
				break;
			case 7:
				$textMonth = 'JULY';
				break;
			case 8:
				$textMonth = 'AUGUST';
				break;
			case 9:
				$textMonth = 'SEPTEMBER';
				break;
			case 10:
				$textMonth = 'OCTOBER';
				break;
			case 11:
				$textMonth = 'NOVEMBER';
				break;
			case 12:
				$textMonth = 'DECEMBER';
				break;
			default:
				$textMonth = 'INVALID MONTH';
		}
		return $textMonth;
	}
}
