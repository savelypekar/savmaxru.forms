this.Savmaxru = this.Savmaxru || {};
(function (exports) {
	'use strict';

	var ObjectsGallery = function ObjectsGallery() {
	  babelHelpers.classCallCheck(this, ObjectsGallery);
	  //let obj = new ObjectsGallery();
	  alert(1900);
	};

	var Plugins = /*#__PURE__*/function () {
	  function Plugins() {
	    babelHelpers.classCallCheck(this, Plugins);
	  }

	  babelHelpers.createClass(Plugins, null, [{
	    key: "attachPlugin",
	    value: function attachPlugin(name) {
	      return new this.pluginClasses[name]();
	    }
	  }]);
	  return Plugins;
	}();
	babelHelpers.defineProperty(Plugins, "pluginClasses", {
	  "ObjectsGallery": ObjectsGallery
	});

	exports.Plugins = Plugins;

}((this.Savmaxru.Plugins = this.Savmaxru.Plugins || {})));
//# sourceMappingURL=plugins.bundle.js.map
