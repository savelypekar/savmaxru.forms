<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/viewform.bundle.css',
	'js' => 'dist/viewform.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectgui',
		'savmaxru.plugins',
		'savmaxru.guicomponents',
	],
	'skip_core' => false,
];