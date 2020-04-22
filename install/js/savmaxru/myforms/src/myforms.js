import {Type} from 'main.core';
import {GalleryMenuItem} from "./gallerymenuitem";

export class MyForms
{
	constructor(parentContainer)
	{
		let galleryMenuItem = new GalleryMenuItem();
		parentContainer.append(galleryMenuItem.getHTMLObject());
	}
}