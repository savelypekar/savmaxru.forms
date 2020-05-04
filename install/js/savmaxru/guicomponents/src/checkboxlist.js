import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';
import { ElectiveItemsList } from "./electiveitemslist";

export class CheckboxList extends ElectiveItemsList
{
	addOption(option,index)
	{
		let newItemID = this.getNextHighestId();
		this.includeInNode("electiveitemslist", Tag.render`
		<div class="checkbox-item">
			<input type="checkbox" value="${index}" id="${newItemID}" />
			<label class="checkbox-label" for="${newItemID}">${option}</label>
		</div>`);
	}
}