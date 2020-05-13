import {Type} from 'main.core';
import {ObjectsGallery} from "savmaxru.objectsgallery";
import {GUIComponents} from 'savmaxru.guicomponents';
import {IDManager} from 'savmaxru.idmanager';

export class ComponentsGallery extends ObjectsGallery
{
	constructor(argument)
	{
		argument["objectsFactory"] = GUIComponents;
		super(argument);
		this.componentEditor = argument['componentEditor'];
	}

	editComponent(component)
	{
		this.componentEditor.runEditor(component);
	}

	addQuestions(question ={})
	{
		let component = this.createFactoryObject(question['type']);
		component.build(question);
		component.enableEditMode(this.editMode);
	}

	editMode = [];

	enableEditMode(modes= {
		"settings":true,"remove":true
	})
	{
		this.editMode = modes;
	}

	addObjectsGroup(data)
	{
		let questions = data['questions'];

		for(let i=0; i<questions.length; i++)
		{
			this.addQuestions(questions[i]);
		}
	}

	createComponent(type)
	{
		let object = this.createFactoryObject(type);
		object.build(
		{
			'type':type,
		});
		object.enableEditMode(this.editMode);
		return object;
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
	{	let chacngesGallery=[];

		let questions=[];
		let objects = this.objects;
		console.log("getChanges");
		for(let i=0; i<objects.length; i++)
		{
			let object = objects[i];
			let objectResult = object.getChanges();
			if(objectResult !== {})
			{
				questions.push(objectResult);
			}
		}
		chacngesGallery["questions"] = questions;
		return chacngesGallery;
	}

}