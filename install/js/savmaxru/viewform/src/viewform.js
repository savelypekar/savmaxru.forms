import './css/style.css'
import {ObjectGUI} from "savmaxru.objectgui";
import {ComponentsGallery} from "savmaxru.componentsgallery";
import {Tag} from 'main.core';
import {IDManager} from 'savmaxru.idmanager';

export class ViewForm extends ObjectGUI
{
	IDManager = new IDManager("viewform");

	constructor(ID)
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("viewform-wrapper")}`
		);

		let configGallery = {
			"galleryClassCSS": "viewform-gallery",
			"argumentsForResult": {
				'ID': ID
			},
		};

		let gallery = new ComponentsGallery(configGallery, this,this.IDManager);
		this.includeInNode("viewform-wrapper", gallery.getHTMLObject());

		BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
			mode: 'class',
			data: {
				idInterview: ID,
			}
		}).then(function (response) {
			gallery.addObjectsGroup(response['data']['result'],"view");
		});

	}

	saveResult(result)
	{
		BX.ajax.runComponentAction('savmaxru:forms.viewform', 'saveResult', {
			mode: 'class',
			data: {
				result: result,
			}
		});
	}
}