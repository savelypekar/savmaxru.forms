import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';

export class Heading extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${this.addNode("heading")}`);
	}

	addOption(option)
	{
		this.includeInNode("heading", Tag.render`<div class="heading-item">${option}</div>`);
	}
}