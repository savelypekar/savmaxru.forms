import {Tag} from 'main.core';
import {Option} from "./option";

export class GUIComponent extends Savmaxru.ObjectGUI
{
	constructor()
	{
		super();
		this.setRootNode(
			Tag.render`
			<div class="object-gui">
				<div class="field-mark">
					${this.addNode("mark")}
				</div>
				<div class="field-description">
					${ this.addNode("description") }
				</div>
				<div>
					${ this.addNode("component") }
				</div>
				<div class="field-comment">
					${this.addNode("comment")}
				</div>
			</div>`
		);
	}

	getNextHighestId()
	{
		return this.IDManager.getNextHighestId();
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

	getIndex()
	{
		return this.index;
	}

	build(data)
	{
		this.IDManager = data['IDManager'];
		this.setDescription(data['description']);
		this.setComment(data['comment']);
		this.addOptions(data['options']);
		this.setIndex(data['index']);
		this.setID(data['ID']);
		
		if(data['required'])
		{
			this.setFieldAsRequired();
		}
	}

	options = [];

	getOptions()
	{
		return this.options;
	}

	addOptions(options)
	{
		for(let i = 0; i<options.length; i++)
		{
			let option = new Option(options[i]);
			option.setObjectHTML(this.addOption(option.getValue()));
			this.options.push(option);
		}
	}

	setComponent(component)
	{
		this.includeInNode("component",component);
	}

	setDescription(description)
	{
		if(description !== undefined)
		{
			this.includeInNode("description",description);
		}
	}

	setComment(comment)
	{
		if(comment !== undefined)
		{
			this.includeInNode("comment",comment);
		}
	}

	setFieldAsRequired()
	{
		this.includeInNode("mark",'*');
	}

	getResult()
	{
		let options = this.getOptions();
		let result = [];
		result["ID"] = this.getID();
		result["index"] = this.getIndex();
		result["options"] = [];
		for(let i = 0; i < options.length; i++)
		{
			let option = options[i];
			if(option.getObjectHTML().getCondition())
			{
				result["options"].push(option.getID());
			}
		}
		return result;
	}

}