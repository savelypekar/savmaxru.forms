(function (exports,savmaxru_modalwindow,main_core,savmaxru_objectgui) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"checkboxlist-ico\"></div>\n\t\t\t\t<span>\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043E\u0442\u0432\u0435\u0442\u0430</span>\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var TypeButton = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(TypeButton, _Savmaxru$ObjectGUI);

	  function TypeButton() {
	    var _this;

	    babelHelpers.classCallCheck(this, TypeButton);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TypeButton).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject()));

	    alert(BX.message("VENDOR_MODULENAME_COMPONENTNAME_BOOK_TITLE_1"));
	    alert(BX.message("UI_BUTTONS_SAVE_BTN_TEXT"));
	    alert(3);
	    return _this;
	  }

	  return TypeButton;
	}(Savmaxru.ObjectGUI);

	function _templateObject$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"components-selection\"></div>"]);

	  _templateObject$1 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ComponentEditor = /*#__PURE__*/function () {
	  function ComponentEditor(parent) {
	    babelHelpers.classCallCheck(this, ComponentEditor);
	    this.parent = parent;
	  }

	  babelHelpers.createClass(ComponentEditor, [{
	    key: "openWindow",
	    value: function openWindow() {
	      this.window = new Savmaxru.ModalWindow();
	      this.parent.append(this.window.getHTMLObject());
	    }
	  }, {
	    key: "create",
	    value: function create() {
	      this.openWindow();
	      var selectingAComponent = main_core.Tag.render(_templateObject$1());
	      var button = new TypeButton();
	      selectingAComponent.append(button.getHTMLObject());
	      this.window.setContent(selectingAComponent);
	    }
	  }]);
	  return ComponentEditor;
	}();

	exports.ComponentEditor = ComponentEditor;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX,Savmaxru));
//# sourceMappingURL=componenteditor.bundle.js.map
