import './css/style.css'

import {Type} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import {GUIComponents} from 'savmaxru.guicomponents';
import {IDManager} from 'savmaxru.idmanager';
import {ModalWindow} from "savmaxru.modalwindow";
import {ComponentEditor} from "savmaxru.componenteditor";
import {ComponentsGallery} from "savmaxru.componentsgallery";

export class ViewForm extends ObjectGUI
{
	IDManager = new IDManager('myforms');

	constructor()
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("viewform-wrapper")}`
		);
w

		let configGallery = {
			"galleryClassCSS": "viewform-gallery",
			"objectsFactory": GUIComponents,
			"argumentsForResult": {
				'ID': 232323
			},
		};

		let gallery = new ComponentsGallery(configGallery);
		this.gallery = gallery;
		this.includeInNode("viewform-wrapper", this.gallery.getHTMLObject());

		/*let obj0 = gallery.createFactoryObject("Heading");
		obj0.build(
			{
				'ID': 2220,
				'index': 0,
				'options': [
					{
						index: 1,
						ID: 121212,
						value: "Такой вот опрос",
					}
				],
			});

		let obj1 = gallery.createFactoryObject("DropDownList");
		obj1.build(
			{
				'ID': 2221,
				'index': 1,
				'description':'Выбери город',
				'options': [
					{
						index: 0,
						ID: 121212,
						value: "Вологда",
					},
					{
						index: 1,
						ID: 121212,
						value: "Череповец",
					},
					{
						index: 2,
						ID: 121212,
						value: "Калининград",
					}
				],
				'comment': 'вам доставят посылку точно по адресу',
				'required': true,
			});

		let obj6 = gallery.createFactoryObject("Button");
		obj6.build(
			{
				'ID': 2226,
				'index': 6,
				'options': [
					{
						index: 0,
						ID: 121212,
						value: "Send Form",
					},
				],
			});
		obj6.onDown(function(){
			console.log(gallery.getResult());
		});

		let obj8 = gallery.createFactoryObject("Button");
		obj8.build(
			{
				'ID': 2226,
				'index': 6,
				'options': [
					{
						index: 0,
						ID: 121212,
						value: "Add component",
					},
				],
			});

		let ComponentEditor = new Savmaxru.ComponentEditor(this.getNode("viewform-wrapper"),gallery);

		obj8.onDown(function(){
			ComponentEditor.create();
		});

		let obj2 = gallery.createFactoryObject("CheckboxList");
		obj2.build(
			{
				'ID': 2222,
				'index': 2,
				'description':'Test',
				'options': [
					{
						index: 0,
						ID: 121212,
						value: "Вологда",
					},
					{
						index: 1,
						ID: 121212,
						value: "Череповец",
					},
					{
						index: 2,
						ID: 121212,
						value: "Калининград",
					}
				],
				'comment': 'comment',
				'required': true,
				'IDManager': this.IDManager,
			});

		let obj3 = gallery.createFactoryObject("RadiobuttonList");
		obj3.build(
			{
				'ID': 2223,
				'index': 3,
				'description':'Test',
				'options': [
					{
						index: 0,
						ID: 121212,
						value: "Вологда",
					},
					{
						index: 1,
						ID: 121212,
						value: "Череповец",
					},
					{
						index: 2,
						ID: 121212,
						value: "Калининград",
					}
				],
				'comment': 'comment',
				'required': true,
				'IDManager': this.IDManager,
			});

		let obj4 = gallery.createFactoryObject("SingleLineTextBox");
		obj4.build(
			{
				'ID': 2224,
				'index': 4,
				'description':'Test',
				'comment': 'comment',
				'options':{},
			});

		let obj5 = gallery.createFactoryObject("MultiLineTextBox");
		obj5.build(
			{
				'ID': 2225,
				'index': 5,
				'description':'Test',
				'comment': 'comment',
				'options':{},
			});

		obj6.onDown(function(){
			console.log(gallery.getResult());
		});
*/
		//gallery.getResult();
		//this.gallery.loadGroupObject();*/

		gallery.addObjectsGroup({
			ID: 6829,
			questions: [
				{
					ID: 121212,
					index: 1,
					type: "DropDownList",
					description: "Текст вопроса",
					comment: "Пояснительный комметарий",
					required: true,

					options: [
						{
							index: 1,
							ID: 121212,
							value: "Russia",
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
					options: [],
				}
			]
		});

		let obj2 = gallery.createFactoryObject("CheckboxList");
		obj2.build(
			{
				'ID': 2222,
				'index': 2,
				'description':'Test',
				'options': [
					{
						index: 0,
						ID: 121212,
						value: "Вологда",
					},
					{
						index: 1,
						ID: 121212,
						value: "Череповец",
					},
					{
						index: 2,
						ID: 121212,
						value: "Калининград",
					}
				],
				'comment': 'comment',
				'required': true,
				'IDManager': this.IDManager,
			});
			//obj2.rewriteProperty("f",2);
			obj2.enableEditMode();
			console.log(obj2.getChanges());
			console.log("уу");
			console.log(obj2.getStructure());

	}


}