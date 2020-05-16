<?php
\Bitrix\Main\UI\Extension::load('savmaxru.results');
?>
<script>
	let results = new Savmaxru.Results();
	document.getElementById('savmaxru-forms').append(results.getHTMLObject());
</script>