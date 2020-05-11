<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/menuitemform.bundle.css',
	'js' => 'dist/menuitemform.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectgui',
	],
	'skip_core' => false,
];