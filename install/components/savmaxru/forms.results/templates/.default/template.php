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

<!--
Send results by amount

<script>
	let idInterview = '123';
	let quantity = '7';
	let firstPosition = '0';
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
-->