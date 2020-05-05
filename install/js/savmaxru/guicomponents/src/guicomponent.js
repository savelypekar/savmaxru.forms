import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

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

		if(data['required'])
		{
			this.setFieldAsRequired();
		}
	}

	addOptions(options)
	{
		if(options !== undefined)
		{
			for(let i = 0; i<options.length; i++)
			{
				this.addOption(options[i],i);
			}
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
		return false;
	}
}