<?php

?>
<!--
Save structure interview with question and option
-->
<script>
	let result = {
		ID: 4,
		//ID: 'NEW_FORM',
		title: 'title new form 4445',
		change: "changed",
		visible: 1,
		questions: [
			{
				ID: 6,
				index: 3,
				type: "MultiLineTextBox",
				change: "changed",
				description: "text in description 111",
				//comment: "comment",
				//required: true,
				options: [
					{
						ID: 11,
						change: "changed",
						value: "Russia 0",
						index: 12,
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
