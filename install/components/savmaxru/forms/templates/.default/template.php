<div class="savmaxru-forms" id="savmaxru-forms">
<?php

$APPLICATION->IncludeComponent(
	'savmaxru:forms.'.$arResult['REGIME'],
	'.default',
	[
		'ID' => $arResult['ID'],
	]
);
?>
</div>
