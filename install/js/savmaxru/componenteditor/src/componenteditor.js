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

	closeWindow()
	{
		this.window.close();
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

	applyChanges(component,description,optionsGallery,otherSettings)
	{
		let objects = optionsGallery.getObjects();
		for(let i=0; i<objects.length; i++)
		{
			let object = objects[i];

			let newValue = object.getValue();
			let modifiableOption = object.getProperty('modifiableOption');

			if(modifiableOption !== undefined)
			{
				let savedValue = modifiableOption.getProperty('value');
				if(object.getProperty('change') === 'removed')
				{
					modifiableOption.remove();
				}
				else if(newValue !== savedValue)
				{
					modifiableOption.rewriteProperty('value', newValue);
					modifiableOption.refreshHTML();
				}
			}
			else if(object.getProperty('change') !== 'removed')
			{
				//если был создана новая опция и не была удалена при том
				component.addOptions([{
					value: newValue,
				}],'create');
			}

		}

		//options.getValue();
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
		let description = new ComponentsGallery(configDescription,this,this.IDManager);
		this.window.setContent(description.getHTMLObject());

		let configOption = {
			"galleryClassCSS": "editor-options-gallery",
		};
		let options = new ComponentsGallery(configOption,this,this.IDManager);
		this.window.setContent(options.getHTMLObject());

		let configOtherSettings = {
			"galleryClassCSS": "editor-other-settings-gallery",
		};
		let otherSettings = new ComponentsGallery(configOtherSettings,this,this.IDManager);
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

		/*let questions = [];
		for(let i=0; i<componentStructure['options'].length; i++)
		{
			questions.push(this.buildFieldStructureForEditingOption(componentStructure['options'][i]));
		}

		options.addObjectsGroup({
			questions,
		},);*/

		if(type === "DropDownList" || type === "CheckboxList" || type === "RadiobuttonList")
		{
			options.enableEditMode({
				"remove":true
			});

		}

		let optionsStructure = component.getOptions();

		for(let i=0; i<optionsStructure.length; i++)
		{
			if(optionsStructure[i].getProperty('change') !== 'removed')
			{
				let option = options.createComponent("SingleLineTextBox");
				option.addProperty('modifiableOption',optionsStructure[i]);
				option.build(
				{
					'options': [
						{
							value: optionsStructure[i].getProperty('value'),
						},
					],
				});
			}
		}

		if(type !== "Button" && type !== "Heading")
		{
			if(type !== "SingleLineTextBox" && type !== "MultiLineTextBox")
			{
				let add = otherSettings.createComponent("Button");
				add.setStyle("plus-button");
				add.onDown(function(){
					let object = options.createComponentWithOption("SingleLineTextBox");
				});
			}
			otherSettings.addObjectsGroup({
				questions: [{
					ID: "notAcceptUnanswered",
					type: "CheckboxList",
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
				'options': [
					{
						value:BX.message("SAVE_FORM"),
					},
				],
			});
		let editor = this;
		saveButton.onDown(function(){
			//options.getHTMLObject().blur();
			editor.applyChanges(component,undefined,options);
			editor.closeWindow()
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
		this.selectingAComponentMenu.remove();
		let newComponent = this.objectsGallery.createComponent(type);
		newComponent.build({
			options: [
				{
					value: '',
				},
			],
		})
		this.runEditor(newComponent,false);
	}
}