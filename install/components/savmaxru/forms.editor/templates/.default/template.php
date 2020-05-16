<?php
\Bitrix\Main\UI\Extension::load('savmaxru.editor');
?>
<script>
	let editor = new Savmaxru.Editor("<?php echo $arResult['ID'] ?>");
	document.getElementById('savmaxru-forms').append(editor.getHTMLObject());
</script>
