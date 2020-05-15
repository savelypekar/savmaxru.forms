<?php
\Bitrix\Main\UI\Extension::load('savmaxru.editor');
?>

<script>
	let editor = new Savmaxru.Editor("<?php echo $arResult['ID'] ?>");
	document.getElementById('savmaxru-forms').append(editor.getHTMLObject());

	let result = {
		ID: 125,
		//ID: 'NEW_FORM',
		title: 'title new form ',
		change: "changed",
		visible: true,
		questions: [
			{
				ID: 12,
				index: 1,
				type: "DropDownList",
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

		result = {
			ID: 'NEW_FORM',
			title: 'tisdsds ',
			visible: true,
			questions: [
				{
					ID: 121212,
					index: 1,
					type: "CheckboxList",
					description: "Текст вопроса",
					comment: "Пояснительный комметарий",
					required: true,

					options: [
						{
							index: 1,
							ID: 121212,
							value: "Russia",
						},
						{
							index: 2,
							ID: 121212,
							value: "Russiaaaa",
						},
					],

				},{
					ID: 121212,
					index: 2,
					type: "Heading",
					options: [
						{
							index: 1,
							value: 'Такой вот опрос',
							ID: 121212,
						}
					]
				},{
					ID: 121212,
					index: 3,
					type: "Button",
					options: [
						{
							ID: 121212,
							index: 1,
							value: 'Отправить',
						}
					]
				},{
					ID: 121212,
					index: 4,
					type: "MultiLineTextBox",
					options: [
						{
							value: '',
						}
					]
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
