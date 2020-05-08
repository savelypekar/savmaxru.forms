import {Type} from 'main.core';
import {ObjectsGallery} from "savmaxru.objectsgallery";

export class ComponentsGallery extends ObjectsGallery
{
	constructor(argument)
	{
		super(argument);
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
			//console.log(questions[i]);
			this.addQuestions(questions[i]);
		}
	}

}