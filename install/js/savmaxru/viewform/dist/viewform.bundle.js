(function (exports,main_core,savmaxru_objectgui,savmaxru_plugins,savmaxru_guicomponents,savmaxru_idmanager) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ViewForm = /*#__PURE__*/function (_Savmaxru$ObjectGUI) {
	  babelHelpers.inherits(ViewForm, _Savmaxru$ObjectGUI);

	  function ViewForm() {
	    var _this;

	    babelHelpers.classCallCheck(this, ViewForm);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ViewForm).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "IDManager", new Savmaxru.IDManager('myforms'));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("viewform-wrapper")));

	    var configGallery = {
	      "galleryClassCSS": "viewform-gallery",
	      "objectsFactory": Savmaxru.GUIComponents,
	      "argumentsForResult": {
	        'ID': 232323
	      }
	    };
	    var gallery = Savmaxru.Plugins.attachPlugin("ObjectsGallery", configGallery);
	    _this.gallery = gallery;

	    _this.includeInNode("viewform-wrapper", _this.gallery.getHTMLObject());

	    var obj0 = gallery.createFactoryObject("Heading");
	    obj0.build({
	      'ID': 2220,
	      'index': 0,
	      'options': ['Такой вот опрос']
	    });
	    var obj1 = gallery.createFactoryObject("DropDownList");
	    obj1.build({
	      'ID': 2221,
	      'index': 1,
	      'description': 'Выбери город',
	      'options': ['Калининград', 'Череповец', 'Вологда'],
	      'comment': 'вам доставят посылку точно по адресу',
	      'required': true
	    });
	    var obj2 = gallery.createFactoryObject("CheckboxList");
	    obj2.build({
	      'ID': 2222,
	      'index': 2,
	      'description': 'Test',
	      'options': ['Russia', 'USA'],
	      'comment': 'comment',
	      'required': true,
	      'IDManager': _this.IDManager
	    });
	    var obj3 = gallery.createFactoryObject("RadiobuttonList");
	    obj3.build({
	      'ID': 2223,
	      'index': 3,
	      'description': 'Test',
	      'options': ['Russia', 'USA'],
	      'comment': 'comment',
	      'required': true,
	      'IDManager': _this.IDManager
	    });
	    var obj4 = gallery.createFactoryObject("SingleLineTextBox");
	    obj4.build({
	      'ID': 2224,
	      'index': 4,
	      'description': 'Test',
	      'comment': 'comment'
	    });
	    var obj5 = gallery.createFactoryObject("MultiLineTextBox");
	    obj5.build({
	      'ID': 2225,
	      'index': 5,
	      'description': 'Test',
	      'comment': 'comment'
	    });
	    var obj6 = gallery.createFactoryObject("Button");
	    obj6.build({
	      'ID': 2226,
	      'index': 6,
	      'options': ['Send form']
	    });
	    obj6.onDown(function () {
	      console.log(gallery.getResult());
	    }); //gallery.getResult();
	    //this.gallery.loadGroupObject();

	    return _this;
	  }

	  return ViewForm;
	}(Savmaxru.ObjectGUI);

	exports.ViewForm = ViewForm;

}((this.Savmaxru = this.Savmaxru || {}),BX,BX,BX,BX,BX));
//# sourceMappingURL=viewform.bundle.js.map
