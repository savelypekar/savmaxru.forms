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

<div class="myforms-wrapper" id="savmaxru-myforms-wrapper">
	<div class="savmaxru-forms-gallery" id="savmaxru-forms-gallery">

	</div>
</div>

<script type="text/javascript">

	let templates =
		{
			'formElementForList':'' +
			'<div class="savmaxru-form-element-for-list">' +
				'<div class="savmaxru-forms-h5">' +
					'#NAME_FORM#' +
				'</div>' +
				'<div class="savmaxru-forms-h4">' +
					'#DATE_OF_CREATON#' +
				'</div>' +
			'</div>',
		};



	//ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById('savmaxru-myforms-wrapper') });

	//ObjectGUI.addContent(templates['formElementForList'],{});

	let gallery = new Savmaxru.Forms.GUI.Plugins.GalleryOfObjects({
		templateElement: templates['formElementForList'],
		wrapperID: "savmaxru-forms-gallery", });


</script>


