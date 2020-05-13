import {PropertyChangeManager} from "savmaxru.propertychangemanager";

export class Option
{
	constructor(data)
	{
		PropertyChangeManager.connectObject(this);
		this.addProperty('value',data['value']);
		this.addProperty('ID',data['ID']);
		this.addProperty('index',data['index']);
	}

	remove()
	{
		this.rewriteProperty('change','removed');
		this.getObjectHTML().remove();
	}

	setObjectHTML(object)
	{
		this.object = object;
	}

	refreshHTML()
	{
		this.getObjectHTML().setValue(this.getProperty('value'));
	}

	getObjectHTML()
	{
		return this.object;
	}

	setIndex(index)
	{
		this.index = index;
	}

	getStructure()
	{
		let result = this.getProperties();
		return result;
	}
}