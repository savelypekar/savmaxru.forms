import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

export class GUIComponent extends Savmaxru.ObjectGUI
{
	constructor(description,comment)
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


	build(data){
		this.IDManager = data['IDManager'];
		this.setDescription(data['description']);
		this.setComment(data['comment']);
		this.addOptions(data['options']);
		if(data['required'])
		{
			this.setFieldAsRequired();
		}
	}

	addOptions(options)
	{
		for(let i = 0; i<options.length; i++){
			this.addOption(options[i]);
		}
	}

	setComponent(component)
	{
		this.includeInNode("component",component);
	}

	setDescription(description)
	{
		this.includeInNode("description",description);
	}

	setComment(comment)
	{
		this.includeInNode("comment",comment);
	}

	setFieldAsRequired()
	{
		this.includeInNode("mark",'*');
	}

}