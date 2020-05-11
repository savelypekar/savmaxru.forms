import {ObjectGUI} from "savmaxru.objectgui";
import {ObjectsGallery} from "savmaxru.objectsgallery";
import {MenuItemForm} from "savmaxru.menuitemform";
import {Tag} from 'main.core';

export class MyForms extends ObjectGUI
{
	constructor()
	{

		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("myforms-wrapper")}`
		);

		let configGallery = {
			"galleryClassCSS": "myforms-gallery",
		};

		let gallery = new ObjectsGallery(configGallery);

		this.gallery = gallery;
		this.includeInNode("myforms-wrapper", this.gallery.getHTMLObject());

		let ooo = new MenuItemForm();
		ooo.setName('name');
		ooo.setNumberOfResults('Нет ответов');
		gallery.push(ooo);
		ooo.dateOfChange('10 апреля');
	}
}

