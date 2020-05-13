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
		let options = this.getOptions();
		let result = [];
		result["ID"] = this.getProperty("ID");
		//result["index"] = this.getProperty("index");
		result["options"] = [];

		let items = this.getAllElementsOfTheNode('textbox');
		let item = items[0];
		result["options"]["userValue"] = item.value;

		return result;
	}

	getHTMLValue()
	{
		return this.getOptions()[0].getHTMLValue();
	}

	addOption(option)
	{
		let items = this.getAllElementsOfTheNode('textbox');
		let objectHTML = items[0];
		objectHTML.value = option;

		objectHTML.getValue = function()
		{
			return this.value;
		}

		return objectHTML;
	}
}