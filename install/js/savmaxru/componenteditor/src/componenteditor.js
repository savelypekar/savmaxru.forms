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

	runCreator()
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

	buildFieldStructureForEditingOption(optionStructure)
	{
		let option = {
			index: optionStructure["index"],
			ID: optionStructure["ID"],
			type: "SingleLineTextBox",
			options: [
				{
					value: optionStructure["value"],
				},
			],
		}
		return option;
	}

	runEditor(component,runWindow = true)
	{
		if(runWindow)
		{
			this.openWindow();
		}
		let componentStructure = component.getStructure();

		let configDescription = {
			"galleryClassCSS": "editor-description-gallery",
		};
		let description = new ComponentsGallery(configDescription);
		this.window.setContent(description.getHTMLObject());

		let configOption = {
			"galleryClassCSS": "editor-options-gallery",
		};
		let options = new ComponentsGallery(configOption);
		this.window.setContent(options.getHTMLObject());
		options.enableEditMode({
			"remove":true
		});

		let configOtherSettings = {
			"galleryClassCSS": "editor-other-settings-gallery",
		};
		let otherSettings = new ComponentsGallery(configOtherSettings);
		this.window.setContent(otherSettings.getHTMLObject());

		let type = componentStructure["type"];

		let titles = {
			"Heading" :BX.message("HEADER_EDITING_TITLE"),
			"RadiobuttonList" :BX.message("QUESTION_EDITING_TITLE"),
			"CheckboxList" :BX.message("QUESTION_EDITING_TITLE"),
			"MultiLineTextBox" :BX.message("QUESTION_EDITING_TITLE"),
			"SingleLineTextBox" :BX.message("QUESTION_EDITING_TITLE"),
			"DropDownList" :BX.message("QUESTION_EDITING_TITLE"),
			"Button" : BX.message("BUTTON_EDITING_TITLE"),
		}

		description.addObjectsGroup({

			questions: [
				{
				type: "Heading",
				options: [
					{
						value:titles[type],
					}
				],
				}
			],
		});

		if(type !== "Button" && type !== "Heading")
		{
			description.addObjectsGroup({
				questions: [
				{
					ID: "questionText",
					description:BX.message("QUESTION_TEXT"),
					type: "MultiLineTextBox",
				},{
					ID: "hintToTheQuestion",
					description:BX.message("HINT_TO_THE_QUESTION"),
					type: "MultiLineTextBox",
				},],
			},);

			if(type === "CheckboxList" || type === "RadiobuttonList" || type === "DropDownList")
			{
				description.addObjectsGroup({
					questions: [{
						type: "Heading",
						comment: BX.message("ANSWER_OPTIONS_COMMENT"),
						options: [
							{
								value:BX.message("ANSWER_OPTIONS"),
							}
						],
					}]
				});
			}

		}

		let questions = [];
		for(let i=0; i<componentStructure['options'].length; i++)
		{
			questions.push(this.buildFieldStructureForEditingOption(componentStructure['options'][i]));
		}

		options.addObjectsGroup({
			questions,
		},);

		if(type !== "Button" && type !== "Heading")
		{
			if(type !== "SingleLineTextBox" && type !== "MultiLineTextBox")
			{
				let add = otherSettings.createComponent("Button");
				add.setStyle("plus-button");
				add.onDown(function(){
					options.createComponent("SingleLineTextBox");
				});
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
		}

		let saveButton = otherSettings.createComponent("Button");
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

	addComponent(type)
	{
		this.runEditor(this.objectsGallery.createComponent(type),false);
		this.selectingAComponentMenu.remove();
	}
}