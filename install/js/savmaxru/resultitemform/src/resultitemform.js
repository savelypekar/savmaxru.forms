import {Tag} from 'main.core';
import {ObjectGUI} from "savmaxru.objectgui";
import './css/style.css'

export class ResultItemForm extends ObjectGUI
{
	constructor(parent)
	{
		super();
		this.setRootNode(
			Tag.render`<div class="object-gui">
			
				${this.addNode("name")}
				${this.addNode("user-name")}
				${this.addNode("date-of-change")}
			</div>`);
		let _this = this;
		(this.getHTMLObject()).onclick = function() {
			parent.openResultWindow(_this.getID());
		};
	}

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
		this.includeInNode("name",Tag.render`<span>${name}</span>`);
	}

	setDate(value)
	{
		this.includeInNode("date-of-change",Tag.render`<span>${value}</span>`);
	}

	setUserName(name)
	{
		this.includeInNode("user-name",Tag.render`<span>${name}</span>`);
	}
}