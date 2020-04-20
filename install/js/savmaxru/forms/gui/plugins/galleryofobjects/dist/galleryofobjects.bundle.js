this.Savmaxru = this.Savmaxru || {};
this.Savmaxru.Forms = this.Savmaxru.Forms || {};
this.Savmaxru.Forms.GUI = this.Savmaxru.Forms.GUI || {};
(function (exports,main_core,savmaxru_forms_gui_objectgui) {
	'use strict';

	var GalleryOfObjects = function GalleryOfObjects() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    templateElement: '',
	    wrapperID: undefined
	  };
	  babelHelpers.classCallCheck(this, GalleryOfObjects);
	  //for(let i=0; i<7; i++){
	  //	let ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({ parentHTMLObject: document.getElementById(options.wrapperID) });
	  //	ObjectGUI.setTemplate(options.templateElement);
	  //	ObjectGUI.addContent({'#NAME_FORM#':'Форма N'+i,'#DATE_OF_CREATON#':'10-го апреля'});
	  //}
	  //ObjectGUI.swapWithAnObject(options.templateElement);
	  var ObjectGUI0 = new Savmaxru.Forms.GUI.ObjectGUI({
	    parentHTMLObject: document.getElementById(options.wrapperID)
	  });
	  ObjectGUI0.setTemplate(options.templateElement);
	  ObjectGUI0.addContent({
	    '#NAME_FORM#': 'Форма N0',
	    '#DATE_OF_CREATON#': '10-го апреля'
	  });
	  var ObjectGUI1 = new Savmaxru.Forms.GUI.ObjectGUI({
	    parentHTMLObject: document.getElementById(options.wrapperID)
	  });
	  ObjectGUI1.setTemplate(options.templateElement);
	  ObjectGUI1.addContent({
	    '#NAME_FORM#': 'Форма N1',
	    '#DATE_OF_CREATON#': '10-го апреля'
	  });
	  var ObjectGUI2 = new Savmaxru.Forms.GUI.ObjectGUI({
	    parentHTMLObject: document.getElementById(options.wrapperID)
	  });
	  ObjectGUI2.setTemplate(options.templateElement);
	  ObjectGUI2.addContent({
	    '#NAME_FORM#': 'Форма N2',
	    '#DATE_OF_CREATON#': '10-го апреля'
	  });
	  ObjectGUI0.swapWithAnObject(ObjectGUI2); //	ObjectGUI.addContent({'#NAME_FORM#':'Форма N'+i,'#DATE_OF_CREATON#':'10-го апреля'});
	  //		this.addContent(options.template,{
	  //			'#CONTENT#':'замена','#name#': 'привет',
	  //		});
	};

	exports.GalleryOfObjects = GalleryOfObjects;

}((this.Savmaxru.Forms.GUI.Plugins = this.Savmaxru.Forms.GUI.Plugins || {}),BX,BX));
//# sourceMappingURL=galleryofobjects.bundle.js.map
