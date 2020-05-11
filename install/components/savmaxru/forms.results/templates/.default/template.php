<?php

?>

<!--
Send ONE result
-->
<script>
	let idResult = '30';
	BX.ajax.runComponentAction('savmaxru:forms.results', 'sendSelectedResult', {
		mode: 'class',
		data: {
			idResult: idResult,
		}
	}).then(function (response) {
		console.log(response);
	});
</script>
