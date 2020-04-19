<?php

namespace Savmaxru\Forms\Model;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class ConnectionInterviewWithQuestionTable extends DataManager
{
	public static function getTableName()
	{
		return 'savmaxru_forms_connection_interview_with_question';
	}

	public static function getMap()
	{
		return [
			new IntegerField("ID", [
				"primary" => true,
				"autocomplete" => true
			]),
			new IntegerField("ID_INTERVIEW"),
			new IntegerField("ID_QUESTION"),
		];
	}

	public function addRow($idInterview, $idPosition)
	{
		$result = ConnectionInterviewWithQuestionTable::add(array(
			'ID_INTERVIEW' => $idInterview,
			'ID_QUESTION' => $idPosition,
		));

		if ($result->isSuccess())
		{
			$id = $result->getId();
		}
	}

	public function getAllRows()
	{
		$result = ConnectionInterviewWithQuestionTable::getList(array(
			'select' => array('ID', 'ID_INTERVIEW', 'ID_QUESTION')
		));
		$rows = $result ->fetchAll();
		return $rows;
	}

	public function getIdQuestionForIdInterview($idInterview)
	{
		$setIdQuestion = [];
		$result = ConnectionInterviewWithQuestionTable::getList(array(
			'select' => array('ID', 'ID_INTERVIEW', 'ID_QUESTION')
		));
		$rows = $result ->fetchAll();

		foreach ($rows as $row)
		{
			if ($row['ID_INTERVIEW'] == $idInterview)
			{
				array_push($setIdQuestion, $row['ID_QUESTION']);
			}
		}
		return $setIdQuestion;
	}
}