(function (exports,main_core) {
	'use strict';

	var IDManager = /*#__PURE__*/function () {
	  function IDManager() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      namespaceForID: 'root'
	    };
	    babelHelpers.classCallCheck(this, IDManager);
	    this.namespaceForID = options.namespaceForID;
	    this.setId(0);
	  }

	  babelHelpers.createClass(IDManager, [{
	    key: "setId",
	    value: function setId(id) {
	      this.currentID = id;
	    }
	  }, {
	    key: "getNextHighestId",
	    value: function getNextHighestId() {
	      return this.namespaceForID + '_' + this.currentID++;
	    }
	  }]);
	  return IDManager;
	}();

	exports.IDManager = IDManager;

}((this.Savmaxru = this.Savmaxru || {}),BX));
//# sourceMappingURL=idmanager.bundle.js.map
