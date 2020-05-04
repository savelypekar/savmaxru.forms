import './css/style.css'

import {Type} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import {Plugins} from 'savmaxru.plugins';
import {GUIComponents} from 'savmaxru.guicomponents';
import {IDManager} from 'savmaxru.idmanager';

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
		};

		let gallery = Savmaxru.Plugins.attachPlugin("ObjectsGallery",configGallery);
		this.gallery = gallery;
		this.includeInNode("viewform-wrapper", this.gallery.getHTMLObject());

		let obj0 = gallery.createFactoryObject("Heading");
		obj0.build(
			{
				'options': ['Такой вот опрос'],
			});

		let obj1 = gallery.createFactoryObject("DropDownList");
		obj1.build(
			{
				'description':'Выбери город',
				'options': ['Калининград', 'Череповец', 'Вологда'],
				'comment': 'вам доставят посылку точно по адресу',
				'required': true,
			});

		let obj2 = gallery.createFactoryObject("CheckboxList");
		obj2.build(
			{
				'description':'Test',
				'options': ['Russia', 'USA'],
				'comment': 'comment',
				'required': true,
				'IDManager': this.IDManager,
			});

		let obj3 = gallery.createFactoryObject("RadiobuttonList");
		obj3.build(
			{
				'description':'Test',
				'options': ['Russia', 'USA'],
				'comment': 'comment',
				'required': true,
				'IDManager': this.IDManager,
			});

		let obj4 = gallery.createFactoryObject("SingleLineTextBox");
		obj4.build(
			{
				'description':'Test',
				'comment': 'comment',
			});

		let obj5 = gallery.createFactoryObject("MultiLineTextBox");
		obj5.build(
			{
				'description':'Test',
				'comment': 'comment',
			});

		let obj6 = gallery.createFactoryObject("Button");
		obj6.build(
			{
				'options': ['Send form'],
			});

		obj6.onDown(function(){
			console.log(gallery.getResult());
		});
		//gallery.getResult();
		//this.gallery.loadGroupObject();
	}


}