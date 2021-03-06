import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

export class ObjectsGallery extends ObjectGUI
{
	objects=[];

	getObjects(){
		return this.objects;
	}

	constructor(config = {
		"galleryClassCSS": "standard-gallery",
		"objectClassCSS" : "standard-object",
		"objectsFactory": undefined,
		"argumentsForResult": {
			'ID': 232323
		},
	})
	{
		super();
		this.setRootNode(
			Tag.render`${this.addNode(config["galleryClassCSS"])}`
		);
		this.objectsFactory = config["objectsFactory"];
		this.argumentsForResult = config["argumentsForResult"];
	}

	getChanges()
	{

	}

	createFactoryObject(name)
	{	let object = this.objectsFactory.attach(name);
		this.push(object);
		return object;
	}

	push(object)
	{
		this.objects.push(object);

		if(object.setParent !== undefined )
		{
			object.setParent(this);
		}
		this.getRootNode().append(object.getHTMLObject());
	}

	createObject()
	{

	}

	loadGroupObject()
	{

	}
}