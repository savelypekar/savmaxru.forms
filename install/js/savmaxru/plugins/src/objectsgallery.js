import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

export class ObjectsGallery extends Savmaxru.ObjectGUI
{
	objects=[];

	constructor(config = {
		"galleryClassCSS": "standard-gallery",
		"objectClassCSS" : "standard-object",
		"objectsFactory": undefined,
		"argumentsForResult": {
			'ID': 232323
		},
	})
	{
		super();
		this.setRootNode(
			Tag.render`${this.addNode(config["galleryClassCSS"])}`
		);
		this.objectsFactory = config["objectsFactory"];
		this.argumentsForResult = config["argumentsForResult"];
	}

	getResult()
	{
		let resultGallery=[];

		let argumentsForResult = this.argumentsForResult;
		for (let key in argumentsForResult)
		{
			resultGallery[key]= argumentsForResult[key];
		}

		let questions=[];
		let objects = this.objects;
		for(let i=0; i<objects.length; i++)
		{
			let object = objects[i];
			let objectResult = object.getResult();
			if(objectResult !== false)
			{
				questions.push(objectResult);
			}
		}

		resultGallery["questions"] = questions;
		
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