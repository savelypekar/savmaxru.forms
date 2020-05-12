<?php
\Bitrix\Main\UI\Extension::load('savmaxru.myforms');
?>
<script>
	let myforms = new Savmaxru.MyForms();
	document.getElementById('savmaxru-forms').append(myforms.getHTMLObject());
</script>

