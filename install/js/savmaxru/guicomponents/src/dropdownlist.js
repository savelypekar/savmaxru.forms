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
		let valueField = this.addNode("value",'span');
		let objectHTML = Tag.render`<option>${valueField}</option>`;

		objectHTML.getCondition = function()
		{
			return this.selected;
		};
		this.includeInNode("dropdownlist",objectHTML);
		objectHTML.setValue = function(value)
		{
			valueField.innerHTML = value;
		}
		objectHTML.setValue(option);

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