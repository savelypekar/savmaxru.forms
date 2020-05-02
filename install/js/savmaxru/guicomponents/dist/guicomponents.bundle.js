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
	      if (options !== undefined) {
	        for (var i = 0; i < options.length; i++) {
	          this.addOption(options[i]);
	        }
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
	      if (description !== undefined) {
	        this.includeInNode("description", description);
	      }
	    }
	  }, {
	    key: "setComment",
	    value: function setComment(comment) {
	      if (comment !== undefined) {
	        this.includeInNode("comment", comment);
	      }
	    }
	  }, {
	    key: "setFieldAsRequired",
	    value: function setFieldAsRequired() {
	      this.includeInNode("mark", '*');
	    }
	  }, {
	    key: "getResult",
	    value: function getResult() {}
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

	function _templateObject$2() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject$2 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ElectiveItemsList = /*#__PURE__*/function (_GUIComponent) {
	  babelHelpers.inherits(ElectiveItemsList, _GUIComponent);

	  function ElectiveItemsList() {
	    var _this;

	    babelHelpers.classCallCheck(this, ElectiveItemsList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ElectiveItemsList).call(this));

	    _this.setComponent(main_core.Tag.render(_templateObject$2(), _this.addNode("electiveitemslist")));

	    return _this;
	  }

	  babelHelpers.createClass(ElectiveItemsList, [{
	    key: "getResult",
	    value: function getResult() {
	      var result = [];
	      var items = this.getAllElementsOfTheNode('electiveitemslist');

	      for (var i = 0; i < items.length; i++) {
	        var item = items[i];
	        var itemInfo = [];
	        itemInfo[item.children[1].innerHTML] = item.children[0].checked;
	        result.push(itemInfo);
	      }

	      return result;
	    }
	  }]);
	  return ElectiveItemsList;
	}(GUIComponent);

	function _templateObject$3() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"checkbox-item\">\n\t\t\t<input type=\"checkbox\" id=\"", "\" />\n\t\t\t<label class=\"checkbox-label\" for=\"", "\">", "</label>\n\t\t</div>"]);

	  _templateObject$3 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var CheckboxList = /*#__PURE__*/function (_ElectiveItemsList) {
	  babelHelpers.inherits(CheckboxList, _ElectiveItemsList);

	  function CheckboxList() {
	    babelHelpers.classCallCheck(this, CheckboxList);
	    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CheckboxList).apply(this, arguments));
	  }

	  babelHelpers.createClass(CheckboxList, [{
	    key: "addOption",
	    value: function addOption(option) {
	      var newItemID = this.getNextHighestId();
	      this.includeInNode("electiveitemslist", main_core.Tag.render(_templateObject$3(), newItemID, newItemID, option));
	    }
	  }]);
	  return CheckboxList;
	}(ElectiveItemsList);

	function _templateObject$4() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"radiobutton-item\">\n\t\t\t<input type=\"radio\" id=\"", "\" name=\"", "\">\n  \t\t\t<label class=\"radiobutton-label\" for=\"", "\">", "</label>\n\t\t</div>"]);

	  _templateObject$4 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var RadiobuttonList = /*#__PURE__*/function (_ElectiveItemsList) {
	  babelHelpers.inherits(RadiobuttonList, _ElectiveItemsList);

	  function RadiobuttonList() {
	    babelHelpers.classCallCheck(this, RadiobuttonList);
	    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(RadiobuttonList).apply(this, arguments));
	  }

	  babelHelpers.createClass(RadiobuttonList, [{
	    key: "addOption",
	    value: function addOption(option) {
	      if (this.listName === undefined) {
	        this.listName = this.getNextHighestId();
	      }

	      var newItemID = this.getNextHighestId();
	      this.includeInNode("electiveitemslist", main_core.Tag.render(_templateObject$4(), newItemID, this.listName, newItemID, option));
	    }
	  }]);
	  return RadiobuttonList;
	}(ElectiveItemsList);

	function _templateObject2$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span>", "</span>"]);

	  _templateObject2$1 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$5() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject$5 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Button = /*#__PURE__*/function (_GUIComponent) {
	  babelHelpers.inherits(Button, _GUIComponent);

	  function Button() {
	    var _this2;

	    babelHelpers.classCallCheck(this, Button);
	    _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Button).call(this));

	    _this2.setComponent(main_core.Tag.render(_templateObject$5(), _this2.addNode("button")));

	    return _this2;
	  }

	  babelHelpers.createClass(Button, [{
	    key: "addOption",
	    value: function addOption(option) {
	      this.includeInNode("button", main_core.Tag.render(_templateObject2$1(), option));
	    }
	  }, {
	    key: "onDown",
	    value: function onDown(_function) {
	      this._function = _function;
	      var htmlObject = this.getHTMLObject();
	      htmlObject.dataStructure = this;
	      this._function = _function;

	      this.getHTMLObject().onclick = function (_this) {
	        htmlObject.dataStructure._function();
	      };
	    }
	  }]);
	  return Button;
	}(GUIComponent);

	function _templateObject2$2() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"heading-item\">", "</div>"]);

	  _templateObject2$2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$6() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject$6 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Heading = /*#__PURE__*/function (_GUIComponent) {
	  babelHelpers.inherits(Heading, _GUIComponent);

	  function Heading() {
	    var _this;

	    babelHelpers.classCallCheck(this, Heading);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Heading).call(this));

	    _this.setComponent(main_core.Tag.render(_templateObject$6(), _this.addNode("heading")));

	    return _this;
	  }

	  babelHelpers.createClass(Heading, [{
	    key: "addOption",
	    value: function addOption(option) {
	      this.includeInNode("heading", main_core.Tag.render(_templateObject2$2(), option));
	    }
	  }]);
	  return Heading;
	}(GUIComponent);

	function _templateObject$7() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject$7 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var TextBox = /*#__PURE__*/function (_GUIComponent) {
	  babelHelpers.inherits(TextBox, _GUIComponent);

	  function TextBox() {
	    var _this;

	    babelHelpers.classCallCheck(this, TextBox);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TextBox).call(this));

	    _this.setComponent(main_core.Tag.render(_templateObject$7(), _this.addNode("textbox")));

	    return _this;
	  }

	  babelHelpers.createClass(TextBox, [{
	    key: "getResult",
	    value: function getResult() {
	      var result = [];
	      var items = this.getAllElementsOfTheNode('textbox');

	      for (var i = 0; i < items.length; i++) {
	        var item = items[i];
	        var itemInfo = [];
	        itemInfo["Value" + i] = item.value;
	        result.push(itemInfo);
	      }

	      return result;
	    }
	  }]);
	  return TextBox;
	}(GUIComponent);

	function _templateObject$8() {
	  var data = babelHelpers.taggedTemplateLiteral(["<input class=\"textbox-singleline\" type=\"text\">"]);

	  _templateObject$8 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Singlelinetextbox = /*#__PURE__*/function (_TextBox) {
	  babelHelpers.inherits(Singlelinetextbox, _TextBox);

	  function Singlelinetextbox() {
	    var _this;

	    babelHelpers.classCallCheck(this, Singlelinetextbox);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Singlelinetextbox).call(this));

	    _this.includeInNode("textbox", main_core.Tag.render(_templateObject$8()));

	    return _this;
	  }

	  return Singlelinetextbox;
	}(TextBox);

	function _templateObject$9() {
	  var data = babelHelpers.taggedTemplateLiteral(["<textarea class=\"textbox-singleline\"></textarea>"]);

	  _templateObject$9 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var MultiLineTextBox = /*#__PURE__*/function (_TextBox) {
	  babelHelpers.inherits(MultiLineTextBox, _TextBox);

	  function MultiLineTextBox() {
	    var _this;

	    babelHelpers.classCallCheck(this, MultiLineTextBox);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MultiLineTextBox).call(this));

	    _this.includeInNode("textbox", main_core.Tag.render(_templateObject$9()));

	    return _this;
	  }

	  return MultiLineTextBox;
	}(TextBox);

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
	  "CheckboxList": CheckboxList,
	  "Button": Button,
	  "RadiobuttonList": RadiobuttonList,
	  "Heading": Heading,
	  "SingleLineTextBox": Singlelinetextbox,
	  "MultiLineTextBox": MultiLineTextBox
	});

	exports.GUIComponents = GUIComponents;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX));
//# sourceMappingURL=guicomponents.bundle.js.map
