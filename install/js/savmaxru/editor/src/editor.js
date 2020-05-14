import {ObjectGUI} from "savmaxru.objectgui";
import {Tag} from 'main.core';
import './css/style.css'
import {ComponentEditor} from "savmaxru.componenteditor";
import {ComponentsGallery} from "savmaxru.componentsgallery";
import {GUIComponents} from "savmaxru.guicomponents";
import {IDManager} from 'savmaxru.idmanager';

export class Editor extends ObjectGUI
{
	IDManager = new IDManager("editform");

	constructor(ID)
	{
		super();
		this.setRootNode(
			Tag.render`
			${this.addNode("editor-wrapper")}`
		);

		this.includeInNode("editor-wrapper", Tag.render`
		<div class="navigation-bar">
			<div class="a-wrapper">
				<a href="/forms/result/${ID}" target="_blank">${BX.message("RESULT")}</a>
				<a href="/forms/view/${ID}" target="_blank">${BX.message("FORM_PAGE")}</a>
			</div><br>
		</div>
		`);

		let configGallery = {
			"galleryClassCSS": "editor-gallery",
			"componentEditor": componentEditor,
			"argumentsForResult": {
				'ID': argumentID
			},
		};
		let gallery = new ComponentsGallery(configGallery, this, this.IDManager);
		gallery.enableEditMode();
		this.includeInNode("editor-wrapper", gallery.getHTMLObject());

		let componentEditor = new ComponentEditor(this.getNode("editor-wrapper"));
		componentEditor.setGallery(gallery);

		let argumentID = ID;
		if(argumentID === 0)
		{
			argumentID = "NEW_FORM";
		}

		let addComponentButton = GUIComponents.attach("Button");
		addComponentButton.setStyle('plus-button');
		this.includeInNode("editor-wrapper", addComponentButton.getHTMLObject());

		let saveButton = GUIComponents.attach("Button");
		saveButton.build(
			{
				'options':[
					{
						value: BX.message("SAVE_FORM"),
					},
				],
			});
		this.includeInNode("editor-wrapper", saveButton.getHTMLObject());

		addComponentButton.onDown(function(){
			componentEditor.runCreator();
		});

	}
}