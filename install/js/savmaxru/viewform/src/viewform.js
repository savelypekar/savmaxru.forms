import './css/style.css'

import {Type} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import {Plugins} from 'savmaxru.plugins';
import {GUIComponents} from 'savmaxru.guicomponents';

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
			"objectsFactory": Savmaxru.GUIComponents,
		};


		let gallery = Savmaxru.Plugins.attachPlugin("ObjectsGallery",configGallery);
		this.gallery = gallery;
		this.includeInNode("viewform-wrapper", this.gallery.getHTMLObject());

		gallery.createFactoryObject("DropDownList");

		//this.gallery.loadGroupObject();
	}


}