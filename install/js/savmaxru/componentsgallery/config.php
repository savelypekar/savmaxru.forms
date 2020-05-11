<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/componentsgallery.bundle.css',
	'js' => 'dist/componentsgallery.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectsgallery',
		'savmaxru.guicomponents',
	],
	'skip_core' => false,
];