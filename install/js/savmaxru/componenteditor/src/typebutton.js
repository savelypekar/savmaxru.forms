import {Tag} from 'main.core';
import {ObjectGUI} from 'savmaxru.objectgui';

export class TypeButton extends ObjectGUI
{
	typesDescription = {
		"DropDownList": "DROPDOWN_LIST",
		"CheckboxList": "CHECKBOX_LIST",
		"RadiobuttonList" : "RADIOBUTTON_LIST",
		"Heading" : "HEADING",
		"SingleLineTextBox" : "SINGLELINE_TEXTBOX",
		"MultiLineTextBox" : "MULTILINE_TEXTBOX",
	};

	typesIcon = {
		"DropDownList": "dropdownlist-ico",
		"CheckboxList": "checkboxlist-ico",
		"RadiobuttonList" : "radiobuttonlist-ico",
		"Heading" : "heading-ico",
		"SingleLineTextBox" : "singlelinetextbox-ico",
		"MultiLineTextBox" : "multilinetextbox-ico",
	};

	constructor(type, parent)
	{
		super();
		this.setRootNode(
			Tag.render`
			<div class="btn-type-ico">
				<div class="${this.typesIcon[type]}"></div>
				<span>${BX.message(this.typesDescription[type])}</span>
			</div>`
		);
		(this.getHTMLObject()).onclick = function() {
			parent.addComponent(type);
		};
	}
}

//alert(BX.message("VENDOR_MODULENAME_COMPONENTNAME_BOOK_TITLE_1"));
//alert(BX.message("UI_BUTTONS_SAVE_BTN_TEXT"));
//alert(3);