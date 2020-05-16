<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'css' => 'dist/menuitemsformgallery.bundle.css',
	'js' => 'dist/menuitemsformgallery.bundle.js',
	'rel' => [
		'main.core',
		'savmaxru.objectsgallery',
		'savmaxru.menuitemform',
	],
	'skip_core' => false,
];