(function (exports,savmaxru_objectgui,main_core) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ObjectsGallery = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(ObjectsGallery, _Savmaxru$ObjectGUI);

	  function ObjectsGallery() {
	    var _this;

	    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      "galleryClassCSS": "standard-gallery",
	      "objectClassCSS": "standard-object",
	      "objectsFactory": undefined
	    };
	    babelHelpers.classCallCheck(this, ObjectsGallery);
	    alert(config);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ObjectsGallery).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode(config["galleryClassCSS"])));

	    _this.objectsFactory = config["objectsFactory"];
	    return _this;
	  }

	  babelHelpers.createClass(ObjectsGallery, [{
	    key: "createFactoryObject",
	    value: function createFactoryObject(name) {
	      var object = this.objectsFactory.attach(name).getHTMLObject();
	      this.push(object);
	      return object;
	    }
	  }, {
	    key: "push",
	    value: function push(object) {
	      this.getRootNode().append(object);
	    }
	  }, {
	    key: "createObject",
	    value: function createObject() {}
	  }, {
	    key: "loadGroupObject",
	    value: function loadGroupObject() {
	      BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewByAmount', {
	        mode: 'class',
	        data: {
	          quantity: '3',
	          firstPosition: '5'
	        }
	      }).then(function (response) {
	        console.log(response);
	      });
	    }
	  }]);
	  return ObjectsGallery;
	}(Savmaxru.ObjectGUI);

	var Plugins = /*#__PURE__*/function () {
	  function Plugins() {
	    babelHelpers.classCallCheck(this, Plugins);
	  }

	  babelHelpers.createClass(Plugins, null, [{
	    key: "attachPlugin",
	    value: function attachPlugin(name, argument) {
	      return new this.pluginClasses[name](argument);
	    }
	  }]);
	  return Plugins;
	}();
	babelHelpers.defineProperty(Plugins, "pluginClasses", {
	  "ObjectsGallery": ObjectsGallery
	});

	exports.Plugins = Plugins;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX));
//# sourceMappingURL=plugins.bundle.js.map
