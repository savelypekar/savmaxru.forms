import { TextBox } from "./textbox";
import {Tag} from 'main.core';

export class Singlelinetextbox extends TextBox
{
	constructor()
	{
		super();
		this.inputHTML = Tag.render`<input class="textbox-singleline" type="text">`;
		this.setComponent(this.inputHTML);
	}
}