<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/idmanager.bundle.css',
	'js' => 'dist/idmanager.bundle.js',
	'rel' => [
		'main.polyfill.core',
	],
	'skip_core' => true,
];