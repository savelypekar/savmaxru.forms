<?php
\Bitrix\Main\UI\Extension::load('savmaxru.results');
?>
<script>
	let results = new Savmaxru.Results("<?php echo $arResult['ID'] ?>");
	document.getElementById('savmaxru-forms').append(results.getHTMLObject());
</script>