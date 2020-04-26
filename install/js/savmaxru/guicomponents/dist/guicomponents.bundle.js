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

	  function GUIComponent(description, comment) {
	    var _this;

	    babelHelpers.classCallCheck(this, GUIComponent);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GUIComponent).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("mark"), _this.addNode("description"), _this.addNode("component"), _this.addNode("comment")));

	    return _this;
	  }

	  babelHelpers.createClass(GUIComponent, [{
	    key: "getNextHighestId",
	    value: function getNextHighestId() {
	      return this.IDManager.getNextHighestId();
	    }
	  }, {
	    key: "build",
	    value: function build(data) {
	      this.IDManager = data['IDManager'];
	      this.setDescription(data['description']);
	      this.setComment(data['comment']);
	      this.addOptions(data['options']);

	      if (data['required']) {
	        this.setFieldAsRequired();
	      }
	    }
	  }, {
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
	    key: "setFieldAsRequired",
	    value: function setFieldAsRequired() {
	      this.includeInNode("mark", '*');
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

	    babelHelpers.classCallCheck(this, DropDownList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DropDownList).call(this));

	    _this.setComponent(main_core.Tag.render(_templateObject$1(), _this.addNode("select", 'select')));

	    _this.addOption('--');

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

	function _templateObject2$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"checkbox-item\">\n\t\t\t<input type=\"checkbox\" id=\"", "\" />\n\t\t\t<label for=\"", "\">", "</label>\n\t\t</div>"]);

	  _templateObject2$1 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$2() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject$2 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var CheckboxList = /*#__PURE__*/function (_GUIComponent) {
	  babelHelpers.inherits(CheckboxList, _GUIComponent);

	  function CheckboxList() {
	    var _this;

	    babelHelpers.classCallCheck(this, CheckboxList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CheckboxList).call(this));

	    _this.setComponent(main_core.Tag.render(_templateObject$2(), _this.addNode("checkboxes")));

	    return _this;
	  }

	  babelHelpers.createClass(CheckboxList, [{
	    key: "addOption",
	    value: function addOption(option) {
	      var newItemID = this.getNextHighestId();
	      this.includeInNode("checkboxes", main_core.Tag.render(_templateObject2$1(), newItemID, newItemID, option));
	    }
	  }]);
	  return CheckboxList;
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
	  "DropDownList": DropDownList,
	  "CheckboxList": CheckboxList
	});

	exports.GUIComponents = GUIComponents;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX));
//# sourceMappingURL=guicomponents.bundle.js.map
