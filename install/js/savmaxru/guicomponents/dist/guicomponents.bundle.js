(function (exports,savmaxru_objectgui,savmaxru_propertychangemanager,main_core) {
	'use strict';

	var Option = /*#__PURE__*/function () {
	  function Option(data) {
	    babelHelpers.classCallCheck(this, Option);
	    savmaxru_propertychangemanager.PropertyChangeManager.connectObject(this);
	    this.addProperty('value', data['value']);
	    this.addProperty('ID', data['ID']);
	    this.addProperty('index', data['index']);
	  }

	  babelHelpers.createClass(Option, [{
	    key: "setObjectHTML",
	    value: function setObjectHTML(object) {
	      this.object = object;
	    }
	  }, {
	    key: "getObjectHTML",
	    value: function getObjectHTML() {
	      return this.object;
	    }
	  }, {
	    key: "setIndex",
	    value: function setIndex(index) {
	      this.index = index;
	    }
	  }, {
	    key: "getStructure",
	    value: function getStructure() {
	      var result = this.getProperties();
	      return result;
	    }
	  }]);
	  return Option;
	}();

	function _templateObject3() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class='remove'></div>"]);

	  _templateObject3 = function _templateObject3() {
	    return data;
	  };

	  return data;
	}

	function _templateObject2() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class='settings'></div>"]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"object-gui\">\n\t\t\t\t<div class=\"field-mark\">\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-description\">\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-comment\">\n\t\t\t\t\t", "\n\t\t\t\t</div>\n\t\t\t\t\t", "\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var GUIComponent = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(GUIComponent, _ObjectGUI);

	  function GUIComponent() {
	    var _this;

	    babelHelpers.classCallCheck(this, GUIComponent);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GUIComponent).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "options", []);

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("mark"), _this.addNode("description"), _this.addNode("component"), _this.addNode("comment"), _this.addNode("edit-panel")));

	    savmaxru_propertychangemanager.PropertyChangeManager.connectObject(babelHelpers.assertThisInitialized(_this));
	    return _this;
	  }

	  babelHelpers.createClass(GUIComponent, [{
	    key: "getStructure",
	    value: function getStructure() {
	      var result = this.getProperties();
	      result["options"] = [];
	      var options = this.getOptions();

	      for (var i = 0; i < options.length; i++) {
	        var option = options[i];
	        result["options"].push(option.getStructure());
	      }

	      return result;
	    }
	  }, {
	    key: "addEditButton",
	    value: function addEditButton() {
	      var object = main_core.Tag.render(_templateObject2());
	      var editObject = this;

	      object.onclick = function () {
	        editObject.getParent().editComponent(editObject);
	      };

	      return object;
	    }
	  }, {
	    key: "addRemoveButton",
	    value: function addRemoveButton() {
	      var object = main_core.Tag.render(_templateObject3());
	      return object;
	    }
	  }, {
	    key: "enableEditMode",
	    value: function enableEditMode() {
	      var modes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	        "settings": true,
	        "remove": true
	      };

	      if (modes["settings"]) {
	        this.includeInNode("edit-panel", this.addEditButton());
	      }
	    }
	  }, {
	    key: "getChanges",
	    value: function getChanges() {
	      var result = this.getChangedProperties();
	      result["ID"] = this.getProperty("ID");
	      return result;
	    }
	  }, {
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
	      this.addProperty('ID', data['ID']);
	      this.addProperty('index', data['index']);
	      this.addProperty('type', data['type']);

	      if (data['required']) {
	        this.setFieldAsRequired();
	      }
	    }
	  }, {
	    key: "getOptions",
	    value: function getOptions() {
	      return this.options;
	    }
	  }, {
	    key: "addOptions",
	    value: function addOptions(options) {
	      if (options !== undefined) {
	        for (var i = 0; i < options.length; i++) {
	          var option = new Option(options[i]);
	          option.setObjectHTML(this.addOption(option.getProperty("value")));
	          this.options.push(option);
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
	    value: function getResult() {
	      var options = this.getOptions();
	      var result = [];
	      result["ID"] = this.getProperty("ID");
	      result["index"] = this.getProperty("index");
	      result["options"] = [];

	      for (var i = 0; i < options.length; i++) {
	        var option = options[i];

	        if (option.getObjectHTML().getCondition()) {
	          result["options"].push(option.getProperty("ID"));
	        }
	      }

	      return result;
	    }
	  }]);
	  return GUIComponent;
	}(savmaxru_objectgui.ObjectGUI);

	function _templateObject2$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["<option>", "</option>"]);

	  _templateObject2$1 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

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

	    _this.setComponent(main_core.Tag.render(_templateObject$1(), _this.addNode("dropdownlist", 'select')));

	    _this.addOption('--');

	    return _this;
	  }

	  babelHelpers.createClass(DropDownList, [{
	    key: "addOption",
	    value: function addOption(option) {
	      var objectHTML = main_core.Tag.render(_templateObject2$1(), option);

	      objectHTML.getCondition = function () {
	        return this.selected;
	      };

	      this.includeInNode("dropdownlist", objectHTML);
	      return objectHTML;
	    } //getSelected

	    /*getResult()
	    {
	    	let resultComponent = [];
	    	let options = this.getOptions();
	    		//this.getNode("dropdownlist").options;
	    		for(let i=0; i < options.length; i++)
	    	{
	    		let option = options[i];
	    		let optionHTML = option.getObjectHTML();
	    		//if(optionHTML.selected)//
	    		let result = [];
	    			result["index"] = option.getID();
	    		result["index"] = option.getIndex();
	    		result["value"] = optionHTML.selected;
	    			resultComponent.push(result);
	    	}
	    	return resultComponent;
	    }*/

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

	  return ElectiveItemsList;
	}(GUIComponent);

	function _templateObject$3() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"checkbox-item\">\n\t\t\t<input type=\"checkbox\" value=\"", "\" id=\"", "\" />\n\t\t\t<label class=\"checkbox-label\" for=\"", "\">", "</label>\n\t\t</div>"]);

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
	    value: function addOption(option, index) {
	      var newItemID = this.getNextHighestId();
	      var objectHTML = main_core.Tag.render(_templateObject$3(), index, newItemID, newItemID, option);

	      objectHTML.getCondition = function () {
	        return this.children[0].checked;
	      };

	      this.includeInNode("electiveitemslist", objectHTML);
	      return objectHTML;
	    }
	  }]);
	  return CheckboxList;
	}(ElectiveItemsList);

	function _templateObject$4() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"radiobutton-item\">\n\t\t\t<input type=\"radio\" value=\"", "\" id=\"", "\" name=\"", "\">\n  \t\t\t<label class=\"radiobutton-label\" for=\"", "\">", "</label>\n\t\t</div>"]);

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
	    value: function addOption(option, index) {
	      if (this.listName === undefined) {
	        this.listName = this.getNextHighestId();
	      }

	      var newItemID = this.getNextHighestId();
	      var objectHTML = main_core.Tag.render(_templateObject$4(), index, newItemID, this.listName, newItemID, option);

	      objectHTML.getCondition = function () {
	        return this.children[0].checked;
	      };

	      this.includeInNode("electiveitemslist", objectHTML);
	      return objectHTML;
	    }
	  }]);
	  return RadiobuttonList;
	}(ElectiveItemsList);

	function _templateObject2$2() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span>", "</span>"]);

	  _templateObject2$2 = function _templateObject2() {
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
	      this.includeInNode("button", main_core.Tag.render(_templateObject2$2(), option));
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
	  }, {
	    key: "getResult",
	    value: function getResult() {
	      return false;
	    }
	  }]);
	  return Button;
	}(GUIComponent);

	function _templateObject2$3() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"heading-item\">", "</div>"]);

	  _templateObject2$3 = function _templateObject2() {
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
	      this.includeInNode("heading", main_core.Tag.render(_templateObject2$3(), option));
	    }
	  }, {
	    key: "getResult",
	    value: function getResult() {
	      return false;
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
	      result["ID"] = this.getID();
	      result["index"] = this.getIndex();
	      result["options"] = [];
	      var items = this.getAllElementsOfTheNode('textbox');
	      var item = items[0];
	      result["options"]["userValue"] = item.value;
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
	  }, {
	    key: "attach",
	    value: function attach(name) {
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

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,Savmaxru,BX));
//# sourceMappingURL=guicomponents.bundle.js.map
