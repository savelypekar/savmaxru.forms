import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class Singlelinetextbox extends TextBox
{
	constructor()
	{
		super();
		this.includeInNode("textbox",Tag.render`<input class="textbox-singleline" type="text">`);
	}
}