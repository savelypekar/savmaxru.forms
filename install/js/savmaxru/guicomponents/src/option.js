export class Option
{
	constructor(data)
	{
		this.setValue(data['value']);
		this.setID(data['ID']);
		this.setIndex(data['index']);
	}

	setObjectHTML(object)
	{
		this.object = object;
	}

	getObjectHTML()
	{
		return this.object;
	}

	setValue(value)
	{
		this.value = value;
	}

	getValue()
	{
		return this.value;
	}

	setID(id)
	{
		this.id = id;
	}

	getID()
	{
		return this.id;
	}

	setIndex(index)
	{
		this.index = index;
	}
}