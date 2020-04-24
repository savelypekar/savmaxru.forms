import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';

export class DropDownList extends GUIComponent
{
	constructor(description='Test',options= ['Russia', 'USA'],comment= 'comment')
	{
		super();
		this.setComponent(Tag.render`
			<div class="dropdownlist">
				${ this.addNode("select",'select') }
			</div>`
		);
		this.setDescription(description);
		this.setComment(comment);
		this.addOption('--')
		this.addOptions(options);
		this.setMark('*');
	}

	addOption(option)
	{
		this.includeInNode("select",Tag.render`<option>${option}</option>`);
	}
}