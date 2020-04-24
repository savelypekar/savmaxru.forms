import {GalleryMenuItem} from "./gallerymenuitem";
import {Plugins} from 'savmaxru.plugins';

export class MyForms
{
	constructor(parentContainer)
	{
		//let gallery = new Savmaxru.Plugins.Plugins.ObjectsGallery();
		//let obj = new ObjectsGallery();
		let galleryMenuItem = new GalleryMenuItem();
		parentContainer.append(galleryMenuItem.getHTMLObject());
	}
}