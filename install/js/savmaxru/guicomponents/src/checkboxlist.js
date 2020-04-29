import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';
import { ElectiveItemsList } from "./electiveitemslist";

export class CheckboxList extends ElectiveItemsList
{
	addOption(option)
	{
		let newItemID = this.getNextHighestId();
		this.includeInNode("electiveitemslist", Tag.render`
		<div class="checkbox-item">
			<input type="checkbox" id="${newItemID}" />
			<label class="checkbox-label" for="${newItemID}">${option}</label>
		</div>`);
	}
<<<<<<< HEAD

	getResult()
	{
		let result = [];
		let items = this.getAllElementsOfTheNode('checkboxes');
		for(let i=0; i<items.length; i++)
		{
			let item = items[i];
			let itemInfo = [];
			itemInfo[item.children[1].innerHTML] = item.children[0].checked;
			result.push(itemInfo)
		}
		return result;
	}
=======
>>>>>>> objectsGUIextensions
}