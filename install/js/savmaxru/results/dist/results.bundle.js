(function (exports,savmaxru_objectgui,savmaxru_resultsgallery,savmaxru_modalwindow,main_core) {
	'use strict';

	var ResultDialog = /*#__PURE__*/function (_ModalWindow) {
	  babelHelpers.inherits(ResultDialog, _ModalWindow);

	  function ResultDialog(structure) {
	    var _this;

	    babelHelpers.classCallCheck(this, ResultDialog);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ResultDialog).call(this));
	    var answers = structure['answers']; //console.log(structure);

	    _this.addNode('answers');

	    for (var i = 0; i < answers.length; i++) {
	      var answer = answers[i];

	      _this.includeInNode('answers', answer['CONTENT']);

	      var options = answer['options'];

	      for (var j = 0; j < options.length; j++) {
	        var option = options[j];

	        _this.includeInNode('answers', option['CONTENT']);
	      }
	    }

	    _this.setContent(_this.getNode('answers'));

	    return _this;
	  }

	  return ResultDialog;
	}(savmaxru_modalwindow.ModalWindow);

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Results = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(Results, _ObjectGUI);

	  function Results() {
	    var _this;

	    babelHelpers.classCallCheck(this, Results);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Results).call(this));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("results-wrapper")));

	    var configGallery = {
	      "galleryClassCSS": "results-gallery"
	    };
	    var gallery = new savmaxru_resultsgallery.ResultsGallery(configGallery, babelHelpers.assertThisInitialized(_this));

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
