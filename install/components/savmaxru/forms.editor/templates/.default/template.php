<?php
\Bitrix\Main\UI\Extension::load('savmaxru.editor');
?>
<!--
Save structure interview with question and option
-->
<script>
	let editor = new Savmaxru.Editor("<?php echo $arResult['ID'] ?>");
	document.getElementById('savmaxru-forms').append(editor.getHTMLObject());

	let result = {
		//ID: 811,
		ID: 'NEW_FORM',
		title: 'title new form ',
		//change: "changed",
		visible: true,
		questions: [
			{
				ID: 12,
				index: 1,
				type: "DropDownList1",
				description: "text in description 000",
				//comment: "comment",
				//required: true,
				options: [
					{
						ID: 80,
						value: "Russia",
						index: 1,
					},
					{
						ID: 81,
						value: "China",
						index: 2,
					},
				],
			},
			{
				ID: 13,
				index: 2,
				type: "MultiLineTextBox",
				description: "text in description 2",
				options: [
					{
						ID: 90,
						index: 1,
						value: "Spain",
					},
					{
						ID: 91,
						value: "Italy",
						index: 2,
					},
				],
			},
			{
				ID: 14,
				//	change: "removed",
			}
		]
	};
	BX.ajax.runComponentAction('savmaxru:forms.editor', 'saveInterviewStructure', {
		mode: 'class',
		data: {
			result: result,
		}
	});
	console.log(result);
</script>
