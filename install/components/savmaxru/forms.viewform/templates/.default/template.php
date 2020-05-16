<?php
\Bitrix\Main\UI\Extension::load('savmaxru.viewform');
?>
<script>
	let viewform = new Savmaxru.ViewForm("<?php echo $arResult['ID'] ?>");
	document.getElementById('savmaxru-forms').append(viewform.getHTMLObject());
</script>