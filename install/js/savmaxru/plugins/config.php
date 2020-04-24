<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/plugins.bundle.css',
	'js' => 'dist/plugins.bundle.js',
	'rel' => [
		'main.polyfill.core',
	],
	'skip_core' => true,
];