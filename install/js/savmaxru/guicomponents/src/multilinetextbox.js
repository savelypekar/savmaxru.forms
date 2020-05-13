import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class MultiLineTextBox extends TextBox
{
	constructor()
	{
		super();
		this.inputHTML = Tag.render`<textarea class="textbox-singleline"></textarea>`;
		this.setComponent(this.inputHTML);
	}
}