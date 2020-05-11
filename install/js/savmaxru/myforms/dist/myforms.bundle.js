(function (exports,savmaxru_objectgui,savmaxru_objectsgallery,savmaxru_menuitemform,main_core) {
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
	    var gallery = new savmaxru_objectsgallery.ObjectsGallery(configGallery);
	    _this.gallery = gallery;

	    _this.includeInNode("myforms-wrapper", _this.gallery.getHTMLObject());

	    var ooo = new savmaxru_menuitemform.MenuItemForm();
	    ooo.setName('name');
	    ooo.setNumberOfResults('Нет ответов');
	    gallery.push(ooo);
	    ooo.dateOfChange('10 апреля');
	    return _this;
	  }

	  return MyForms;
	}(savmaxru_objectgui.ObjectGUI);

	exports.MyForms = MyForms;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,Savmaxru,Savmaxru,BX));
//# sourceMappingURL=myforms.bundle.js.map
