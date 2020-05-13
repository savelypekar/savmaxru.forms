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
		let separator = '_';
		if(this.namespaceForID === "")
		{
			separator = "";
		}
		return (this.namespaceForID+separator+(this.currentID++));
	}
}