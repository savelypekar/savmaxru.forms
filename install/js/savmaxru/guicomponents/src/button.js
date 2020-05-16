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
		let valueField = this.addNode("value",'span');
		let objectHTML = Tag.render`<span>${valueField}</span>`;
		this.includeInNode("button",objectHTML);
		objectHTML.setValue = function(value)
		{
			valueField.innerHTML = value;
		}
		objectHTML.setValue(option);
		return objectHTML;
	}

	onDown(_function)
	{
		this._function = _function;
		let htmlObject = this.getHTMLObject();
		htmlObject.dataStructure = this;
		this._function = _function;

		(this.getHTMLObject()).onclick = function() {
			htmlObject.dataStructure._function();
		};
	}

	getResult()
	{
		return false;
	}
}