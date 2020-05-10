import {Type} from 'main.core';
import {ModalWindow} from 'savmaxru.modalwindow';
import {Tag} from 'main.core';
import './css/style.css'
import {TypeButton} from "./typebutton";
import {ComponentsGallery} from "savmaxru.componentsgallery";
import {IDManager} from 'savmaxru.idmanager';

export class ComponentEditor
{
	IDManager = new IDManager('editor');

	types = [
		"DropDownList","CheckboxList","RadiobuttonList", "Heading" , "SingleLineTextBox", "MultiLineTextBox",
	];

	constructor(parent)
	{
		this.parent = parent;
	}

	setGallery(objectsGallery)
	{
		this.objectsGallery = objectsGallery;
	}

	openWindow()
	{
		this.window = new Savmaxru.ModalWindow();
		this.parent.append(this.window.getHTMLObject());
	}

	create()
	{
		this.openWindow();
		let selectingAComponent = Tag.render`<div class="components-selection"></div>`;

		for(let i=0; i<this.types.length; i++)
		{
			let button = new TypeButton(this.types[i],this);
			selectingAComponent.append(button.getHTMLObject());
		}
		this.window.setContent(selectingAComponent);
		this.selectingAComponentMenu = selectingAComponent;
	}


	runEditor(component)
	{
		this.openWindow();
		let componentStructure = component.getStructure()

		let configDescription = {
			"galleryClassCSS": "editor-description-gallery",
		};
		let description = new ComponentsGallery(configDescription);
		this.window.setContent(description.getHTMLObject());

		let configOption = {
			"galleryClassCSS": "editor-option-gallery",
		};
		let options = new ComponentsGallery(configOption);
		this.window.setContent(options.getHTMLObject());

		let configOtherSettings = {
			"galleryClassCSS": "editor-other-settings-gallery",
		};
		let otherSettings = new ComponentsGallery(configOtherSettings);
		this.window.setContent(otherSettings.getHTMLObject());

		let type = componentStructure["type"];

		if(type === "Heading")
		{
			description.addObjectsGroup({
				questions: [{
					type: "Heading",
					options: [
						{
							value: BX.message("QUESTION_EDITING_TITLE"),
						}
					]
				},{
					ID: "headingText",
					description:BX.message("HEADING_TEXT"),
					type: "SingleLineTextBox",
				},],
			},);
		}
		else
		{
			description.addObjectsGroup({
				questions: [{
					type: "Heading",
					options: [
						{
							value: BX.message("HEADER_EDITING_TITLE"),
						}
					]
				},{
					ID: "questionText",
					description:BX.message("QUESTION_TEXT"),
					type: "MultiLineTextBox",
				},{
					ID: "hintToTheQuestion",
					description:BX.message("HINT_TO_THE_QUESTION"),
					type: "MultiLineTextBox",
				},],
			},);
		}

		otherSettings.addObjectsGroup({
			questions: [{
				ID: "notAcceptUnanswered",
				type: "CheckboxList",
				'IDManager': this.IDManager,
				options: [
					{
						value:BX.message("NOT_ACCEPT_UNANSWERED"),
					},
				],

			},],
		},);

		let saveButton = otherSettings.createFactoryObject("Button");
		saveButton.build(
			{
				'ID': 2226,
				'index': 6,
				'options': [
					{
						index: 0,
						ID: 121212,
						value:BX.message("SAVE_FORM"),
					},
				],
			});

		//otherSettings.addObjectsGroup();

		/*let configGallery = {
			"galleryClassCSS": "editor-gallery",
		};
		let gallery = new ComponentsGallery(configGallery);
		gallery.addObjectsGroup({
			ID: 6829,
			questions: [
			{
					ID: 121212,
					index: 2,
					type: "Heading",
					options: [
						{
							index: 1,
							value: 'Редактирование поля',
							ID: 121212,
						}
					]
				},
				{
					ID: 121212,
					description:'Текст вопроса:',
					index: 4,
					type: "MultiLineTextBox",
					options: [],
				},{
					ID: 121212,
					description:'Подсказка к вопросу',
					index: 4,
					type: "MultiLineTextBox",
					options: [],
				},
				{
					ID: 121212,
					index: 1,
					type: "CheckboxList",
					required: true,
					'IDManager': this.IDManager,
					options: [
						{
							index: 1,
							ID: 121212,
							value: "НЕ принимать без ответа",
						},
					],

				},
			]
		});

		let gallery2 = new ComponentsGallery(configGallery);
		gallery2.addObjectsGroup({
			ID: 6829,
			questions: [
				{
					ID: 121212,
					index: 2,
					type: "Heading",
					options: [
						{
							index: 1,
							value: 'Редактирование поля',
							ID: 121212,
						}
					]
				},
				{
					ID: 121212,
					description:'Текст вопроса:',
					index: 4,
					type: "MultiLineTextBox",
					options: [],
				},{
					ID: 121212,
					description:'Подсказка к вопросу',
					index: 4,
					type: "MultiLineTextBox",
					options: [],
				},
				{
					ID: 121212,
					index: 1,
					type: "CheckboxList",
					required: true,
					'IDManager': this.IDManager,
					options: [
						{
							index: 1,
							ID: 121212,
							value: "НЕ принимать без ответа",
						},
					],

				},
			]
		});


	*/
	}


	addComponent(name)
	{
		this.objectsGallery.createFactoryObject(name);
		this.selectingAComponentMenu.remove();
	}
}