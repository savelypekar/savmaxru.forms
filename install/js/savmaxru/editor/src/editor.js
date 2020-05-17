import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import './css/style.css'
import {ComponentEditor} from "savmaxru.componenteditor";
import {ComponentsGallery} from "savmaxru.componentsgallery";
import {GUIComponents} from "savmaxru.guicomponents";
import {IDManager} from 'savmaxru.idmanager';

export class Editor extends ObjectGUI
{
	IDManager = new IDManager("editform");

	constructor(ID)
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("editor-wrapper")}`
		);

		this.includeInNode("editor-wrapper", Tag.render`
		<div class="navigation-bar">
			<div class="a-wrapper">
				<a class= 'nav-hide${ID}' href="/forms/results/${ID}" target="_blank">${BX.message("RESULTS")}</a>
				<a class= 'nav-hide${ID}' href="/forms/view/${ID}" target="_blank">${BX.message("FORM_PAGE")}</a>
			</div><br>
		</div>
		`);

		let componentEditor = new ComponentEditor(this.getNode("editor-wrapper"));

		let argumentID = ID;
		if(argumentID === '0')
		{
			argumentID = "NEW_FORM";
		}

		let configGallery = {
			"galleryClassCSS": "editor-gallery",
			"componentEditor": componentEditor,
			"argumentsForResult": {
				'ID': argumentID,
				change: 'changed',
			},
		};

		let titleForm = GUIComponents.attach("SingleLineTextBox");

		this.includeInNode("editor-wrapper", titleForm.getHTMLObject());
		let gallery = new ComponentsGallery(configGallery, this, this.IDManager);
		componentEditor.setGallery(gallery);
		gallery.enableEditMode();
		this.includeInNode("editor-wrapper", gallery.getHTMLObject());
		let title;
		if(ID === '0')
		{
			//заготовка для создания новой формы
			let button = gallery.createComponentWithOption("Button",'Send form');
			title = gallery.createComponentWithOption("Heading",'New form');
			this.includeInNode("editor-wrapper", button.getHTMLObject());
			//сюда
		}
		else
		{
			BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
				mode: 'class',
				data: {
					idInterview: ID,
				}
			}).then(function (response) {
				let formStructure = response['data']['result'];
				titleForm.setValue(formStructure['title']);
				gallery.addObjectsGroup(formStructure,"edit");
			});
		}
		this.includeInNode("editor-wrapper", gallery.getSaveButton());

		let addComponentButton = GUIComponents.attach("Button");
		addComponentButton.setStyle('plus-button');
		this.includeInNode("editor-wrapper", addComponentButton.getHTMLObject());

		let saveButton = GUIComponents.attach("Button");
		saveButton.build(
			{
				'options':[
					{
						value: BX.message("SAVE_FORM"),
					},
				],
			});
		this.includeInNode("editor-wrapper", saveButton.getHTMLObject());

		saveButton.onDown(function(){
			this.getHTMLObject().innerHTML = '<div class="saving-button-text">Сохраняем ...</div>';
			let changes = gallery.getChanges();
			changes['title'] = titleForm.getValue();
			BX.ajax.runComponentAction('savmaxru:forms.editor', 'saveInterviewStructure', {
				mode: 'class',
				data: {
					result: changes,
				}
			}).then(function (response) {
				window.location = (""+response['data']['IDInterview']);
			});
			console.log(changes);
		});

		addComponentButton.onDown(function(){
			componentEditor.runCreator();
		});

	}
}