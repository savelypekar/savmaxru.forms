export class IDManager
{
	constructor(namespaceForID, currentID)
	{
		this.namespaceForID = namespaceForID;
		if(currentID !== undefined)
		{
			this.setId(currentID);
		}
		else
		{
			this.setId(0);
		}
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