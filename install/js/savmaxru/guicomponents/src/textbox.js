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
		let objectHTML = this.inputHTML;
		this.inputHTML.setValue = function(value)
		{
			objectHTML.value = value;
		};
		objectHTML.setValue(option);
		return objectHTML;
	}
}