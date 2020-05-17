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
			"argumentsForResult": {
				'ID': ID
			},
		};


		let gallery = new ComponentsGallery(configGallery, this,this.IDManager);
		this.gallery=gallery;
		this.includeInNode("viewform-wrapper", gallery.getHTMLObject());
		this.includeInNode("viewform-wrapper", gallery.getSaveButton());

		BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
			mode: 'class',
			data: {
				idInterview: ID,
			}
		}).then(function (response) {
			console.log(response['data']['result']);
			gallery.addObjectsGroup(response['data']['result'],"view");
		});

	}

	saveResult(result)
	{
		this.gallery.getSaveButton().remove();
		console.log(result);
		BX.ajax.runComponentAction('savmaxru:forms.viewform', 'saveResult', {
			mode: 'class',
			data: {
				result: result,
			}
		});
	}
}