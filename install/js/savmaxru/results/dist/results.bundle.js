(function (exports,savmaxru_objectgui,savmaxru_resultsgallery,savmaxru_modalwindow,main_core) {
	'use strict';

	function _templateObject4() {
	  var data = babelHelpers.taggedTemplateLiteral(["<li>", "</li>"]);

	  _templateObject4 = function _templateObject4() {
	    return data;
	  };

	  return data;
	}

	function _templateObject3() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span>", "</span>"]);

	  _templateObject3 = function _templateObject3() {
	    return data;
	  };

	  return data;
	}

	function _templateObject2() {
	  var data = babelHelpers.taggedTemplateLiteral(["<ul></ul>"]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["<span class=\"user-name\">", "</span>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ResultDialog = /*#__PURE__*/function (_ModalWindow) {
	  babelHelpers.inherits(ResultDialog, _ModalWindow);

	  function ResultDialog(structure) {
	    var _this;

	    babelHelpers.classCallCheck(this, ResultDialog);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ResultDialog).call(this));
	    var answers = structure['answers'];
	    console.log(structure);

	    _this.addNode('results-form');

	    _this.includeInNode('results-form', main_core.Tag.render(_templateObject(), structure['NAME_USER']));

	    for (var i = 0; i < answers.length; i++) {
	      var answer = answers[i];
	      var answerNode = main_core.Tag.render(_templateObject2());

	      _this.includeInNode('results-form', main_core.Tag.render(_templateObject3(), answer['CONTENT']));

	      var options = answer['options'];

	      for (var j = 0; j < options.length; j++) {
	        var option = options[j];
	        answerNode.append(main_core.Tag.render(_templateObject4(), option["CONTENT"]));
	      }

	      _this.includeInNode('results-form', answerNode);
	    }

	    _this.setContent(_this.getNode('results-form'));

	    return _this;
	  }

	  return ResultDialog;
	}(savmaxru_modalwindow.ModalWindow);

	function _templateObject$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject$1 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Results = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(Results, _ObjectGUI);

	  function Results(ID) {
	    var _this;

	    babelHelpers.classCallCheck(this, Results);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Results).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject$1(), _this.addNode("results-wrapper")));

	    var configGallery = {
	      "galleryClassCSS": "results-gallery"
	    };
	    var gallery = new savmaxru_resultsgallery.ResultsGallery(configGallery, babelHelpers.assertThisInitialized(_this), ID);

	    _this.includeInNode("results-wrapper", gallery.getHTMLObject());

	    gallery.loadGroupObject();
	    return _this;
	  }

	  babelHelpers.createClass(Results, [{
	    key: "openResultWindow",
	    value: function openResultWindow(ID) {
	      var page = this;
	      BX.ajax.runComponentAction('savmaxru:forms.results', 'sendSelectedResult', {
	        mode: 'class',
	        data: {
	          idResult: ID
	        }
	      }).then(function (response) {
	        var window = new ResultDialog(response['data']['result']);
	        page.getRootNode().append(window.getHTMLObject());
	      });
	    }
	  }]);
	  return Results;
	}(savmaxru_objectgui.ObjectGUI);

	exports.Results = Results;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,Savmaxru,Savmaxru,BX));
//# sourceMappingURL=results.bundle.js.map
