import {Type} from 'main.core';
import {ModalWindow} from 'savmaxru.modalwindow';
import {Tag} from 'main.core';
import './css/style.css'
import {TypeButton} from "./typebutton";

export class ComponentEditor
{
	constructor(parent)
	{
		this.parent = parent;
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
		let button = new TypeButton();
		selectingAComponent.append(button.getHTMLObject());

		this.window.setContent(selectingAComponent);
	}
}