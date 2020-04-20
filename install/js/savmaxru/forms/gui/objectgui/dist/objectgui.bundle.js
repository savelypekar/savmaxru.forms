this.Savmaxru = this.Savmaxru || {};
this.Savmaxru.Forms = this.Savmaxru.Forms || {};
(function (exports,main_core) {
	'use strict';

	var ObjectGUI = /*#__PURE__*/function () {
	  babelHelpers.createClass(ObjectGUI, [{
	    key: "createWrapper",
	    value: function createWrapper(parent, content, className) {
	      var object = document.createElement('div');
	      object.className = className;
	      object.append(content);
	      parent.appendChild(object);
	      return object;
	    }
	  }, {
	    key: "createContentByTemplate",
	    value: function createContentByTemplate(template, placeholdersValues) {
	      var content = template;

	      for (var placeholder in placeholdersValues) {
	        content = content.replace(placeholder, placeholdersValues[placeholder]);
	      }

	      return content;
	    }
	  }]);

	  function ObjectGUI() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      parentID: 'body'
	    };
	    babelHelpers.classCallCheck(this, ObjectGUI);
	    this.wrapper = this.createWrapper(document.getElementById(options.parentID), 'тестовый контент', 'savmaxru-object-wrapper');
	  }

	  babelHelpers.createClass(ObjectGUI, [{
	    key: "setContent",
	    value: function setContent(template, placeholdersValues) {
	      this.wrapper.innerHTML = this.createContentByTemplate(template, placeholdersValues);
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
