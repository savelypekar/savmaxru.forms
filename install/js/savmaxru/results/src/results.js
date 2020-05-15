import './css/style.css'
import {ObjectGUI} from "savmaxru.objectgui";
import {ResultsGallery} from "savmaxru.resultsgallery";
import {Tag} from 'main.core';
import {ResultDialog} from "./resultdialog";

export class Results extends ObjectGUI
{
	constructor()
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("results-wrapper")}`
		);

		let configGallery = {
			"galleryClassCSS": "results-gallery",
		};

		let gallery = new ResultsGallery(configGallery,this);
		this.includeInNode("results-wrapper", gallery.getHTMLObject());
		gallery.loadGroupObject();
	}

	openResultWindow(ID)
	{
		let page = this;
		BX.ajax.runComponentAction('savmaxru:forms.results', 'sendSelectedResult', {
			mode: 'class',
			data: {
				idResult: ID,
			}
		}).then(function (response) {
			let window = new ResultDialog(response['data']['result'])
			page.getRootNode().append(window.getHTMLObject());
		});
	}

}