import {Tag} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import './css/style.css'

export class MenuItemForm extends ObjectGUI
{
	constructor()
	{
		super();

		this.setRootNode(
			Tag.render`
			<div class="object-gui">
				${ this.addNode("name-form") }
				${ this.addNode("number-of-results") }
				${ this.addNode("date-of-change") }
			</div>`
		);
		let button = this;
		(this.getHTMLObject()).onclick = function() {
			window.location = ("edit/"+button.getID());
		};
	};

	setID(ID)
	{
		this.ID = ID;
	}

	getID()
	{
		return this.ID;
	}

	setName(name)
	{
		this.includeInNode("name-form",Tag.render`<span>${name}</span>`);
	}

	dateOfChange(value)
	{
		//this.includeInNode("date-of-change",Tag.render`<span>${value}</span>`);
	}

	setNumberOfResults(value)
	{
		this.includeInNode("number-of-results",Tag.render`<span>${value}</span>`);
	}
}