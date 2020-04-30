import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class SingleLineTextBox extends TextBox
{
	constructor()
	{
		super();
		this.includeInNode("textbox",Tag.render`<input class="textbox-singleline" type="text">`);
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