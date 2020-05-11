(function (exports,main_core) {
	'use strict';

	var ObjectGUI = /*#__PURE__*/function () {
	  babelHelpers.createClass(ObjectGUI, [{
	    key: "includeInNode",
	    value: function includeInNode(name, value) {
	      this.nodes[name].append(value);
	    }
	  }, {
	    key: "getAllElementsOfTheNode",
	    value: function getAllElementsOfTheNode(name) {
	      var node = this.nodes[name];
	      var elements = [];

	      for (var i = 0; i < node.childNodes.length; i++) {
	        elements.push(node.childNodes[i]);
	      }

	      return elements;
	    }
	  }, {
	    key: "getNode",
	    value: function getNode(name) {
	      return this.nodes[name];
	    }
	  }, {
	    key: "addNode",
	    value: function addNode(name) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
	      var node = this.createNode(type);
	      node.parent = this;
	      this.nodes[name] = node;
	      node.className = name;
	      return node;
	    }
	  }, {
	    key: "getRootNode",
	    value: function getRootNode() {
	      return this.node;
	    }
	  }, {
	    key: "setParent",
	    value: function setParent(parent) {
	      this.parent = parent;
	    }
	  }, {
	    key: "getParent",
	    value: function getParent() {
	      return this.parent;
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
	    this.wrapper = this.createNode('div');
	    this.wrapper.className = "object-wrapper";
	  }

	  babelHelpers.createClass(ObjectGUI, [{
	    key: "hideAnimHTMLObject",
	    value: function hideAnimHTMLObject() {
	      this.wrapper.style.height = this.wrapper.offsetHeight + 'px';
	      this.wrapper.style.transition = '0.3s';
	      var object = this;
	      setTimeout(function () {
	        object.wrapper.style.height = '0';
	        object.wrapper.style.opacity = '0';
	        setTimeout(function () {
	          object.removeHTMLObject();
	        }, 300);
	      }, 1);
	    }
	  }, {
	    key: "removeHTMLObject",
	    value: function removeHTMLObject() {
	      this.wrapper.remove();
	    }
	  }]);
	  return ObjectGUI;
	}();

	exports.ObjectGUI = ObjectGUI;

}((this.Savmaxru = this.Savmaxru || {}),BX));
//# sourceMappingURL=objectgui.bundle.js.map
