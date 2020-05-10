(function (exports,savmaxru_objectgui,main_core) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"modal-background\">\n\t\t\t\t<div class=\"modal-window\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t", "\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t", "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ModalWindow = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(ModalWindow, _Savmaxru$ObjectGUI);

	  function ModalWindow() {
	    var _this;

	    babelHelpers.classCallCheck(this, ModalWindow);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ModalWindow).call(this));

	    var closeButton = _this.addNode("window-close-button");

	    _this.setRootNode(main_core.Tag.render(_templateObject(), closeButton, _this.addNode("body")));

	    closeButton.onclick = function () {
	      this.parent.remove();
	    };

	    return _this;
	  }

	  babelHelpers.createClass(ModalWindow, [{
	    key: "setContent",
	    value: function setContent(content) {
	      this.includeInNode("body", content);
	    }
	  }]);
	  return ModalWindow;
	}(Savmaxru.ObjectGUI);

	exports.ModalWindow = ModalWindow;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX));
//# sourceMappingURL=modalwindow.bundle.js.map
