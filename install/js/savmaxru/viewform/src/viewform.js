import './css/style.css'

import {Type} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import {Plugins} from 'savmaxru.plugins';

export class ViewForm extends Savmaxru.ObjectGUI
{
	constructor()
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("viewform-wrapper")}`
		);

		let configGallery = {
			"galleryClassCSS": "viewform-gallery",
		};

		this.gallery = Savmaxru.Plugins.attachPlugin("ObjectsGallery",configGallery);
		this.includeInNode("viewform-wrapper", this.gallery.getHTMLObject());

		this.gallery.loadGroupObject();
	}
}