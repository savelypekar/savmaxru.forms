this.Savmaxru = this.Savmaxru || {};
this.Savmaxru.Forms = this.Savmaxru.Forms || {};
(function (exports,main_core) {
	'use strict';

	var ObjectGUI = /*#__PURE__*/function () {
	  babelHelpers.createClass(ObjectGUI, [{
	    key: "getHTMLObject",
	    value: function getHTMLObject(parent, content, className) {
	      var object = document.createElement('div');
	      object.className = className;
	      object.append(content);
	      parent.appendChild(object);
	      return object;
	    }
	  }]);

	  function ObjectGUI() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      parentID: 'body'
	    };
	    babelHelpers.classCallCheck(this, ObjectGUI);
	    var id;

	    if (options.IDManager != null) {
	      id = options.IDManager.getNextHighestId();
	    }

	    this.wrapper = this.getHTMLObject(document.getElementById(options.parentID), 'тестовый контент', 'savmaxru-object-wrapper');
	  }

	  babelHelpers.createClass(ObjectGUI, [{
	    key: "setContent",
	    value: function setContent(content) {
	      this.wrapper.append(content);
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      this.wrapper.remove();
	    }
	  }]);
	  return ObjectGUI;
	}();

	exports.ObjectGUI = ObjectGUI;

}((this.Savmaxru.Forms.GUI = this.Savmaxru.Forms.GUI || {}),BX));
//# sourceMappingURL=objectgui.bundle.js.map
