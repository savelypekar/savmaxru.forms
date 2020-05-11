import {Type} from 'main.core';
import {ObjectsGallery} from "savmaxru.objectsgallery";
import {GUIComponents} from 'savmaxru.guicomponents';

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

	createComponent(name)
	{
		let object = this.createFactoryObject(name);
		object.enableEditMode(this.editMode);
		return object;
	}

}