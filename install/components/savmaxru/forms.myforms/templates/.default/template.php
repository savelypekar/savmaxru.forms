<?php

\Bitrix\Main\UI\Extension::load('savmaxru.objectgui');
\Bitrix\Main\UI\Extension::load('savmaxru.myforms');
\Bitrix\Main\UI\Extension::load('savmaxru.idmanager');
\Bitrix\Main\UI\Extension::load('savmaxru.guicomponents');
\Bitrix\Main\UI\Extension::load('savmaxru.plugins');
?>


<?= 'Страница '.$arResult['MODE']?>


<?
//id user
//global $USER;
//echo $USER->GetID();

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
//$result14 = $optionTable->deleteRow(5);
//$result15 = $optionTable->updateRow(7, 3, 345, 5);

//$result21 = $interviewTable->getAllInterviews();
//$result22 = $interviewTable->addInterview(6, 'title7', '', '',true);
//$result23 = $interviewTable->getInterviewsByIdAuthor('3');
//$result24 = $interviewTable->getInterviewsByAmount(1,3);
//$result25 = $interviewTable->deleteRow(5);
//$result26 = $interviewTable->updateRow(7, 6, 'title7', '', '',true);
//$result27 = $interviewTable->getMaxIDKey();

//$result31 = $questionTable->getAllQuestions();
//$result32 = $questionTable->addQuestion(3,4,5);
//$result33 = $questionTable->getQuestionsForSetIdInterview(1);
//$result34 = $questionTable->deleteRow(5);
//$result35 = $questionTable->updateRow(7, 3,4,5);
//$result36 = $questionTable->getMaxIDKey();
//$result37 = $questionTable->getTypeByIdQuestion(25);

//$result41 = $answerResultTable->saveAnswerResult(10, 33, 1);
//$result42 = $answerResultTable->getAllResult();
//$result43 = $answerResultTable->getResultByIdUser('777');
//$result44 = $answerResultTable->getResultByIdInterview('666');

//$result51 = $answerToQuestionTable->saveAnswerToQuestion('1', '3', 'my_content');
//$result52 = $answerToQuestionTable->getAllAnswer();
//$result53 = $answerToQuestionTable->getResultByIdQuestion('1');
//$result54 = $answerToQuestionTable->getAnswerByUserId('1');
//$result55 = $answerToQuestionTable->getAnswerByInterviewId('4');

//$result61 = $answerOptionTable->saveOptionAnswer('3', '79');
//$result62 = $answerOptionTable->getAllAnswer();
//$result63 = $answerOptionTable->getAnswerByIdAnswer('3');

//$result71 = $connectionInterviewWithQuestion->addRow(5,7);
//$result72 = $connectionInterviewWithQuestion->getAllRows();
//$result73 = $connectionInterviewWithQuestion->getIdQuestionForIdInterview(2);
//$result74 = $connectionInterviewWithQuestion->getIdQuestionForIdInterviewAndIdQuestion(126, 966);

//echo $result37;
//var_dump($result37);

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

//BETA INTERVIEW
/*
$fill = $interviewTable->addInterview(1, 'Security Testing', '30.04..2020', '',true);

$fill = $questionTable->addQuestion('checkbox','Do you agree to receive notifications?',1);
$fill = $questionTable->addQuestion('radiobtn','Enter your gender',2);
$fill = $questionTable->addQuestion('list','Level of your education?',3);
$fill = $questionTable->addQuestion('input','Enter your name',4);
$fill = $questionTable->addQuestion('textarea','Leave your wishes here',5);

$fill = $optionTable->addOption(1, 'Yes', 1);
$fill = $optionTable->addOption(1, 'No', 2);
$fill = $optionTable->addOption(2, 'Male', 1);
$fill = $optionTable->addOption(2, 'Female', 2);
$fill = $optionTable->addOption(3, 'Associate Level ', 1);
$fill = $optionTable->addOption(3, 'Bachelor', 2);
$fill = $optionTable->addOption(3, 'Master of Arts', 3);
$fill = $optionTable->addOption(3, 'Doctorate', 4);

$fill = $connectionInterviewWithQuestion->addRow(1,1);
$fill = $connectionInterviewWithQuestion->addRow(1,2);
$fill = $connectionInterviewWithQuestion->addRow(1,3);
$fill = $connectionInterviewWithQuestion->addRow(1,4);
$fill = $connectionInterviewWithQuestion->addRow(1,5);
*/
//END BETA INTERVIEW
?>

<!--
Get array with all forms

<script>
	//alert("Checking the script");
	//console.log('Checking the script');

	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadAllInterview', {
		mode: 'class'
	}).then(function (response) {
		console.log(response);
	});
</script>
-->

<!--
Get array with interviews by amount
if you need 11-15 interview,
need params:
quantity = '5',
firstPosition = '10' (11-1=10)

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
-->


<!--
Get array with interviews by current user
by userId
<script>
	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewCurrentUser', {
		mode: 'class',
		data: {
			quantity: '10',
			firstPosition: '0'
		}
	}).then(function (response) {
		console.log(response);
	});
</script>
-->

<!--
Save interview and questions

<script>
	let arQuestions = [['1555', '', ''],['1666', '', '']];
	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'saveInterviewAndQuestion', {
		mode: 'class',
		data: {
			interview: ['1567', 'text1567', '', '', '1'],
			questions: arQuestions,
		}
	});
</script>
-->

<!--
Save all data
<script>
	let arInterviews = [['12345', 'title1', '1', '1date', '1'],['23', '2', '', '', '1']];
	let arQuestions = [['1555', 'content1', ''],['type2', 'content2', '']];
	let arOptions = [['1', 'option1', ''],['2', 'option2', '']];
	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'saveAllData', {
		mode: 'class',
		data: {
			interviews: arInterviews,
			questions: arQuestions,
			options: arOptions,
		}
	});
</script>
-->


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

	let dropdownlist3 = Savmaxru.GUIComponents.attachComponent('Button');
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist3.getHTMLObject());

	dropdownlist3.build(
		{
			'description':'',
			'options': ['Send form'],
			'comment': '',
			'required': '',
		}
	);


	let dropdownlist4 = Savmaxru.GUIComponents.attachComponent('RadiobuttonList');
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist4.getHTMLObject());
	dropdownlist4.build(
		{
			'description':'Test',
			'options': ['Russia', 'USA'],
			'comment': 'comment',
			'required': true,
			'IDManager': IDManager,
		}
	);


	let dropdownlist5 = Savmaxru.GUIComponents.attachComponent('Heading');
	dropdownlist5.build(
		{
			'options': ['Заголовок'],
		}
	);
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist5.getHTMLObject());

	let dropdownlist6 = Savmaxru.GUIComponents.attachComponent('SingleLineTextBox');
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist6.getHTMLObject());

	dropdownlist6.build(
		{
			'description':'wwTest',
			'comment': 'comment',
		}
	);


	let dropdownlist7 = Savmaxru.GUIComponents.attachComponent('MultiLineTextBox');
	document.getElementById('savmaxru-forms-myforms-gallery').append(dropdownlist7.getHTMLObject());

	dropdownlist3.onDown(function(){
		console.log(dropdownlist7.getResult());
	});



	//dropdownlist2.getAllElementsOfTheNode('checkboxes');
</script>