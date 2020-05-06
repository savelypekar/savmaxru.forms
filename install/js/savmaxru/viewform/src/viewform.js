import './css/style.css'

import {Type} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import {Plugins} from 'savmaxru.plugins';
import {GUIComponents} from 'savmaxru.guicomponents';
import {IDManager} from 'savmaxru.idmanager';
import {ModalWindow} from "savmaxru.modalwindow";


export class ViewForm extends Savmaxru.ObjectGUI
{
	IDManager = new Savmaxru.IDManager('myforms');

	constructor()
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("viewform-wrapper")}`
		);

		let configGallery = {
			"galleryClassCSS": "viewform-gallery",
			"objectsFactory": Savmaxru.GUIComponents,
			"argumentsForResult": {
				'ID': 232323
			},
		};

		let gallery = Savmaxru.Plugins.attachPlugin("ObjectsGallery",configGallery);
		this.gallery = gallery;
		this.includeInNode("viewform-wrapper", this.gallery.getHTMLObject());

		let obj0 = gallery.createFactoryObject("Heading");
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
		//gallery.getResult();
		//this.gallery.loadGroupObject();*/

		let window = new Savmaxru.ModalWindow();
		this.includeInNode("viewform-wrapper", window.getHTMLObject());
	}


}