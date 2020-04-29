import { GUIComponent } from "./guicomponent";
<<<<<<< HEAD

export class RadiobuttonList extends GUIComponent
{

=======
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
		this.includeInNode("electiveitemslist", Tag.render`
		<div class="radiobutton-item">
			<input type="radio" id="${newItemID}" name="${this.listName}">
  			<label class="radiobutton-label" for="${newItemID}">${option}</label>
		</div>`);
	}
>>>>>>> objectsGUIextensions
}