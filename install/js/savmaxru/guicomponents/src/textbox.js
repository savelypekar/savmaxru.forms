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
		result["ID"] = this.getID();
		result["index"] = this.getIndex();
		result["options"] = [];

		let items = this.getAllElementsOfTheNode('textbox');
		let item = items[0];
		result["options"]["userValue"] = item.value;

		return result;
	}

}