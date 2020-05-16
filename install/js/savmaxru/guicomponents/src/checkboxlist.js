import {Tag} from 'main.core';
import { ElectiveItemsList } from "./electiveitemslist";

export class CheckboxList extends ElectiveItemsList
{
	addOption(option)
	{
		let newItemID = this.getNextHighestId();

		let valueField = this.addNode("value",'span');
		let objectHTML = Tag.render`
		<div class="checkbox-item">
			<input type="checkbox" id="${newItemID}" />
			<label class="checkbox-label" for="${newItemID}">${valueField}</label>
		</div>`;
		objectHTML.getCondition = function()
		{
			return this.children[0].checked;
		};

		objectHTML.setValue = function(value)
		{
			valueField.innerHTML = value;
		}
		objectHTML.setValue(option);

		this.includeInNode("electiveitemslist", objectHTML);
		return objectHTML;
	}
}