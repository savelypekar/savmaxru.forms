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

	  for (var i = 0; i < 7; i++) {
	    var _ObjectGUI = new Savmaxru.Forms.GUI.ObjectGUI({
	      parentHTMLObject: document.getElementById(options.wrapperID)
	    });

	    _ObjectGUI.setTemplate(options.templateElement);

	    _ObjectGUI.addContent({
	      '#NAME_FORM#': 'Форма N' + i,
	      '#DATE_OF_CREATON#': '10-го апреля'
	    });
	  } //		this.addContent(options.template,{
	  //			'#CONTENT#':'замена','#name#': 'привет',
	  //		});

	};

	exports.GalleryOfObjects = GalleryOfObjects;

}((this.Savmaxru.Forms.GUI.Plugins = this.Savmaxru.Forms.GUI.Plugins || {}),BX,BX));
//# sourceMappingURL=galleryofobjects.bundle.js.map
