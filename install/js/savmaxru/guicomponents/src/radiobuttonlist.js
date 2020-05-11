import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';
import { ElectiveItemsList } from "./electiveitemslist";

export class RadiobuttonList extends ElectiveItemsList
{
	addOption(option)
	{
		if(this.listName === undefined) {
			this.listName = this.getNextHighestId();
		}
		let newItemID = this.getNextHighestId();
		let objectHTML = Tag.render`
		<div class="radiobutton-item">
			<input type="radio" id="${newItemID}" name="${this.listName}">
  			<label class="radiobutton-label" for="${newItemID}">${option}</label>
		</div>`;
		objectHTML.getCondition = function()
		{
			return this.children[0].checked;
		};
		this.includeInNode("electiveitemslist", objectHTML);
		return objectHTML;
	}
}