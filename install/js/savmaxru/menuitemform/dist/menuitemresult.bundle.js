this.BX = this.BX || {};
(function (exports,main_core,savmaxru_objectgui) {
	'use strict';

	function _templateObject3() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span>", "</span>"]);

	  _templateObject3 = function _templateObject3() {
	    return data;
	  };

	  return data;
	}

	function _templateObject2() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span>", "</span>"]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"object-gui\">\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var MenuItemForm = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(MenuItemForm, _ObjectGUI);

	  function MenuItemForm() {
	    var _this;

	    babelHelpers.classCallCheck(this, MenuItemForm);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MenuItemForm).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("name"), _this.addNode("number-of-results"), _this.addNode("date-of-change")));

	    return _this;
	  }

	  babelHelpers.createClass(MenuItemForm, [{
	    key: "setID",
	    value: function setID(ID) {
	      this.ID = ID;
	    }
	  }, {
	    key: "setName",
	    value: function setName(name) {
	      this.includeInNode("name", main_core.Tag.render(_templateObject2(), name));
	    }
	  }, {
	    key: "setNumberOfResults",
	    value: function setNumberOfResults(value) {
	      this.includeInNode("number-of-results", main_core.Tag.render(_templateObject3(), value));
	    }
	  }]);
	  return MenuItemForm;
	}(savmaxru_objectgui.ObjectGUI);

	exports.MenuItemForm = MenuItemForm;

}((this.BX.Savmaxru = this.BX.Savmaxru || {}),BX,Savmaxru));
//# sourceMappingURL=menuitemresult.bundle.js.map
