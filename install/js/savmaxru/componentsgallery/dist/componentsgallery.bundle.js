(function (exports,savmaxru_objectsgallery,savmaxru_guicomponents,savmaxru_modalwindow,main_core) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"success\">\n\t\t\t\t\t\t<div class=\"success-ico\"></div>\n\t\t\t\t\t\t<span>", "</span>\n\t\t\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ComponentsGallery = /*#__PURE__*/function (_ObjectsGallery) {
	  babelHelpers.inherits(ComponentsGallery, _ObjectsGallery);

	  function ComponentsGallery(argument, parent, IDManager) {
	    var _this;

	    babelHelpers.classCallCheck(this, ComponentsGallery);
	    argument["objectsFactory"] = savmaxru_guicomponents.GUIComponents;
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ComponentsGallery).call(this, argument));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "editMode", []);
	    _this.IDManager = IDManager;
	    _this.componentEditor = argument['componentEditor'];

	    _this.setParent(parent);

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
	      var regime = arguments.length > 1 ? arguments[1] : undefined;
	      var gallery = this;
	      var type = question['type'];
	      question['IDManager'] = this.IDManager;
	      var component = this.createFactoryObject(type);
	      component.build(question);

	      if (type === 'Button' && regime === 'view') {
	        component.onDown(function () {
	          gallery.getParent().saveResult(gallery.getResult());
	          gallery.removeHTMLObject();
	          var successDialog = new savmaxru_modalwindow.ModalWindow();
	          successDialog.setContent(main_core.Tag.render(_templateObject(), BX.message('FORM_SEND_SUCCESSFULLY')));
	          gallery.getParent().getHTMLObject().append(successDialog.getHTMLObject());
	        });
	      }

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
	    value: function addObjectsGroup(data, regime) {
	      var questions = data['questions'];

	      for (var i = 0; i < questions.length; i++) {
	        this.addQuestions(questions[i], regime);
	      }
	    }
	  }, {
	    key: "createComponent",
	    value: function createComponent(type) {
	      var object = this.createFactoryObject(type);
	      object.build({
	        'type': type,
	        'IDManager': this.IDManager
	      });
	      object.enableEditMode(this.editMode);
	      return object;
	    }
	  }, {
	    key: "createComponentWithOption",
	    value: function createComponentWithOption(type) {
	      var component = this.createComponent(type);
	      component.build({
	        'options': [{
	          value: ""
	        }]
	      });
	      return component;
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

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,Savmaxru,Savmaxru,BX));
//# sourceMappingURL=componentsgallery.bundle.js.map
