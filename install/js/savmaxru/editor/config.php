<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/editor.bundle.css',
	'js' => 'dist/editor.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'main.core',
		'savmaxru.componenteditor',
		'savmaxru.componentsgallery',
		'savmaxru.guicomponents',
		'savmaxru.idmanager',
	],
	'skip_core' => false,
];