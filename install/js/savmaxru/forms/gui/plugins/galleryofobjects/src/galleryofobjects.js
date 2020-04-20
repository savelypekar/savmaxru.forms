import {Type} from 'main.core';

import {ObjectGUI} from 'savmaxru.forms.gui.objectgui';

export class GalleryOfObjects
{
	constructor(options = {
		templateElement:'',
		wrapperID: undefined,
	})
	{

	for(let i=0; i<7; i++){
		let ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById(options.wrapperID) });
		ObjectGUI.setTemplate(options.templateElement);
		ObjectGUI.addContent({'#NAME_FORM#':'Форма N'+i,'#DATE_OF_CREATON#':'10-го апреля'});
	}



//		this.addContent(options.template,{
//			'#CONTENT#':'замена','#name#': 'привет',
//		});

	}
}