import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

export class ObjectsGallery extends Savmaxru.ObjectGUI
{
	constructor(config = {
		"galleryClassCSS": "standard-gallery",
		"objectClassCSS" : "standard-object",
		"objectsFactory": undefined,
	})
	{
		alert(config);
		super();
		this.setRootNode(
			Tag.render`${this.addNode(config["galleryClassCSS"])}`
		);
		this.objectsFactory = config["objectsFactory"];

	}

	createFactoryObject(name)
	{	let object = this.objectsFactory.attach(name).getHTMLObject();
		this.push(object);
		return object;
	}

	push(object)
	{
		this.getRootNode().append(object);
	}

	createObject()
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