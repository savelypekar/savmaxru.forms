this.BX = this.BX || {};
(function (exports,main_core) {
	'use strict';

	var Results = /*#__PURE__*/function () {
	  function Results() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      name: 'Results'
	    };
	    babelHelpers.classCallCheck(this, Results);
	    this.name = options.name;
	  }

	  babelHelpers.createClass(Results, [{
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
	  return Results;
	}();

	exports.Results = Results;

}((this.BX.Savmaxru = this.BX.Savmaxru || {}),BX));
//# sourceMappingURL=results.bundle.js.map
