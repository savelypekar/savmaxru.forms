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
			if(this.properties["change"] !== "changed" && this.properties["change"] !== "removed")
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
			let countChanges = 0;
			let result = [];
			for (let name in this.changes)
			{
				if(this.changes[name] === true)
				{
					result[name] = this.properties[name];
					countChanges++;
				}
			}
			if(countChanges !== 0 )
			{
				return result;
			}
			else
			{
				return false;
			}
		}

		object.getProperties = function()
		{
			return this.properties;
		}

	}
}