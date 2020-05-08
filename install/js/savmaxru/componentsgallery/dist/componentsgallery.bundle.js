(function (exports,main_core,savmaxru_objectsgallery) {
	'use strict';

	var ComponentsGallery = /*#__PURE__*/function (_ObjectsGallery) {
	  babelHelpers.inherits(ComponentsGallery, _ObjectsGallery);

	  function ComponentsGallery(argument) {
	    babelHelpers.classCallCheck(this, ComponentsGallery);
	    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ComponentsGallery).call(this, argument));
	  }

	  babelHelpers.createClass(ComponentsGallery, [{
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
	        //console.log(questions[i]);
	        this.addQuestions(questions[i]);
	      }
	    }
	  }]);
	  return ComponentsGallery;
	}(savmaxru_objectsgallery.ObjectsGallery);

	exports.ComponentsGallery = ComponentsGallery;

}((this.Savmaxru = this.Savmaxru || {}),BX,Savmaxru));
//# sourceMappingURL=componentsgallery.bundle.js.map
