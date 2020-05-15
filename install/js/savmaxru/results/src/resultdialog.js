import {ModalWindow} from "savmaxru.modalwindow";
import {Tag} from 'main.core';

export class ResultDialog extends ModalWindow
{
	constructor(structure)
	{
		super();
		let answers = structure['answers'];
		console.log(structure);
		this.addNode('answers');
		for(let i=0; i<answers.length; i++)
		{
			let answer = answers[i];
			this.includeInNode('answers',answer['CONTENT']);
			let options = answer['options'];
			for(let j=0; j<options.length; j++)
			{
				let option = options[j];
				this.includeInNode('answers',option['CONTENT']);
			}
		}
		this.setContent(this.getNode('answers'));
	}


}