import {DropDownList} from "./dropdownlist";
import {CheckboxList} from "./checkboxlist";
import {RadiobuttonList} from "./radiobuttonlist";
import {Button} from "./button";
import {Heading} from "./heading";
import {SingleLineTextBox} from "./ singlelinetextbox";

import './css/style.css'

export class GUIComponents
{
	static componentClasses = {
		"DropDownList": DropDownList,
		"CheckboxList": CheckboxList,
		"Button": Button,
		"RadiobuttonList" : RadiobuttonList,
		"Heading" : Heading,
		"SingleLineTextBox" : SingleLineTextBox,
	};

	static attachComponent(name)
	{
		return new this.componentClasses[name]();
	}
}