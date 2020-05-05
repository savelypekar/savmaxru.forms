<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/guicomponents.bundle.css',
	'js' => 'dist/guicomponents.bundle.js',
	'rel' => [
		'main.core',
	],
	'skip_core' => false,
];