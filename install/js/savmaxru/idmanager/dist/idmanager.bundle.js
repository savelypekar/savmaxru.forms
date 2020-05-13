(function (exports) {
	'use strict';

	var IDManager = /*#__PURE__*/function () {
	  function IDManager(namespaceForID, currentID) {
	    babelHelpers.classCallCheck(this, IDManager);
	    this.namespaceForID = namespaceForID;

	    if (currentID !== undefined) {
	      this.setId(currentID);
	    } else {
	      this.setId(0);
	    }
	  }

	  babelHelpers.createClass(IDManager, [{
	    key: "setId",
	    value: function setId(id) {
	      this.currentID = id;
	    }
	  }, {
	    key: "getNextHighestId",
	    value: function getNextHighestId() {
	      var separator = '_';

	      if (this.namespaceForID === "") {
	        separator = "";
	      }

	      return this.namespaceForID + separator + this.currentID++;
	    }
	  }]);
	  return IDManager;
	}();

	exports.IDManager = IDManager;

}((this.Savmaxru = this.Savmaxru || {})));
//# sourceMappingURL=idmanager.bundle.js.map
