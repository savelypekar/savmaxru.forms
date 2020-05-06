import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';

import './css/style.css'

export class ModalWindow extends Savmaxru.ObjectGUI
{
	constructor()
	{
		super();
		let closeButton = this.addNode("window-close-button");
		this.setRootNode(
			Tag.render`
			<div class="modal-background">
				<div class="modal-window">
					${closeButton}
					${this.addNode("body")}
				</div>
			</div>`
		);
		closeButton.onclick = function()
		{
			this.parent.remove();
		}
	}

	setContent(content)
	{
		this.includeInNode("body",content);
	}
	
}