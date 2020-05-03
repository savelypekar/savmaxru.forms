import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

export class ObjectsGallery extends Savmaxru.ObjectGUI
{
	objects=[];

	constructor(config = {
		"galleryClassCSS": "standard-gallery",
		"objectClassCSS" : "standard-object",
		"objectsFactory": undefined,
	})
	{
		super();
		this.setRootNode(
			Tag.render`${this.addNode(config["galleryClassCSS"])}`
		);
		this.objectsFactory = config["objectsFactory"];
	}

	getResult()
	{
		let resultGallery=[];
		let objects = this.objects;
		for(let i=0; i<objects.length; i++)
		{
			let object = objects[i];
			let objectResult = object.getResult();
			if(objectResult !== false)
			{
				resultGallery.push(objectResult);
			}
		}
		return resultGallery;
	}

	getChanges()
	{

	}

	createFactoryObject(name)
	{	let object = this.objectsFactory.attach(name);
		this.push(object);
		return object;
	}

	push(object)
	{	this.objects.push(object);
		this.getRootNode().append(object.getHTMLObject());
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