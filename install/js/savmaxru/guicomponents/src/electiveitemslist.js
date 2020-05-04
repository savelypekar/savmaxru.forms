import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';

export class ElectiveItemsList extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("electiveitemslist")}`);
	}

	getResult()
	{
		let result = [];
		let items = this.getAllElementsOfTheNode('electiveitemslist');
		for(let i=0; i<items.length; i++)
		{
			let item = items[i];
			let option = item.children[0];

			let itemInfo = [];
			itemInfo["value"] = option.checked;
			itemInfo["index"] = option.value;
			//itemInfo[item.children[1].innerHTML] = item.children[0].checked;
			result.push(itemInfo)
		}
		return result;
	}
}