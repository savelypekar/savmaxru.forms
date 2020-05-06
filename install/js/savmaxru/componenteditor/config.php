<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/componenteditor.bundle.css',
	'js' => 'dist/componenteditor.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.modalwindow',
	],
	'skip_core' => false,
];