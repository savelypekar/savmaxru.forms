(function (exports,savmaxru_objectgui,savmaxru_componentsgallery,main_core,savmaxru_idmanager) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ViewForm = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(ViewForm, _ObjectGUI);

	  function ViewForm(ID) {
	    var _this;

	    babelHelpers.classCallCheck(this, ViewForm);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ViewForm).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "IDManager", new savmaxru_idmanager.IDManager("viewform"));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("viewform-wrapper")));

	    var configGallery = {
	      "argumentsForResult": {
	        'ID': ID
	      }
	    };
	    var gallery = new savmaxru_componentsgallery.ComponentsGallery(configGallery, babelHelpers.assertThisInitialized(_this), _this.IDManager);
	    _this.gallery = gallery;

	    _this.includeInNode("viewform-wrapper", gallery.getHTMLObject());

	    _this.includeInNode("viewform-wrapper", gallery.getSaveButton());

	    BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
	      mode: 'class',
	      data: {
	        idInterview: ID
	      }
	    }).then(function (response) {
	      console.log(response['data']['result']);
	      gallery.addObjectsGroup(response['data']['result'], "view");
	    });
	    return _this;
	  }

	  babelHelpers.createClass(ViewForm, [{
	    key: "saveResult",
	    value: function saveResult(result) {
	      this.gallery.getSaveButton().remove();
	      console.log(result);
	      BX.ajax.runComponentAction('savmaxru:forms.viewform', 'saveResult', {
	        mode: 'class',
	        data: {
	          result: result
	        }
	      });
	    }
	  }]);
	  return ViewForm;
	}(savmaxru_objectgui.ObjectGUI);

	exports.ViewForm = ViewForm;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,Savmaxru,BX,Savmaxru));
//# sourceMappingURL=viewform.bundle.js.map
