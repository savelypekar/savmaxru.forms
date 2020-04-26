import {DropDownList} from "./dropdownlist";
import {CheckboxList} from "./checkboxlist";
import {Button} from "./button";
import './css/style.css'

export class GUIComponents
{
	static componentClasses = {
		"DropDownList": DropDownList,
		"CheckboxList": CheckboxList,
		"Button": Button,
	};

	static attachComponent(name)
	{
		return new this.componentClasses[name]();
	}
}