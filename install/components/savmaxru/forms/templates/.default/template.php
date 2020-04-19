<div class="savmaxru-forms-main-container" id="savmaxru-forms-main-container">

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
