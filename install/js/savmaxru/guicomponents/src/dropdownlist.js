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

	addOption(option)
	{
		let objectHTML = Tag.render`<option>${option}</option>`;
		objectHTML.getCondition = function()
		{
			return this.selected;
		};
		this.includeInNode("dropdownlist",objectHTML);
		return objectHTML;
	}
//getSelected
	/*getResult()
	{
		let resultComponent = [];
		let options = this.getOptions();
			//this.getNode("dropdownlist").options;

		for(let i=0; i < options.length; i++)
		{
			let option = options[i];
			let optionHTML = option.getObjectHTML();
			//if(optionHTML.selected)//
			let result = [];

			result["index"] = option.getID();
			result["index"] = option.getIndex();
			result["value"] = optionHTML.selected;

			resultComponent.push(result);
		}
		return resultComponent;
	}*/

}