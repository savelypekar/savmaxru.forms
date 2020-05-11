<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/results.bundle.css',
	'js' => 'dist/results.bundle.js',
	'rel' => [
		'main.core',
	],
	'skip_core' => false,
];