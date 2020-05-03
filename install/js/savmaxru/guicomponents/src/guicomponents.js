import {DropDownList} from "./dropdownlist";
import {CheckboxList} from "./checkboxlist";
import {RadiobuttonList} from "./radiobuttonlist";
import {Button} from "./button";
import {Heading} from "./heading";
import {Singlelinetextbox} from "./singlelinetextbox";
import {MultiLineTextBox} from "./multilinetextbox";

import './css/style.css'

export class GUIComponents
{
	static componentClasses = {
		"DropDownList": DropDownList,
		"CheckboxList": CheckboxList,
		"Button": Button,
		"RadiobuttonList" : RadiobuttonList,
		"Heading" : Heading,
		"SingleLineTextBox" : Singlelinetextbox,
		"MultiLineTextBox" : MultiLineTextBox,
	};

	static attachComponent(name)
	{
		return new this.componentClasses[name]();
	}

	static attach(name)
	{
		alert(name+"ы");
		return new this.componentClasses[name]();
	}
}