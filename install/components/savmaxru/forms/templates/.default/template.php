<div class="savmaxru-forms">

<?php
$APPLICATION->IncludeComponent(
	'savmaxru:forms.'.$arResult['MODE'],
	'.default',
	[
		'URL' => $arResult['URL'],
	]
);
?>
</div>
