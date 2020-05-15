<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/resultsgallery.bundle.css',
	'js' => 'dist/resultsgallery.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectsgallery',
		'savmaxru.resultitemform',
	],
	'skip_core' => false,
];