(function (exports,savmaxru_objectgui,main_core) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"object-gui\">\n\t\t\t\t<div class=\"field-mark\">\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-description\">\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-comment\">\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var GUIComponent = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(GUIComponent, _Savmaxru$ObjectGUI);

	  function GUIComponent() {
	    var _this;

	    babelHelpers.classCallCheck(this, GUIComponent);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GUIComponent).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("mark"), _this.addNode("description"), _this.addNode("component"), _this.addNode("comment")));

	    return _this;
	  }

	  babelHelpers.createClass(GUIComponent, [{
	    key: "addOptions",
	    value: function addOptions(options) {
	      for (var i = 0; i < options.length; i++) {
	        this.addOption(options[i]);
	      }
	    }
	  }, {
	    key: "setComponent",
	    value: function setComponent(component) {
	      this.includeInNode("component", component);
	    }
	  }, {
	    key: "setDescription",
	    value: function setDescription(description) {
	      this.includeInNode("description", description);
	    }
	  }, {
	    key: "setComment",
	    value: function setComment(comment) {
	      this.includeInNode("comment", comment);
	    }
	  }, {
	    key: "setMark",
	    value: function setMark(mark) {
	      this.includeInNode("mark", mark);
	    }
	  }]);
	  return GUIComponent;
	}(Savmaxru.ObjectGUI);

	function _templateObject2() {
	  var data = babelHelpers.taggedTemplateLiteral(["<option>", "</option>"]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"dropdownlist\">\n\t\t\t\t", "\n\t\t\t</div>"]);

	  _templateObject$1 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var DropDownList = /*#__PURE__*/function (_GUIComponent) {
	  babelHelpers.inherits(DropDownList, _GUIComponent);

	  function DropDownList() {
	    var _this;

	    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Test';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['Russia', 'USA'];
	    var comment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'comment';
	    babelHelpers.classCallCheck(this, DropDownList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DropDownList).call(this));

	    _this.setComponent(main_core.Tag.render(_templateObject$1(), _this.addNode("select", 'select')));

	    _this.setDescription(description);

	    _this.setComment(comment);

	    _this.addOption('--');

	    _this.addOptions(options);

	    _this.setMark('*');

	    return _this;
	  }

	  babelHelpers.createClass(DropDownList, [{
	    key: "addOption",
	    value: function addOption(option) {
	      this.includeInNode("select", main_core.Tag.render(_templateObject2(), option));
	    }
	  }]);
	  return DropDownList;
	}(GUIComponent);

	var GUIComponents = /*#__PURE__*/function () {
	  function GUIComponents() {
	    babelHelpers.classCallCheck(this, GUIComponents);
	  }

	  babelHelpers.createClass(GUIComponents, null, [{
	    key: "attachComponent",
	    value: function attachComponent(name) {
	      return new this.componentClasses[name]();
	    }
	  }]);
	  return GUIComponents;
	}();
	babelHelpers.defineProperty(GUIComponents, "componentClasses", {
	  "DropDownList": DropDownList
	});

	exports.GUIComponents = GUIComponents;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX));
//# sourceMappingURL=guicomponents.bundle.js.map
