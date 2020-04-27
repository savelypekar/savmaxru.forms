import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';

export class CheckboxList extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("checkboxes")}`);
	}

	addOption(option)
	{
		let newItemID = this.getNextHighestId();
		this.includeInNode("checkboxes", Tag.render`
		<div class="checkbox-item">
			<input type="checkbox" class="checkbox" id="${newItemID}" />
			<label for="${newItemID}">${option}</label>
		</div>`);
	}

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
}