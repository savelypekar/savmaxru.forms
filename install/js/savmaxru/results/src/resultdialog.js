import {ModalWindow} from "savmaxru.modalwindow";
import {Tag} from 'main.core';
import './css/style.css'

export class ResultDialog extends ModalWindow
{
	constructor(structure)
	{
		super();
		let answers = structure['answers'];
		this.addNode('results-form');
		this.includeInNode('results-form',Tag.render`<span class="user-name">${structure['NAME_USER']}</span>`);
		for(let i=0; i<answers.length; i++)
		{
			let answer = answers[i];
			let answerNode = Tag.render`<ul></ul>`;
			this.includeInNode('results-form',Tag.render`<span>${answer['CONTENT']}</span>`);
			let options = answer['options'];
			if(options !== undefined)
			{
				for(let j=0; j<options.length; j++)
				{
					let option = options[j];
					answerNode.append(Tag.render`<li>${option["CONTENT"]}</li>`);
				}
			}
			else
			{
				answerNode.append(Tag.render`<li>${'bez otveta'}</li>`);
			}
			this.includeInNode('results-form',answerNode);
		}
		this.setContent(this.getNode('results-form'));
	}


}