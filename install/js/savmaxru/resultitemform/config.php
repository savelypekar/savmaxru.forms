<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/resultitemform.bundle.css',
	'js' => 'dist/resultitemform.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectgui',
	],
	'skip_core' => false,
];