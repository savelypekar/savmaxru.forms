import {PropertyChangeManager} from "savmaxru.propertychangemanager";

export class Option
{
	constructor(data,createMode = 'load')
	{
		PropertyChangeManager.connectObject(this);
		this.addProperty('ID',data['ID']);
		if(createMode === 'load')
		{
			this.addProperty('value',data['value']);
			this.addProperty('index',data['index']);
		}
		else
		{
			this.rewriteProperty('value',data['value']);
			this.rewriteProperty('index',data['index']);
		}
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

	getChanges()
	{
		let result = this.getChangedProperties();
		if(result === false)
		{
			return false;
		}
		result["ID"] = this.getProperty("ID");
		result["index"] = 1;
		return result;
	}
}