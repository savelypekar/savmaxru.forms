import {Type} from 'main.core';
import {ObjectsGallery} from 'savmaxru.objectsgallery';
import {ResultItemForm} from "savmaxru.resultitemform";

export class ResultsGallery extends ObjectsGallery
{
	constructor(config,parent,ID)
	{
		super(config);
		this.ID = ID;
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
		console.log(itemStructure);
		let item = new ResultItemForm(this.getParent());
		this.push(item);
		item.setName(itemStructure['NAME_USER']);
		item.setID(itemStructure['ID']);
		item.setUserName(itemStructure['TIME']);
		item.setDate(BX.message(itemStructure['DATE_MONTH'])+' '+itemStructure['DATE_DAY']);

	}

	loadGroupObject()
	{
		let gallery = this;

		let idInterview = this.ID;
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