(function (exports,main_core,savmaxru_objectgui) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"savmaxru-form-element-for-list\">\n\t\t\t<div class=\"savmaxru-forms-h5\">\n\t\t\t\t", "\n\t\t\t</div>\n\t\t\t<div class=\"savmaxru-forms-h4\">\n\t\t\t\t", "\n\t\t\t</div>\n\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var GalleryMenuItem = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(GalleryMenuItem, _Savmaxru$ObjectGUI);

	  function GalleryMenuItem() {
	    var _this;

	    babelHelpers.classCallCheck(this, GalleryMenuItem);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GalleryMenuItem).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("name"), _this.addNode("date")));

	    return _this;
	  }

	  babelHelpers.createClass(GalleryMenuItem, [{
	    key: "setDate",
	    value: function setDate(date) {
	      this.includeInNode("date", date);
	    }
	  }, {
	    key: "setName",
	    value: function setName(name) {
	      this.includeInNode("name", name);
	    }
	  }]);
	  return GalleryMenuItem;
	}(Savmaxru.ObjectGUI);

	var MyForms = function MyForms(parentContainer) {
	  babelHelpers.classCallCheck(this, MyForms);
	  var galleryMenuItem = new GalleryMenuItem();
	  parentContainer.append(galleryMenuItem.getHTMLObject());
	};

	exports.MyForms = MyForms;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX));
//# sourceMappingURL=myforms.bundle.js.map
