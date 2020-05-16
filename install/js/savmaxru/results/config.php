<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/results.bundle.css',
	'js' => 'dist/results.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'savmaxru.resultsgallery',
		'savmaxru.modalwindow',
		'main.core',
	],
	'skip_core' => false,
];