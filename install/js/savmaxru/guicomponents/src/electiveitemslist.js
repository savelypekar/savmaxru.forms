import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';

export class ElectiveItemsList extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("electiveitemslist")}`);
	}

}