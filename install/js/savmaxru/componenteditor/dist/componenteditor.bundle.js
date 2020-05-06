(function (exports,main_core,savmaxru_modalwindow) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"components-selection\">\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"dropdownlist-ico\"></div>\n\t\t\t\t<span>\u0412\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A</span>\n\t\t\t</div>\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"checkboxlist-ico\"></div>\n\t\t\t\t<span>\u0412\u044B\u0431\u043E\u0440 \u043D\u0435\u0441\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043E\u0442\u0432\u0435\u0442\u0430</span>\n\t\t\t</div>\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"radiobuttonlist-ico\"></div>\n\t\t\t\t<span>\u0412\u044B\u0431\u043E\u0440 \u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u043D\u0442\u0430 \u043E\u0442\u0432\u0435\u0442\u0430</span>\n\t\t\t</div>\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"singlelinetextbox-ico\"></div>\n\t\t\t\t<span>\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442</span>\n\t\t\t</div>\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"multilinetextbox-ico\"></div>\n\t\t\t\t<span>\u041C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442</span>\n\t\t\t</div>\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"heading-ico\"></div>\n\t\t\t\t<span>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</span>\n\t\t\t</div>\n\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ComponentEditor = /*#__PURE__*/function () {
	  function ComponentEditor(parent) {
	    babelHelpers.classCallCheck(this, ComponentEditor);
	    this.parent = parent;
	  }

	  babelHelpers.createClass(ComponentEditor, [{
	    key: "openWindow",
	    value: function openWindow() {
	      this.window = new Savmaxru.ModalWindow();
	      this.parent.append(this.window.getHTMLObject());
	    }
	  }, {
	    key: "create",
	    value: function create() {
	      this.openWindow();
	      var selectingAComponent = main_core.Tag.render(_templateObject());
	      this.window.setContent(selectingAComponent);
	    }
	  }]);
	  return ComponentEditor;
	}();

	exports.ComponentEditor = ComponentEditor;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX));
//# sourceMappingURL=componenteditor.bundle.js.map
