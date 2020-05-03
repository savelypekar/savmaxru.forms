<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/plugins.bundle.css',
	'js' => 'dist/plugins.bundle.js',
	'rel' => [
		'savmaxru.objectgui',
		'main.core',
	],
	'skip_core' => false,
];