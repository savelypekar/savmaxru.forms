import {ObjectGUI} from "savmaxru.objectgui";
import {MenuItemsFormGallery} from "savmaxru.menuitemsformgallery";
import {Tag} from 'main.core';
import {GUIComponents} from 'savmaxru.guicomponents';

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

		let gallery = new MenuItemsFormGallery(configGallery);

		let addButton = GUIComponents.attach("Button");
		addButton.setStyle('plus-button');
		gallery.push(addButton);

		addButton.onDown(function(){
			window.location = "edit/0";
		});

		this.includeInNode("myforms-wrapper", gallery.getHTMLObject());
		gallery.loadGroupObject();
	}
}

