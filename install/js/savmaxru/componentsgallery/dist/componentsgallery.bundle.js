(function (exports,main_core,savmaxru_objectsgallery,savmaxru_guicomponents,savmaxru_idmanager) {
	'use strict';

	var ComponentsGallery = /*#__PURE__*/function (_ObjectsGallery) {
	  babelHelpers.inherits(ComponentsGallery, _ObjectsGallery);

	  function ComponentsGallery(argument) {
	    var _this;

	    babelHelpers.classCallCheck(this, ComponentsGallery);
	    argument["objectsFactory"] = savmaxru_guicomponents.GUIComponents;
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ComponentsGallery).call(this, argument));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "editMode", []);
	    _this.componentEditor = argument['componentEditor'];
	    return _this;
	  }

	  babelHelpers.createClass(ComponentsGallery, [{
	    key: "editComponent",
	    value: function editComponent(component) {
	      this.componentEditor.runEditor(component);
	    }
	  }, {
	    key: "addQuestions",
	    value: function addQuestions() {
	      var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var component = this.createFactoryObject(question['type']);
	      component.build(question);
	      component.enableEditMode(this.editMode);
	    }
	  }, {
	    key: "enableEditMode",
	    value: function enableEditMode() {
	      var modes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	        "settings": true,
	        "remove": true
	      };
	      this.editMode = modes;
	    }
	  }, {
	    key: "addObjectsGroup",
	    value: function addObjectsGroup(data) {
	      var questions = data['questions'];

	      for (var i = 0; i < questions.length; i++) {
	        this.addQuestions(questions[i]);
	      }
	    }
	  }, {
	    key: "createComponent",
	    value: function createComponent(type) {
	      var object = this.createFactoryObject(type);
	      object.build({
	        'type': type
	      });
	      object.enableEditMode(this.editMode);
	      return object;
	    }
	  }, {
	    key: "getResult",
	    value: function getResult() {
	      var resultGallery = [];
	      var argumentsForResult = this.argumentsForResult;

	      for (var key in argumentsForResult) {
	        resultGallery[key] = argumentsForResult[key];
	      }

	      var questions = [];
	      var objects = this.objects;

	      for (var i = 0; i < objects.length; i++) {
	        var object = objects[i];
	        var objectResult = object.getResult();

	        if (objectResult !== false) {
	          questions.push(objectResult);
	        }
	      }

	      resultGallery["questions"] = questions;
	      return resultGallery;
	    }
	  }, {
	    key: "getChanges",
	    value: function getChanges() {
	      var chacngesGallery = [];
	      var questions = [];
	      var objects = this.objects;
	      console.log("getChanges");

	      for (var i = 0; i < objects.length; i++) {
	        var object = objects[i];
	        var objectResult = object.getChanges();

	        if (objectResult !== {}) {
	          questions.push(objectResult);
	        }
	      }

	      chacngesGallery["questions"] = questions;
	      return chacngesGallery;
	    }
	  }]);
	  return ComponentsGallery;
	}(savmaxru_objectsgallery.ObjectsGallery);

	exports.ComponentsGallery = ComponentsGallery;

}((this.Savmaxru = this.Savmaxru || {}),BX,Savmaxru,Savmaxru,Savmaxru));
//# sourceMappingURL=componentsgallery.bundle.js.map
