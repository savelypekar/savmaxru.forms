<?php
require $_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php";
echo 22;
$APPLICATION->IncludeComponent(
	'savmaxru:forms',
	'.default',
	[
		'MODE' => $_GET["mode"],
		'URL' => $_GET["url"],
	]
);
echo 22;
\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.objectgui');

?>
222;
<script type="text/javascript">
	let example = new Savmaxru.Objectgui();
	example.setName('123');
	alert ( example.getName() );
</script>

<?php

	require $_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php";
?>