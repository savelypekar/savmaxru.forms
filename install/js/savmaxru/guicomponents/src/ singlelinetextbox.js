import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class SingleLineTextBox extends TextBox
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`<input class="textbox" type="text">`);
	}
}