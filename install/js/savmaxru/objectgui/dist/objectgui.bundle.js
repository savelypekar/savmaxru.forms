(function (exports,main_core) {
	'use strict';

	var ObjectGUI = /*#__PURE__*/function () {
	  babelHelpers.createClass(ObjectGUI, [{
	    key: "includeInNode",
	    value: function includeInNode(name, value) {
	      this.nodes[name].append(value);
	    }
	  }, {
	    key: "addNode",
	    value: function addNode(name) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
	      return this.nodes[name] = this.createNode(type);
	    }
	  }, {
	    key: "setRootNode",
	    value: function setRootNode(node) {
	      this.wrapper.append(node);
	      this.node = node;
	    }
	  }, {
	    key: "getHTMLObject",
	    value: function getHTMLObject() {
	      return this.wrapper;
	    }
	  }, {
	    key: "getWrapper",
	    value: function getWrapper() {
	      return this.wrapper;
	    }
	  }, {
	    key: "createNode",
	    value: function createNode(type) {
	      return document.createElement(type);
	    }
	  }]);

	  function ObjectGUI() {
	    babelHelpers.classCallCheck(this, ObjectGUI);
	    babelHelpers.defineProperty(this, "nodes", []);
	    this.wrapper = this.createNode();
	  }

	  return ObjectGUI;
	}();

	exports.ObjectGUI = ObjectGUI;

}((this.Savmaxru = this.Savmaxru || {}),BX));
//# sourceMappingURL=objectgui.bundle.js.map
