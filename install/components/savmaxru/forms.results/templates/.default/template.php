<?php

?>

<!--
Send ONE result
-->
<script>
	let idResult = '10';
	BX.ajax.runComponentAction('savmaxru:forms.results', 'sendSelectedResult', {
		mode: 'class',
		data: {
			idResult: idResult,
		}
	}).then(function (response) {
		console.log(response);
	});
</script>
-->

<!--Send results by amount-->


<script>
	console.log(898989);
	let idInterview = '14';
	let quantity = '70';
	let firstPosition = '1';
	BX.ajax.runComponentAction('savmaxru:forms.results', 'sendResults', {
		mode: 'class',
		data: {
			idInterview: idInterview,
			quantity: quantity,
			firstPosition: firstPosition,
		}
	}).then(function (response) {
		console.log(response);
	});
</script>
