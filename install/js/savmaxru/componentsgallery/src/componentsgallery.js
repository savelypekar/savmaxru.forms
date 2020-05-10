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
		component.enableEditMode();
	}

	addObjectsGroup(data)
	{
		let questions = data['questions'];
		for(let i=0; i<questions.length; i++)
		{
			this.addQuestions(questions[i]);
		}
	}

}