<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/objectsgallery.bundle.css',
	'js' => 'dist/objectsgallery.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'main.core',
	],
	'skip_core' => false,
];