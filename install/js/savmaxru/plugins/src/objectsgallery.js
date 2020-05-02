import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

export class ObjectsGallery extends Savmaxru.ObjectGUI
{
	constructor(config = {
		"galleryClassCSS": "standard-gallery",

	})
	{
		super();
		this.setRootNode(
			Tag.render`${this.addNode(config["galleryClassCSS"])}`
		);
		//this.includeInNode("gallery",Tag.render`<div></div>`);
		//let obj = new ObjectsGallery();
	}
	push()
	{

	}

	loadGroupObject()
	{
		BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewByAmount', {
			mode: 'class',
			data: {
				quantity: '3',
				firstPosition: '5'
			}
		}).then(function (response) {
			console.log(response);
		});
	}
}