<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/myforms.bundle.css',
	'js' => 'dist/myforms.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectgui',
	],
	'skip_core' => false,
];