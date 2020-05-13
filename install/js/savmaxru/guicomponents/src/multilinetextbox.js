import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class MultiLineTextBox extends TextBox
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`<input class="textbox-singleline" type="text">`);
		//this.includeInNode("textbox",Tag.render`<textarea class="textbox-singleline"></textarea>`);
	}
}