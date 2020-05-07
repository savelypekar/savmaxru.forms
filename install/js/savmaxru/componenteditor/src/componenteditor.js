import {Type} from 'main.core';
import {ModalWindow} from 'savmaxru.modalwindow';
import {Tag} from 'main.core';
import './css/style.css'
import {TypeButton} from "./typebutton";

export class ComponentEditor
{

	types = [
		"DropDownList","CheckboxList","RadiobuttonList", "Heading" , "SingleLineTextBox", "MultiLineTextBox",
	];

	constructor(parent,galleryOfObjects)
	{
		this.parent = parent;
		this.galleryOfObjects = galleryOfObjects;
	}

	openWindow()
	{
		this.window = new Savmaxru.ModalWindow();
		this.parent.append(this.window.getHTMLObject());
	}

	create()
	{
		this.openWindow();
		let selectingAComponent = Tag.render`<div class="components-selection"></div>`;

		for(let i=0; i<this.types.length; i++)
		{
			let button = new TypeButton(this.types[i],this);
			selectingAComponent.append(button.getHTMLObject());
		}
		this.window.setContent(selectingAComponent);
		this.selectingAComponentMenu = selectingAComponent;
	}

	addComponent(name)
	{
		this.galleryOfObjects.createFactoryObject(name);
		this.selectingAComponentMenu.remove();
	}
}