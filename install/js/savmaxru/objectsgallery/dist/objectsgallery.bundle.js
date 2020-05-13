(function (exports,savmaxru_objectgui,main_core) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ObjectsGallery = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(ObjectsGallery, _ObjectGUI);
	  babelHelpers.createClass(ObjectsGallery, [{
	    key: "getObjects",
	    value: function getObjects() {
	      return this.objects;
	    }
	  }]);

	  function ObjectsGallery() {
	    var _this;

	    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      "galleryClassCSS": "standard-gallery",
	      "objectClassCSS": "standard-object",
	      "objectsFactory": undefined,
	      "argumentsForResult": {
	        'ID': 232323
	      }
	    };
	    babelHelpers.classCallCheck(this, ObjectsGallery);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ObjectsGallery).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "objects", []);

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode(config["galleryClassCSS"])));

	    _this.objectsFactory = config["objectsFactory"];
	    _this.argumentsForResult = config["argumentsForResult"];
	    return _this;
	  }

	  babelHelpers.createClass(ObjectsGallery, [{
	    key: "getChanges",
	    value: function getChanges() {}
	  }, {
	    key: "createFactoryObject",
	    value: function createFactoryObject(name) {
	      var object = this.objectsFactory.attach(name);
	      this.push(object);
	      return object;
	    }
	  }, {
	    key: "push",
	    value: function push(object) {
	      this.objects.push(object);

	      if (object.setParent !== undefined) {
	        object.setParent(this);
	      }

	      this.getRootNode().append(object.getHTMLObject());
	    }
	  }, {
	    key: "createObject",
	    value: function createObject() {}
	  }, {
	    key: "loadGroupObject",
	    value: function loadGroupObject() {}
	  }]);
	  return ObjectsGallery;
	}(savmaxru_objectgui.ObjectGUI);

	exports.ObjectsGallery = ObjectsGallery;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX));
//# sourceMappingURL=objectsgallery.bundle.js.map
