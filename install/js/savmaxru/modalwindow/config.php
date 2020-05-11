<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/modalwindow.bundle.css',
	'js' => 'dist/modalwindow.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'main.core',
	],
	'skip_core' => false,
];