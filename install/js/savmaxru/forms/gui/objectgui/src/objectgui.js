import {Type} from 'main.core';

export class Objectgui
{
	constructor(options = {name: 'Objectgui'})
	{
		this.name = options.name;
	}

	setName(name)
	{
		if (Type.isString(name))
		{
			this.name = name;
		}
	}

	getName()
	{
		return this.name;
	}
}