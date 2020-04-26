import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';

export class DropDownList extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`
			<div class="dropdownlist">
				${ this.addNode("select",'select') }
			</div>`
		);

		this.addOption('--');
	}

	addOption(option)
	{
		this.includeInNode("select",Tag.render`<option>${option}</option>`);
	}
}