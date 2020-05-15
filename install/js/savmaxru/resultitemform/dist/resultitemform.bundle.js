(function (exports,main_core,savmaxru_objectgui) {
	'use strict';

	function _templateObject4() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span>", "</span>"]);

	  _templateObject4 = function _templateObject4() {
	    return data;
	  };

	  return data;
	}

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
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"object-gui\">\n\t\t\t\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ResultItemForm = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(ResultItemForm, _ObjectGUI);

	  function ResultItemForm(parent) {
	    var _this2;

	    babelHelpers.classCallCheck(this, ResultItemForm);
	    _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ResultItemForm).call(this));

	    _this2.setRootNode(main_core.Tag.render(_templateObject(), _this2.addNode("name"), _this2.addNode("user-name"), _this2.addNode("date-of-change")));

	    var _this = babelHelpers.assertThisInitialized(_this2);

	    _this2.getHTMLObject().onclick = function () {
	      parent.openResultWindow(_this.getID());
	    };

	    return _this2;
	  }

	  babelHelpers.createClass(ResultItemForm, [{
	    key: "setID",
	    value: function setID(ID) {
	      this.ID = ID;
	    }
	  }, {
	    key: "getID",
	    value: function getID() {
	      return this.ID;
	    }
	  }, {
	    key: "setName",
	    value: function setName(name) {
	      this.includeInNode("name", main_core.Tag.render(_templateObject2(), name));
	    }
	  }, {
	    key: "setDate",
	    value: function setDate(value) {
	      this.includeInNode("date-of-change", main_core.Tag.render(_templateObject3(), value));
	    }
	  }, {
	    key: "setUserName",
	    value: function setUserName(name) {
	      this.includeInNode("user-name", main_core.Tag.render(_templateObject4(), name));
	    }
	  }]);
	  return ResultItemForm;
	}(savmaxru_objectgui.ObjectGUI);

	exports.ResultItemForm = ResultItemForm;

}((this.Savmaxru = this.Savmaxru || {}),BX,Savmaxru));
//# sourceMappingURL=resultitemform.bundle.js.map
