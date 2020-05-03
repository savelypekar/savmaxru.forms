(function (exports,main_core,savmaxru_objectgui,savmaxru_plugins,savmaxru_guicomponents) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ViewForm = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(ViewForm, _Savmaxru$ObjectGUI);

	  function ViewForm() {
	    var _this;

	    babelHelpers.classCallCheck(this, ViewForm);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ViewForm).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("viewform-wrapper")));

	    var configGallery = {
	      "galleryClassCSS": "viewform-gallery",
	      "objectsFactory": Savmaxru.GUIComponents
	    };
	    var gallery = Savmaxru.Plugins.attachPlugin("ObjectsGallery", configGallery);
	    _this.gallery = gallery;

	    _this.includeInNode("viewform-wrapper", _this.gallery.getHTMLObject());

	    gallery.createFactoryObject("DropDownList"); //this.gallery.loadGroupObject();

	    return _this;
	  }

	  return ViewForm;
	}(Savmaxru.ObjectGUI);

	exports.ViewForm = ViewForm;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX,BX,BX));
//# sourceMappingURL=viewform.bundle.js.map
