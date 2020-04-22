import {Type, Tag} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";

export class GalleryMenuItem extends Savmaxru.ObjectGUI
{
	constructor()
	{
		super();

		this.setRootNode(
		Tag.render`<div class="savmaxru-form-element-for-list">
			<div class="savmaxru-forms-h5">
				${ this.addNode("name") }
			</div>
			<div class="savmaxru-forms-h4">
				${ this.addNode("date") }
			</div>
		</div>`);
	}

	setDate(date)
	{
		this.includeInNode("date",date);
	}

	setName(name)
	{
		this.includeInNode("name",name);
	}
}