import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';

export class Heading extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("heading")}`);
	}

	addOption(option)
	{
		let valueField = this.addNode("value",'span');
		let objectHTML = Tag.render`<div class="heading-item">${valueField}</div>`;
		this.includeInNode("heading", objectHTML);
		objectHTML.setValue = function(value)
		{
			valueField.innerHTML = value;
		}
		objectHTML.setValue(option);
		return objectHTML;
	}

	getResult()
	{
		return false;
	}
}