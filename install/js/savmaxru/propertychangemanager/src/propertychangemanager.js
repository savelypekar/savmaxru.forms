import {Type} from 'main.core';

export class PropertyChangeManager
{
	static connectObject(object)
	{
		object.properties = [];
		object.changes = [];

		object.addProperty = function(name,value)
		{
			this.properties[name] = value;
		}

		object.rewriteProperty = function(name, value)
		{
			this.changes[name] = true;
			this.properties[name] = value;
			if(this.properties["change"] !== "changed" )
			{
				this.rewriteProperty("change","changed");
			}
		}

		object.getProperty = function(name)
		{
			return this.properties[name];
		}

		object.getChangedProperties = function()
		{
			let result = [];
			for (let name in this.changes)
			{
				if(this.changes[name] === true)
				{
					result[name] = this.properties[name];
				}
			}
			return result;
		}

		object.getProperties = function()
		{
			return this.properties;
		}

	}
}