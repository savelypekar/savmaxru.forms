<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/dropdownlist.bundle.css',
	'js' => 'dist/dropdownlist.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.forms.gui.components.objectgui',
	],
	'skip_core' => false,
];