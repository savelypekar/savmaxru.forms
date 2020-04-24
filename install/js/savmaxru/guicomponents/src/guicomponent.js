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

	setMark(mark){
		this.includeInNode("mark",mark);
	}
}