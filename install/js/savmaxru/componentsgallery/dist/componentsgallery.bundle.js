(function (exports,main_core,savmaxru_objectsgallery,savmaxru_guicomponents) {
	'use strict';

	var ComponentsGallery = /*#__PURE__*/function (_ObjectsGallery) {
	  babelHelpers.inherits(ComponentsGallery, _ObjectsGallery);

	  function ComponentsGallery(argument) {
	    var _this;

	    babelHelpers.classCallCheck(this, ComponentsGallery);
	    argument["objectsFactory"] = savmaxru_guicomponents.GUIComponents;
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ComponentsGallery).call(this, argument));
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
	      component.enableEditMode();
	    }
	  }, {
	    key: "addObjectsGroup",
	    value: function addObjectsGroup(data) {
	      var questions = data['questions'];

	      for (var i = 0; i < questions.length; i++) {
	        this.addQuestions(questions[i]);
	      }
	    }
	  }]);
	  return ComponentsGallery;
	}(savmaxru_objectsgallery.ObjectsGallery);

	exports.ComponentsGallery = ComponentsGallery;

}((this.Savmaxru = this.Savmaxru || {}),BX,Savmaxru,Savmaxru));
//# sourceMappingURL=componentsgallery.bundle.js.map
