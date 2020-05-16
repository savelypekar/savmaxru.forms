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
				<a href="/forms/result/${ID}" target="_blank">${BX.message("RESULT")}</a>
				<a href="/forms/view/${ID}" target="_blank">${BX.message("FORM_PAGE")}</a>
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
				title: 'title new form ',
				change: 'changed',
			},
		};

		let gallery = new ComponentsGallery(configGallery, this, this.IDManager);
		componentEditor.setGallery(gallery);
		gallery.enableEditMode();

		if(ID === '0')
		{
			//заготовка для создания новой формы
			gallery.createComponentWithOption("Button");
		}else
		{
			BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
				mode: 'class',
				data: {
					idInterview: ID,
				}
			}).then(function (response) {
				gallery.addObjectsGroup(response['data']['result'],"view");
			});
		}

		this.includeInNode("editor-wrapper", gallery.getHTMLObject());

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
			let changes = gallery.getChanges();

			let changes2 = {
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
					result: changes,
				}
			});
			console.log(changes);
		});

		addComponentButton.onDown(function(){
			componentEditor.runCreator();
		});

	}
}