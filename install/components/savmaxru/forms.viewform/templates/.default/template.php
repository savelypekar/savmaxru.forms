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
			ID: 8001,
			questions: [
				{
					ID: 9002,
					options: {
						'userValue': "France" ,
					}
				},
				{
					ID: 9001,
					options: {
						'userValue': "Spain" ,
					}
				},
				{
					ID: 9003,
					options: [
						612,613,
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
-->
<script>
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
	BX.ajax.runComponentAction('savmaxru:forms.viewform', 'saveInterviewStructure', {
		mode: 'class',
		data: {
			result: result,
		}
	});
	console.log(result);
</script>


<!--
Send results by amount

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
-->

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