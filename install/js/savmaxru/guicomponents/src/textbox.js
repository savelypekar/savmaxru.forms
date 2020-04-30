import { GUIComponent } from "./guicomponent";
import {Tag} from 'main.core';

export class TextBox extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("textbox")}`);
	}
}