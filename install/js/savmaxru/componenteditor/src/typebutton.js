import {Tag} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";


export class TypeButton extends Savmaxru.ObjectGUI
{
	constructor()
	{
		super();
		this.setRootNode(
			Tag.render`
			<div class="btn-type-ico">
				<div class="checkboxlist-ico"></div>
				<span>Несколько вариантов ответа</span>
			</div>`
		);
		alert(BX.message("VENDOR_MODULENAME_COMPONENTNAME_BOOK_TITLE_1"));
		alert(BX.message("UI_BUTTONS_SAVE_BTN_TEXT"));
		alert(3);
	}
}