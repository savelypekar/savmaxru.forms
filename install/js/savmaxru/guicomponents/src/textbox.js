import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';

export class TextBox extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("textbox")}`);
	}

	getResult()
	{
		let result = [];
		let items = this.getAllElementsOfTheNode('textbox');
		for(let i=0; i < items.length; i++)
		{
			let item = items[i];
			let itemInfo = [];
			itemInfo["Value"+i] = item.value;
			result.push(itemInfo);
		}
		return result;
	}
}