<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;

\Bitrix\Main\Loader::includeModule('savmaxru.forms');


class CSavmaxruFormsRouter extends CBitrixComponent
{
	private $modeNames = [
		"results"=>'results',
		"edit" =>'editor',
		"editor" =>'editor',
		"result" =>'resultlist',
		'' => 'myforms',
		'view' => 'viewform',
		'viewform' => 'viewform',
	];

	private function getModeName()
	{
		$modeName = $this->modeNames[\Bitrix\Main\Context::getCurrent()->getRequest()['regime']];
		if($modeName === null)
		{
			$modeName = $this->modeNames[''];
		}

		return $modeName;
	}


	public function executeComponent()
	{
		$this->arResult = [
			'REGIME' => $this->getModeName(),
			'ID' => \Bitrix\Main\Context::getCurrent()->getRequest()['id'],
		];
		$this->includeComponentTemplate();
	}
}