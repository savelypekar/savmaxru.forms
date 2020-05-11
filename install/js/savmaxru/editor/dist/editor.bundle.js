this.BX = this.BX || {};
(function (exports,main_core) {
	'use strict';

	var Editor = /*#__PURE__*/function () {
	  function Editor() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      name: 'Editor'
	    };
	    babelHelpers.classCallCheck(this, Editor);
	    this.name = options.name;
	  }

	  babelHelpers.createClass(Editor, [{
	    key: "setName",
	    value: function setName(name) {
	      if (main_core.Type.isString(name)) {
	        this.name = name;
	      }
	    }
	  }, {
	    key: "getName",
	    value: function getName() {
	      return this.name;
	    }
	  }]);
	  return Editor;
	}();

	exports.Editor = Editor;

}((this.BX.Savmaxru = this.BX.Savmaxru || {}),BX));
//# sourceMappingURL=editor.bundle.js.map
