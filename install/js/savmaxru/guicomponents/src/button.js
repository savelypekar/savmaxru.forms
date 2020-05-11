import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';

export class Button extends GUIComponent {
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("button")}`);
	}

	setStyle(className)
	{
		this.getNode("button").className = className;
	}

	addOption(option)
	{
		this.includeInNode("button",Tag.render`<span>${option}</span>`);
	}

	onDown(_function)
	{
		this._function = _function;
		let htmlObject = this.getHTMLObject();
		htmlObject.dataStructure = this;
		this._function = _function;

		(this.getHTMLObject()).onclick = function(_this) {
			htmlObject.dataStructure._function();
		};
	}

	getResult()
	{
		return false;
	}
}