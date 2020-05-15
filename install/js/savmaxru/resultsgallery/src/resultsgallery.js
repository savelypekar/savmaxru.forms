import {Type} from 'main.core';
import {ObjectsGallery} from 'savmaxru.objectsgallery';
import {ResultItemForm} from "savmaxru.resultitemform";

export class ResultsGallery extends ObjectsGallery
{
	constructor(config,parent)
	{
		super(config);
		this.setParent(parent);
	}

	addGroupObject(itemsStructure)
	{
		for(let i=0; i<itemsStructure.length; i++)
		{
			this.addItems(itemsStructure[i]);
		}
	}

	addItems(itemStructure)
	{
		let item = new ResultItemForm(this.getParent());
		this.push(item);
		item.setName('подстрижка собак');
		item.setID(itemStructure['ID']);
		item.setUserName('Савелий');
		item.setDate('10 июня. 10:00');

	}

	loadGroupObject()
	{
		let gallery = this;

		let idInterview = '1';
		let quantity = '70';
		let firstPosition = '1';
		BX.ajax.runComponentAction('savmaxru:forms.results', 'sendResults', {
			mode: 'class',
			data: {
				idInterview: idInterview,
				quantity: quantity,
				firstPosition: firstPosition,
			}
		}).then(function (response) {
			//console.log(response['data']['result']);
				gallery.addGroupObject(response['data']['result']);
		});
	}


}