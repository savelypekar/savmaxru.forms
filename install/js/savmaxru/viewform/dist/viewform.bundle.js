(function (exports,main_core,savmaxru_objectgui,savmaxru_guicomponents,savmaxru_idmanager,savmaxru_modalwindow,savmaxru_componenteditor,savmaxru_componentsgallery) {
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

	  function ViewForm() {
	    var _this;

	    babelHelpers.classCallCheck(this, ViewForm);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ViewForm).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "IDManager", new savmaxru_idmanager.IDManager('myforms'));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("viewform-wrapper")));
	    var configGallery = {
	      "galleryClassCSS": "viewform-gallery",
	      "objectsFactory": savmaxru_guicomponents.GUIComponents,
	      "argumentsForResult": {
	        'ID': 232323
	      }
	    };
	    var gallery = new savmaxru_componentsgallery.ComponentsGallery(configGallery);
	    _this.gallery = gallery;

	    _this.includeInNode("viewform-wrapper", _this.gallery.getHTMLObject());

	    var obj0 = gallery.createFactoryObject("Heading");
	    obj0.build({
	      'ID': 2220,
	      'index': 0,
	      'options': [{
	        index: 1,
	        ID: 121212,
	        value: "Такой вот опрос"
	      }]
	    });
	    var obj1 = gallery.createFactoryObject("DropDownList");
	    obj1.build({
	      'ID': 2221,
	      'index': 1,
	      'description': 'Выбери город',
	      'options': [{
	        index: 0,
	        ID: 121212,
	        value: "Вологда"
	      }, {
	        index: 1,
	        ID: 121212,
	        value: "Череповец"
	      }, {
	        index: 2,
	        ID: 121212,
	        value: "Калининград"
	      }],
	      'comment': 'вам доставят посылку точно по адресу',
	      'required': true
	    });
	    var obj6 = gallery.createFactoryObject("Button");
	    obj6.build({
	      'ID': 2226,
	      'index': 6,
	      'options': [{
	        index: 0,
	        ID: 121212,
	        value: "Send Form"
	      }]
	    });
	    obj6.onDown(function () {
	      console.log(gallery.getResult());
	    });
	    var obj8 = gallery.createFactoryObject("Button");
	    obj8.build({
	      'ID': 2226,
	      'index': 6,
	      'options': [{
	        index: 0,
	        ID: 121212,
	        value: "Add component"
	      }]
	    });
	    var ComponentEditor = new Savmaxru.ComponentEditor(_this.getNode("viewform-wrapper"), gallery);
	    obj8.onDown(function () {
	      ComponentEditor.create();
	    });
	    var obj2 = gallery.createFactoryObject("CheckboxList");
	    obj2.build({
	      'ID': 2222,
	      'index': 2,
	      'description': 'Test',
	      'options': [{
	        index: 0,
	        ID: 121212,
	        value: "Вологда"
	      }, {
	        index: 1,
	        ID: 121212,
	        value: "Череповец"
	      }, {
	        index: 2,
	        ID: 121212,
	        value: "Калининград"
	      }],
	      'comment': 'comment',
	      'required': true,
	      'IDManager': _this.IDManager
	    });
	    var obj3 = gallery.createFactoryObject("RadiobuttonList");
	    obj3.build({
	      'ID': 2223,
	      'index': 3,
	      'description': 'Test',
	      'options': [{
	        index: 0,
	        ID: 121212,
	        value: "Вологда"
	      }, {
	        index: 1,
	        ID: 121212,
	        value: "Череповец"
	      }, {
	        index: 2,
	        ID: 121212,
	        value: "Калининград"
	      }],
	      'comment': 'comment',
	      'required': true,
	      'IDManager': _this.IDManager
	    });
	    var obj4 = gallery.createFactoryObject("SingleLineTextBox");
	    obj4.build({
	      'ID': 2224,
	      'index': 4,
	      'description': 'Test',
	      'comment': 'comment',
	      'options': {}
	    });
	    var obj5 = gallery.createFactoryObject("MultiLineTextBox");
	    obj5.build({
	      'ID': 2225,
	      'index': 5,
	      'description': 'Test',
	      'comment': 'comment',
	      'options': {}
	    });
	    obj6.onDown(function () {
	      console.log(gallery.getResult());
	    }); //gallery.getResult();
	    //this.gallery.loadGroupObject();*/

	    return _this;
	  }

	  return ViewForm;
	}(savmaxru_objectgui.ObjectGUI);

	exports.ViewForm = ViewForm;

}((this.Savmaxru = this.Savmaxru || {}),BX,Savmaxru,Savmaxru,Savmaxru,Savmaxru,Savmaxru,Savmaxru));
//# sourceMappingURL=viewform.bundle.js.map
