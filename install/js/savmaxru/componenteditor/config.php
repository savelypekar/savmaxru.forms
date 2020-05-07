<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/componenteditor.bundle.css',
	'js' => 'dist/componenteditor.bundle.js',
	'rel' => [
		'savmaxru.modalwindow',
		'main.core',
		'savmaxru.objectgui',
	],
	'skip_core' => false,
];