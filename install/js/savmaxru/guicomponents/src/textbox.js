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
		let item = items[0];

		let itemInfo = [];
		itemInfo["index"] = 0;
		itemInfo["value"] = item.value;
		result.push(itemInfo);

		return result;
	}
}