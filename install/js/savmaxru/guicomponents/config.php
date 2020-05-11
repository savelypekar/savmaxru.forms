<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/guicomponents.bundle.css',
	'js' => 'dist/guicomponents.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'savmaxru.propertychangemanager',
		'main.core',
	],
	'skip_core' => false,
];