<?php

\Bitrix\Main\UI\Extension::load('savmaxru.objectgui');
\Bitrix\Main\UI\Extension::load('savmaxru.myforms');
\Bitrix\Main\UI\Extension::load('savmaxru.idmanager');
\Bitrix\Main\UI\Extension::load('savmaxru.guicomponents');
?>

<?
$optionTable = new \Savmaxru\Forms\Model\OptionTable();
$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();
$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();


//alert(this.createContentByTemplate('<div class="#CLASS_NAME#">#CONTENT#</div>',{'#CLASS_NAME#':'тест','#CONTENT#':'обзор'}));

//$result11 = $optionTable->getAllOptions();
//$result12 = $optionTable->getOptionsForQuestion(1);
//$result13 = $optionTable->addOption(3, 345, 5);

//$result21 = $interviewTable->getAllInterviews();
//$result22 = $interviewTable->addInterview(6, 'title7', '', '',true);
//$result23 = $interviewTable->getInterviewsByIdAuthor('3');
//$result24 = $interviewTable->getInterviewsByAmount(1,3);

//$result31 = $questionTable->getAllQuestions();
//$result32 = $questionTable->addQuestion(3,4,5);
//$result33 = $questionTable->getQuestionsForSetIdInterview(5);

//$result41 = $answerResultTable->saveAnswerResult(10, 33, 1);
//$result42 = $answerResultTable->getAllResult();
//$result43 = $answerResultTable->getResultByIdUser('777');
//$result44 = $answerResultTable->getResultByIdInterview('666');

//$result51 = $answerToQuestionTable->saveAnswerToQuestion('1', '3', 'my_content');
//$result52 = $answerToQuestionTable->getAllAnswer();
//$result53 = $answerToQuestionTable->getResultByIdQuestion('2');
//$result54 = $answerToQuestionTable->getAnswerByUserId('2');
//$result55 = $answerToQuestionTable->getAnswerByInterviewId('33');

//$result61 = $answerOptionTable->saveOptionAnswer('3', '79');
//$result62 = $answerOptionTable->getAllAnswer();
//$result63 = $answerOptionTable->getAnswerByIdAnswer('3');

//$result71 = $connectionInterviewWithQuestion->addRow(5,7);
//$result72 = $connectionInterviewWithQuestion->getAllRows();
//$result73 = $connectionInterviewWithQuestion->getIdQuestionForIdInterview(5);

//var_dump($result24);

//Fill the tables with demo data, uncomment the lines and execute ONE time
//Table INTERVIEW
//$fill = $interviewTable->addInterview(1, 'Contest Participant Form', '', '',true);
//$fill = $interviewTable->addInterview(1, 'Security Testing in Programming', '', '',true);
//$fill = $interviewTable->addInterview(1, 'Internship Candidate Resume', '', '',true);
//$fill = $interviewTable->addInterview(1, 'Household appliance order form in Kaliningrad', '', '',true);
//$fill = $interviewTable->addInterview(1, 'What do you know about the fight against viruses?', '', '',true);
//$fill = $interviewTable->addInterview(1, 'Advanced English proficiency test', '', '',true);
//$fill = $interviewTable->addInterview(2, 'Contest Participant Form', '', '',true);
//$fill = $interviewTable->addInterview(2, 'Security Testing in Programming', '', '',true);
//$fill = $interviewTable->addInterview(2, 'Basic English proficiency test', '', '',true);
//$fill = $interviewTable->addInterview(3, 'Contest Participant Form', '', '',true);
//$fill = $interviewTable->addInterview(3, 'Security Testing in Programming', '', '',true);
//$fill = $interviewTable->addInterview(3, 'Internship Candidate Resume', '', '',true);
//$fill = $interviewTable->addInterview(3, 'Survey from AnketkaRu site', '', '',true);
?>


<!--
Get array with all forms
-->
<script>
	//alert("Checking the script");
	//console.log('Checking the script');

	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadAllInterview', {
		mode: 'class'
	}).then(function (response) {
		console.log(response);
	});
</script>

<!--
Get array with interviews by amount
if you need 11-15 interview,
need params:
quantity = '5',
firstPosition = '11'
-->
<script>
	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewByAmount', {
		mode: 'class',
		data: {
			quantity: '3',
			firstPosition: '5'
		}
	}).then(function (response) {
		console.log(response);
	});
</script>


<div class="myforms-wrapper" id="savmaxru-forms-myforms-wrapper">
	<div class="myforms-gallery" id="savmaxru-forms-myforms-gallery">

	</div>
</div>

<script type="text/javascript">

	//let myForms = new Savmaxru.MyForms(document.getElementById('savmaxru-forms-myforms-gallery'));
//let comp = new Savmaxru.GUIcomponents();



	//let dropdownlist = new Savmaxru.GUIComponents();
	let IDManager = new Savmaxru.IDManager('myforms');


	let dropdownlist = Savmaxru.GUIComponents.attachComponent('DropDownList');
	dropdownlist.build(
		{
			'description':'Test',
			'options': ['Russia', 'USA'],
			'comment': 'comment',
			'required': true,
		}
	);

	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist.getHTMLObject());

	let dropdownlist1 = Savmaxru.GUIComponents.attachComponent('DropDownList');
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist1.getHTMLObject());

	let dropdownlist2 = Savmaxru.GUIComponents.attachComponent('CheckboxList');
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist2.getHTMLObject());

	dropdownlist2.build(
		{
			'description':'Test',
			'options': ['Russia', 'USA'],
			'comment': 'comment',
			'required': true,
			'IDManager': IDManager,
		}
	);

</script>


