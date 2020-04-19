<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/galleryofobjects.bundle.css',
	'js' => 'dist/galleryofobjects.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.forms.gui.objectgui',
	],
	'skip_core' => false,
];