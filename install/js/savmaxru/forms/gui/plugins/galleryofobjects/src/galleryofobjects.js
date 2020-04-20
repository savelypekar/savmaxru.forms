import {Type} from 'main.core';

import {ObjectGUI} from 'savmaxru.forms.gui.objectgui';

export class GalleryOfObjects
{
	constructor(options = {
		templateElement:'',
		wrapperID: undefined,
	})
	{

	//for(let i=0; i<7; i++){
	//	let ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById(options.wrapperID) });
	//	ObjectGUI.setTemplate(options.templateElement);
	//	ObjectGUI.addContent({'#NAME_FORM#':'Форма N'+i,'#DATE_OF_CREATON#':'10-го апреля'});
	//}
		//ObjectGUI.swapWithAnObject(options.templateElement);

		let ObjectGUI0 = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById(options.wrapperID) });
		ObjectGUI0.setTemplate(options.templateElement);
		ObjectGUI0.addContent({'#NAME_FORM#':'Форма N0','#DATE_OF_CREATON#':'10-го апреля'});

		let ObjectGUI1 = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById(options.wrapperID) });
		ObjectGUI1.setTemplate(options.templateElement);
		ObjectGUI1.addContent({'#NAME_FORM#':'Форма N1','#DATE_OF_CREATON#':'10-го апреля'});

		let ObjectGUI2 = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById(options.wrapperID) });
		ObjectGUI2.setTemplate(options.templateElement);
		ObjectGUI2.addContent({'#NAME_FORM#':'Форма N2','#DATE_OF_CREATON#':'10-го апреля'});

		ObjectGUI0.swapWithAnObject(ObjectGUI2);

		//	ObjectGUI.addContent({'#NAME_FORM#':'Форма N'+i,'#DATE_OF_CREATON#':'10-го апреля'});

//		this.addContent(options.template,{
//			'#CONTENT#':'замена','#name#': 'привет',
//		});

	}
}