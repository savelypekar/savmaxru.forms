<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/componentsgallery.bundle.css',
	'js' => 'dist/componentsgallery.bundle.js',
	'rel' => [
		'savmaxru.objectsgallery',
		'savmaxru.guicomponents',
		'savmaxru.modalwindow',
		'main.core',
	],
	'skip_core' => false,
];