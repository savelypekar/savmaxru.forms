import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';

export class TextBox extends GUIComponent
{
	constructor()
	{
		super();
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

	getValue()
	{
		return this.inputHTML.value;
	}

	addOption(option)
	{
		let objectHTML = this.getNode('component');
		this.inputHTML.value = option;
		return this.inputHTML;
	}
}