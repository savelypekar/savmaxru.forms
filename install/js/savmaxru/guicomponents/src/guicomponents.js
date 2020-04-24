import {DropDownList} from "./dropdownlist";
import './css/style.css'

export class GUIComponents
{
	static componentClasses = {
		"DropDownList": DropDownList,
	};

	static attachComponent(name)
	{
		return new this.componentClasses[name]();
	}
}