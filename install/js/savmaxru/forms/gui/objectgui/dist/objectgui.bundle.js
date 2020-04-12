(function (exports,main_core) {
	'use strict';

	var Objectgui = /*#__PURE__*/function () {
	  function Objectgui() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      name: 'Objectgui'
	    };
	    babelHelpers.classCallCheck(this, Objectgui);
	    this.name = options.name;
	  }

	  babelHelpers.createClass(Objectgui, [{
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
	  return Objectgui;
	}();

	exports.Objectgui = Objectgui;

}((this.Savmaxru = this.Savmaxru || {}),BX));
//# sourceMappingURL=objectgui.bundle.js.map
