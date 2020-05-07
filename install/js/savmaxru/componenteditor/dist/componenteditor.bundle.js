(function (exports,savmaxru_modalwindow,main_core,savmaxru_objectgui) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"", "\"></div>\n\t\t\t\t<span>", "</span>\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var TypeButton = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(TypeButton, _ObjectGUI);

	  function TypeButton(type, parent) {
	    var _this2;

	    babelHelpers.classCallCheck(this, TypeButton);
	    _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TypeButton).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this2), "typesDescription", {
	      "DropDownList": "DROPDOWN_LIST",
	      "CheckboxList": "CHECKBOX_LIST",
	      "RadiobuttonList": "RADIOBUTTON_LIST",
	      "Heading": "HEADING",
	      "SingleLineTextBox": "SINGLELINE_TEXTBOX",
	      "MultiLineTextBox": "MULTILINE_TEXTBOX"
	    });
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this2), "typesIcon", {
	      "DropDownList": "dropdownlist-ico",
	      "CheckboxList": "checkboxlist-ico",
	      "RadiobuttonList": "radiobuttonlist-ico",
	      "Heading": "heading-ico",
	      "SingleLineTextBox": "singlelinetextbox-ico",
	      "MultiLineTextBox": "multilinetextbox-ico"
	    });

	    _this2.setRootNode(main_core.Tag.render(_templateObject(), _this2.typesIcon[type], BX.message(_this2.typesDescription[type])));

	    _this2.getHTMLObject().onclick = function (_this) {
	      parent.addComponent(type);
	    };

	    return _this2;
	  }

	  return TypeButton;
	}(savmaxru_objectgui.ObjectGUI); //alert(BX.message("VENDOR_MODULENAME_COMPONENTNAME_BOOK_TITLE_1"));
	//alert(BX.message("UI_BUTTONS_SAVE_BTN_TEXT"));
	//alert(3);

	function _templateObject$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"components-selection\"></div>"]);

	  _templateObject$1 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ComponentEditor = /*#__PURE__*/function () {
	  function ComponentEditor(parent, galleryOfObjects) {
	    babelHelpers.classCallCheck(this, ComponentEditor);
	    babelHelpers.defineProperty(this, "types", ["DropDownList", "CheckboxList", "RadiobuttonList", "Heading", "SingleLineTextBox", "MultiLineTextBox"]);
	    this.parent = parent;
	    this.galleryOfObjects = galleryOfObjects;
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

	      for (var i = 0; i < this.types.length; i++) {
	        var button = new TypeButton(this.types[i], this);
	        selectingAComponent.append(button.getHTMLObject());
	      }

	      this.window.setContent(selectingAComponent);
	      this.selectingAComponentMenu = selectingAComponent;
	    }
	  }, {
	    key: "addComponent",
	    value: function addComponent(name) {
	      this.galleryOfObjects.createFactoryObject(name);
	      this.selectingAComponentMenu.remove();
	    }
	  }]);
	  return ComponentEditor;
	}();

	exports.ComponentEditor = ComponentEditor;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX,Savmaxru));
//# sourceMappingURL=componenteditor.bundle.js.map
