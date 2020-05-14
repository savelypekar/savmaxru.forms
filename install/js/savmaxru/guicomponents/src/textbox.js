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
		let result = [];
		result["ID"] = this.getProperty("ID");
		result["options"] = [];
		result["options"]["userValue"] = this.getValue();
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