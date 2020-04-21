<?php
\Bitrix\Main\UI\Extension::load('savmaxru.lib.idmanager');

\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.objectgui');
\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.plugins.galleryofobjects');
?>
<?=$arResult['MODE']?>
<?
$optionTable = new \Savmaxru\Forms\Model\OptionTable();
$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();
$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();


//alert(this.createContentByTemplate('<div class="#CLASS_NAME#">#CONTENT#</div>',{'#CLASS_NAME#':'тест','#CONTENT#':'обзор'}));

//$result1 = $optionTable->getAllOptions();
//$result2 = $optionTable->getOptionsForQuestion(1);
//$result3 = $optionTable->addOption(3, 345, 5);

//$result4 = $interviewTable->getAllInterviews();
//$result5 = $interviewTable->addInterview(6, 'title7', '', '',true);
//$result6 = $questionTable->getAllQuestions();
//$result7 = $questionTable->addQuestion(3,4,5);
//$result8 = $questionTable->getQuestionsForSetIdInterview(5);

//$result9 = $answerResultTable->saveAnswerResult(10, 33, 1);
//$result10 = $answerResultTable->getAllResult();
//$result11 = $answerResultTable->getResultByIdUser('777');
//$result12 = $answerResultTable->getResultByIdInterview('666');

//$result13 = $answerToQuestionTable->saveAnswerToQuestion('1', '3', 'my_content');
//$result14 = $answerToQuestionTable->getAllAnswer();
//$result15 = $answerToQuestionTable->getResultByIdQuestion('2');
//$result16 = $answerToQuestionTable->getAnswerByUserId('2');
//$result17 = $answerToQuestionTable->getAnswerByInterviewId('33');

//$result18 = $answerOptionTable->saveOptionAnswer('3', '79');
//$result19 = $answerOptionTable->getAllAnswer();
//$result20 = $answerOptionTable->getAnswerByIdAnswer('3');

//$result21 = $connectionInterviewWithQuestion->addRow(5,7);
//$result22 = $connectionInterviewWithQuestion->getAllRows();
//$result23 = $connectionInterviewWithQuestion->getIdQuestionForIdInterview(5);

//var_dump($result4);

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
\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.plugins.galleryofobjects');
?>

<!--
Getting mass with all forms
-->
<script>
	//alert("Checking the script");
	//console.log('Checking the script');

	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadAllInterview', {
		mode: 'class'
		//data: {
		//	param1: 'asd'
		//}
	}).then(function (response) {
		console.log(response);
	});
</script>

<!--
Getting mass with all forms
-->
<script>
	BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewByParams', {
		mode: 'class'
		//data: {
		//	param1: 'asd'
		//}
	}).then(function (response) {
		console.log(response);
	});
</script>





