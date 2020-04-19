import {Type} from 'main.core';

export class IDManager
{
	constructor(options = {namespaceForID: 'root'})
	{
		this.namespaceForID = options.namespaceForID;
		this.setId(0);
	}

	setId(id)
	{
		this.currentID = id;
	}

	getNextHighestId()
	{
		return (this.namespaceForID+'_'+(this.currentID++));
	}
}