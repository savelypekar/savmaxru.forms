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

	setObjectHTML(object)
	{
		this.object = object;
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