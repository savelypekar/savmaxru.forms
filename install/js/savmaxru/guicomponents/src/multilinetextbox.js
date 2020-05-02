import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class MultiLineTextBox extends TextBox
{
	constructor()
	{
		super();
		this.includeInNode("textbox",Tag.render`<textarea class="textbox-singleline"></textarea>`);
	}
}