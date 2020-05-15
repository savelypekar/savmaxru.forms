import {ObjectsGallery} from "savmaxru.objectsgallery";
import {GUIComponents} from 'savmaxru.guicomponents';
import {ModalWindow} from 'savmaxru.modalwindow';
import {Tag} from 'main.core';
import './css/style.css'

export class ComponentsGallery extends ObjectsGallery
{
	constructor(argument, parent,IDManager)
	{
		argument["objectsFactory"] = GUIComponents;
		super(argument);
		this.IDManager = IDManager;
		this.componentEditor = argument['componentEditor'];
		this.setParent(parent);
	}

	editComponent(component)
	{
		this.componentEditor.runEditor(component);
	}

	addQuestions(question ={},regime)
	{
		let gallery = this;
		let type = question['type'];
		question['IDManager'] = this.IDManager;
		let component = this.createFactoryObject(type);
		component.build(question);
		if(type === 'Button' && regime === 'view')
		{
			component.onDown(function(){
				gallery.getParent().saveResult(gallery.getResult());
				gallery.removeHTMLObject();
				let successDialog = new ModalWindow();
				successDialog.setContent(
					Tag.render`<div class="success">
						<div class="success-ico"></div>
						<span>${BX.message('FORM_SEND_SUCCESSFULLY')}</span>
					</div>`
				);
				gallery.getParent().getHTMLObject().append(successDialog.getHTMLObject());
			});
		}
		component.enableEditMode(this.editMode);
	}

	editMode = [];

	enableEditMode(modes= {
		"settings":true,"remove":true
	})
	{
		this.editMode = modes;
	}

	addObjectsGroup(data,regime)
	{
		let questions = data['questions'];

		for(let i=0; i<questions.length; i++)
		{
			this.addQuestions(questions[i],regime);
		}
	}

	createComponent(type)
	{
		let object = this.createFactoryObject(type);
		object.build(
		{
			'type':type,
			'IDManager': this.IDManager,
		});
		object.enableEditMode(this.editMode);
		return object;
	}

	createComponentWithOption(type)
	{
		let component = this.createComponent(type);
		component.build(
		{
			'options': [
				{
					value: "",
				},
			],
		});
		return component;
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
		let changesGallery=[];
		let argumentsForResult = this.argumentsForResult;
		for (let key in argumentsForResult)
		{
			changesGallery[key]= argumentsForResult[key];
		}
		let questions=[];
		let objects = this.objects;
		for(let i=0; i<objects.length; i++)
		{
			let object = objects[i];
			let objectResult = object.getChanges();
			if(objectResult !== false)
			{
				questions.push(objectResult);
			}
		}
		if(questions.length !== 0)
		{
			changesGallery["questions"] = questions;
		}
		return changesGallery;
	}

}