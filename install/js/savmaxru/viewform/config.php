<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/viewform.bundle.css',
	'js' => 'dist/viewform.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'savmaxru.componentsgallery',
		'main.core',
	],
	'skip_core' => false,
];