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
					ID: 71,
					options: {
						'userValue': "Kaliningrad" ,
					}
				},
				{
					ID: 72,
					options: {
						'userValue': "Paris" ,
					}
				},
				{
					ID: 73,
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
	console.log(result);
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
