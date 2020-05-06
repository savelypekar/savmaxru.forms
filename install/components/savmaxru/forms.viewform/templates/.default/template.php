<?php
\Bitrix\Main\UI\Extension::load('savmaxru.viewform');

$optionTable = new \Savmaxru\Forms\Model\OptionTable();
$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();
$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();


//$result41 = $answerResultTable->saveAnswerResult(10, 36, 1);
//echo $result41;
?>
<script>
	let viewform = new Savmaxru.ViewForm();
	document.getElementById('savmaxru-forms').append(viewform.getHTMLObject());
</script>

<!--
Save all result

<script>
	let result = {
			ID: 125,
			questions: [
				{
					ID: 11215,
					options: {
						'userValue': "Kaliningrad" ,
					}
				},
				{
					ID: 11216,
					options: {
						'userValue': "Paris" ,
					}
				},
				{
					ID: 11217,
					options: [
						6787,2323,
					]
				}
			]
	};
	BX.ajax.runComponentAction('savmaxru:forms.viewform', 'saveResult', {
		mode: 'class',
		data: {
			result: result,
		}
	});
	//console.log(result);
</script>
-->


<!--
Get the whole form by id

<script>
	let idInterview = '3';
	BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
		mode: 'class',
		data: {
			idInterview: idInterview,
		}
	}).then(function (response) {
		console.log(response);
	});
</script>
-->

<!--
Save structure interview with question and option

<script>
	let result = {
			ID: 615,
			//ID: 'NEW_FORM',
			title: 'title',
			change: "changed",
			visible: true,
			questions: [
				{
					ID: 83,
					index: 1,
					change: "changed",
					type: "DropDownList89",
					description: "text in description89",
					comment: "comment",
					required: true,
					options: [
						{
							ID: 59,
							index: 5,
							value: "Russia",
							change: "changed",
						},
						{
							ID: 58,
							value: "China",
							index: 2,
							change: "removed",
						},
					],
				},
				{
					index: 3,
					ID: 232323,
					type: "MultiLineTextBox",
					change: "changed",
					description: "text in description 2",
					options: [
						{
							ID: 232323,
							index: 1,
							value: "Spain",
							change: "changed",
						},
						{
							ID: 232323,
							value: "Italy",
							index: 2,
							change: "removed",
						},
					],
				},
				{
					ID: 232323,
					change: "removed",
				}
			]
	};
	BX.ajax.runComponentAction('savmaxru:forms.viewform', 'saveInterviewStructure', {
		mode: 'class',
		data: {
			result: result,
		}
	});
	console.log(result);
</script>
-->

<!--
Send results by amount
-->
<script>
	let idInterview = '123';
	let quantity = '7';
	let firstPosition = '0';
	BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendResults', {
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


<!--
Send ONE result

<script>
	let idResult = '30';
	BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendSelectedResult', {
		mode: 'class',
		data: {
			idResult: idResult,
		}
	}).then(function (response) {
		console.log(response);
	});
</script>
-->