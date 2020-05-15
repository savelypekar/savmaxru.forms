<?php
\Bitrix\Main\UI\Extension::load('savmaxru.myforms');
?>

<script>
	let myforms = new Savmaxru.MyForms();
	document.getElementById('savmaxru-forms').append(myforms.getHTMLObject());
</script>

<script>
	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewCurrentUser', {
		mode: 'class',
		data: {
			quantity: '1',
			firstPosition: '1'
		}
	}).then(function (response) {
		console.log(response);
	});
</script>


