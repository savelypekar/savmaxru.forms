import {DropDownList} from "./dropdownlist";
import {CheckboxList} from "./checkboxlist";
import './css/style.css'

export class GUIComponents
{
	static componentClasses = {
		"DropDownList": DropDownList,
		"CheckboxList": CheckboxList,
	};

	static attachComponent(name)
	{
		return new this.componentClasses[name]();
	}
}