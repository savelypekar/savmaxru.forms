<?php
\Bitrix\Main\UI\Extension::load('savmaxru.lib.idmanager');

\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.objectgui');
?>
<?= $arResult['MODE']?>
<?
$optionTable = new \Savmaxru\Forms\Model\OptionTable();
$interviewTable = new \Savmaxru\Forms\Model\InterviewTable();
$questionTable = new \Savmaxru\Forms\Model\QuestionTable();
$answerResultTable = new \Savmaxru\Forms\Model\AnswerResultTable();
$answerToQuestionTable = new \Savmaxru\Forms\Model\AnswerToQuestionTable();
$answerOptionTable = new \Savmaxru\Forms\Model\AnswerOptionTable();
$connectionInterviewWithQuestion = new \Savmaxru\Forms\Model\ConnectionInterviewWithQuestionTable();

//$result1 = $optionTable->getAllOptions();
//$result2 = $optionTable->getOptionsForQuestion(1);
//$result3 = $optionTable->addOption(3, 345, 5);

//$result4 = $interviewTable->getAllInterviews();
//$result5 = $interviewTable->addInterview(6, 'title7', 12345326, '',1);
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

//var_dump($result17);
?>
\Bitrix\Main\UI\Extension::load('savmaxru.forms.gui.plugins.galleryofobjects');
?>

<template id="tmpl">
	<div class="message">Привет, Мир!</div>
</template>

<div class="myforms-wrapper" id="savmaxru-myforms-wrapper">

</div>

<script type="text/javascript">

	//let Idmanager = new Savmaxru.IDManager();
	//alert(Idmanager.getNextHighestId());
	//alert(Idmanager.getNextHighestId());

	//let IDManager = new Savmaxru.Forms.GUI.Plugins.GalleryOfObjects(new Savmaxru.IDManager('savmaxru-myforms'));

	//let id= new Savmaxru.IDManager({namespaceForID: 'savmaxru-myforms'});
		//new Savmaxru.IDManager('savmaxru-myforms')

	//alert(id.getNextHighestId());
//
	//IDManager: new Savmaxru.IDManager({namespaceForID: 'savmaxru-myforms'}
	let ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({ parentID:'savmaxru-myforms-wrapper' });
	//ObjectGUI.remove();

	//ObjectGui.renderHTML('savmaxru-myforms-wrapper','<div class="test">nnn</div>')
	//alert(3);

	//alert(Savmaxru.IDManager.getNextHighestId('ss'));
	//alert(Savmaxru.IDManager.getNextHighestId('ss'));
	//let example = new Savmaxru.Forms.GUI.Components.Dropdownlist();
	//{
	//		templateID: "tmpl",
	//		parentID: "savmaxru-forms-main-container"
	//	}
//alert(1);
</script>

dd