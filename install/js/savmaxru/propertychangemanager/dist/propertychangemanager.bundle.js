(function (exports,main_core) {
	'use strict';

	var PropertyChangeManager = /*#__PURE__*/function () {
	  function PropertyChangeManager() {
	    babelHelpers.classCallCheck(this, PropertyChangeManager);
	  }

	  babelHelpers.createClass(PropertyChangeManager, null, [{
	    key: "connectObject",
	    value: function connectObject(object) {
	      object.properties = [];
	      object.changes = [];

	      object.addProperty = function (name, value) {
	        this.properties[name] = value;
	      };

	      object.rewriteProperty = function (name, value) {
	        this.changes[name] = true;
	        this.properties[name] = value;

	        if (this.properties["change"] !== "changed" && this.properties["change"] !== "removed") {
	          this.rewriteProperty("change", "changed");
	        }
	      };

	      object.getProperty = function (name) {
	        return this.properties[name];
	      };

	      object.getChangedProperties = function () {
	        var result = [];

	        for (var name in this.changes) {
	          if (this.changes[name] === true) {
	            result[name] = this.properties[name];
	          }
	        }

	        return result;
	      };

	      object.getProperties = function () {
	        return this.properties;
	      };
	    }
	  }]);
	  return PropertyChangeManager;
	}();

	exports.PropertyChangeManager = PropertyChangeManager;

}((this.Savmaxru = this.Savmaxru || {}),BX));
//# sourceMappingURL=propertychangemanager.bundle.js.map
