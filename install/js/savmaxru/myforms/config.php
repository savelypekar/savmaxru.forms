<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/myforms.bundle.css',
	'js' => 'dist/myforms.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'savmaxru.objectsgallery',
		'savmaxru.menuitemform',
		'main.core',
	],
	'skip_core' => false,
];