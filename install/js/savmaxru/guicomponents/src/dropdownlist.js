import {GUIComponent} from "./guicomponent";
import {Tag} from 'main.core';

export class DropDownList extends GUIComponent
{
	constructor()
	{
		super();
		this.setComponent(Tag.render`${ this.addNode("dropdownlist",'select') }`);

		this.addOption('--');
	}

	addOption(option,index)
	{
		this.includeInNode("dropdownlist",Tag.render`<option value="${index}">${option}</option>`);
	}

	getResult()
	{
		let resultComponent = [];
		let options = this.getNode("dropdownlist").options;

		for(let i=0; i < options.length; i++)
		{
			let option = options[i];
			let result = [];

			result["index"] = option.value;
			result["value"] = option.selected;

			resultComponent.push(result);
		}
		return resultComponent;
	}

}