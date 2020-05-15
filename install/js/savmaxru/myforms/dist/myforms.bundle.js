(function (exports,savmaxru_objectgui,savmaxru_menuitemsformgallery,main_core,savmaxru_guicomponents) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var MyForms = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(MyForms, _ObjectGUI);

	  function MyForms() {
	    var _this;

	    babelHelpers.classCallCheck(this, MyForms);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MyForms).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("myforms-wrapper")));

	    var configGallery = {
	      "galleryClassCSS": "myforms-gallery"
	    };
	    var gallery = new savmaxru_menuitemsformgallery.MenuItemsFormGallery(configGallery);
	    var addButton = savmaxru_guicomponents.GUIComponents.attach("Button");
	    addButton.setStyle('plus-button');
	    gallery.push(addButton);
	    addButton.onDown(function () {
	      window.location = "edit/0";
	    });

	    _this.includeInNode("myforms-wrapper", gallery.getHTMLObject());

	    gallery.loadGroupObject();
	    return _this;
	  }

	  return MyForms;
	}(savmaxru_objectgui.ObjectGUI);

	exports.MyForms = MyForms;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX.Savmaxru,BX,Savmaxru));
//# sourceMappingURL=myforms.bundle.js.map
