import {Type} from 'main.core';
import {ObjectsGallery} from 'savmaxru.objectsgallery';
import {MenuItemForm} from "savmaxru.menuitemform";
import 'css/style.css';

export class MenuItemsFormGallery extends ObjectsGallery
{
	constructor(config)
	{
		super(config);
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
		let item = new MenuItemForm();
		item.setName(itemStructure['TITLE']);
		item.setID(itemStructure['ID']);
		item.setNumberOfResults('Ответов: ' + itemStructure['COUNT_ANSWERS']);
		item.dateOfChange(itemStructure['DATE_CREATE']);
		this.push(item);
	}

	loadGroupObject()
	{
		let gallery = this;
		BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewCurrentUser', {
			mode: 'class',
			data: {
				quantity: '100',
				firstPosition: '1'
			}
		}).then(function (response) {
			console.log(response);
			gallery.addGroupObject(response['data']['result']);
		});

	}
}