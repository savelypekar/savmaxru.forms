(function (exports,savmaxru_modalwindow,main_core,savmaxru_objectgui,savmaxru_componentsgallery,savmaxru_idmanager) {
	'use strict';

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"btn-type-ico\">\n\t\t\t\t<div class=\"", "\"></div>\n\t\t\t\t<span>", "</span>\n\t\t\t</div>"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var TypeButton = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(TypeButton, _ObjectGUI);

	  function TypeButton(type, parent) {
	    var _this2;

	    babelHelpers.classCallCheck(this, TypeButton);
	    _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TypeButton).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this2), "typesDescription", {
	      "DropDownList": "DROPDOWN_LIST",
	      "CheckboxList": "CHECKBOX_LIST",
	      "RadiobuttonList": "RADIOBUTTON_LIST",
	      "Heading": "HEADING",
	      "SingleLineTextBox": "SINGLELINE_TEXTBOX",
	      "MultiLineTextBox": "MULTILINE_TEXTBOX"
	    });
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this2), "typesIcon", {
	      "DropDownList": "dropdownlist-ico",
	      "CheckboxList": "checkboxlist-ico",
	      "RadiobuttonList": "radiobuttonlist-ico",
	      "Heading": "heading-ico",
	      "SingleLineTextBox": "singlelinetextbox-ico",
	      "MultiLineTextBox": "multilinetextbox-ico"
	    });

	    _this2.setRootNode(main_core.Tag.render(_templateObject(), _this2.typesIcon[type], BX.message(_this2.typesDescription[type])));

	    _this2.getHTMLObject().onclick = function (_this) {
	      parent.addComponent(type);
	    };

	    return _this2;
	  }

	  return TypeButton;
	}(savmaxru_objectgui.ObjectGUI); //alert(BX.message("VENDOR_MODULENAME_COMPONENTNAME_BOOK_TITLE_1"));
	//alert(BX.message("UI_BUTTONS_SAVE_BTN_TEXT"));
	//alert(3);

	function _templateObject$1() {
	  var data = babelHelpers.taggedTemplateLiteral(["<div class=\"components-selection\"></div>"]);

	  _templateObject$1 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var ComponentEditor = /*#__PURE__*/function () {
	  function ComponentEditor(parent) {
	    babelHelpers.classCallCheck(this, ComponentEditor);
	    babelHelpers.defineProperty(this, "IDManager", new savmaxru_idmanager.IDManager('editor'));
	    babelHelpers.defineProperty(this, "types", ["DropDownList", "CheckboxList", "RadiobuttonList", "Heading", "SingleLineTextBox", "MultiLineTextBox"]);
	    this.parent = parent;
	  }

	  babelHelpers.createClass(ComponentEditor, [{
	    key: "setGallery",
	    value: function setGallery(objectsGallery) {
	      this.objectsGallery = objectsGallery;
	    }
	  }, {
	    key: "openWindow",
	    value: function openWindow() {
	      this.window = new Savmaxru.ModalWindow();
	      this.parent.append(this.window.getHTMLObject());
	    }
	  }, {
	    key: "create",
	    value: function create() {
	      this.openWindow();
	      var selectingAComponent = main_core.Tag.render(_templateObject$1());

	      for (var i = 0; i < this.types.length; i++) {
	        var button = new TypeButton(this.types[i], this);
	        selectingAComponent.append(button.getHTMLObject());
	      }

	      this.window.setContent(selectingAComponent);
	      this.selectingAComponentMenu = selectingAComponent;
	    }
	  }, {
	    key: "runEditor",
	    value: function runEditor(component) {
	      this.openWindow();
	      var componentStructure = component.getStructure();
	      var configDescription = {
	        "galleryClassCSS": "editor-description-gallery"
	      };
	      var description = new savmaxru_componentsgallery.ComponentsGallery(configDescription);
	      this.window.setContent(description.getHTMLObject());
	      var configOption = {
	        "galleryClassCSS": "editor-option-gallery"
	      };
	      var options = new savmaxru_componentsgallery.ComponentsGallery(configOption);
	      this.window.setContent(options.getHTMLObject());
	      var configOtherSettings = {
	        "galleryClassCSS": "editor-other-settings-gallery"
	      };
	      var otherSettings = new savmaxru_componentsgallery.ComponentsGallery(configOtherSettings);
	      this.window.setContent(otherSettings.getHTMLObject());
	      var type = componentStructure["type"];

	      if (type === "Heading") {
	        description.addObjectsGroup({
	          questions: [{
	            type: "Heading",
	            options: [{
	              value: BX.message("QUESTION_EDITING_TITLE")
	            }]
	          }, {
	            ID: "headingText",
	            description: BX.message("HEADING_TEXT"),
	            type: "SingleLineTextBox"
	          }]
	        });
	      } else {
	        description.addObjectsGroup({
	          questions: [{
	            type: "Heading",
	            options: [{
	              value: BX.message("HEADER_EDITING_TITLE")
	            }]
	          }, {
	            ID: "questionText",
	            description: BX.message("QUESTION_TEXT"),
	            type: "MultiLineTextBox"
	          }, {
	            ID: "hintToTheQuestion",
	            description: BX.message("HINT_TO_THE_QUESTION"),
	            type: "MultiLineTextBox"
	          }]
	        });
	      }

	      otherSettings.addObjectsGroup({
	        questions: [{
	          ID: "notAcceptUnanswered",
	          type: "CheckboxList",
	          'IDManager': this.IDManager,
	          options: [{
	            value: BX.message("NOT_ACCEPT_UNANSWERED")
	          }]
	        }]
	      });
	      var saveButton = otherSettings.createFactoryObject("Button");
	      saveButton.build({
	        'ID': 2226,
	        'index': 6,
	        'options': [{
	          index: 0,
	          ID: 121212,
	          value: BX.message("SAVE_FORM")
	        }]
	      }); //otherSettings.addObjectsGroup();

	      /*let configGallery = {
	      	"galleryClassCSS": "editor-gallery",
	      };
	      let gallery = new ComponentsGallery(configGallery);
	      gallery.addObjectsGroup({
	      	ID: 6829,
	      	questions: [
	      	{
	      			ID: 121212,
	      			index: 2,
	      			type: "Heading",
	      			options: [
	      				{
	      					index: 1,
	      					value: 'Редактирование поля',
	      					ID: 121212,
	      				}
	      			]
	      		},
	      		{
	      			ID: 121212,
	      			description:'Текст вопроса:',
	      			index: 4,
	      			type: "MultiLineTextBox",
	      			options: [],
	      		},{
	      			ID: 121212,
	      			description:'Подсказка к вопросу',
	      			index: 4,
	      			type: "MultiLineTextBox",
	      			options: [],
	      		},
	      		{
	      			ID: 121212,
	      			index: 1,
	      			type: "CheckboxList",
	      			required: true,
	      			'IDManager': this.IDManager,
	      			options: [
	      				{
	      					index: 1,
	      					ID: 121212,
	      					value: "НЕ принимать без ответа",
	      				},
	      			],
	      			},
	      	]
	      });
	      	let gallery2 = new ComponentsGallery(configGallery);
	      gallery2.addObjectsGroup({
	      	ID: 6829,
	      	questions: [
	      		{
	      			ID: 121212,
	      			index: 2,
	      			type: "Heading",
	      			options: [
	      				{
	      					index: 1,
	      					value: 'Редактирование поля',
	      					ID: 121212,
	      				}
	      			]
	      		},
	      		{
	      			ID: 121212,
	      			description:'Текст вопроса:',
	      			index: 4,
	      			type: "MultiLineTextBox",
	      			options: [],
	      		},{
	      			ID: 121212,
	      			description:'Подсказка к вопросу',
	      			index: 4,
	      			type: "MultiLineTextBox",
	      			options: [],
	      		},
	      		{
	      			ID: 121212,
	      			index: 1,
	      			type: "CheckboxList",
	      			required: true,
	      			'IDManager': this.IDManager,
	      			options: [
	      				{
	      					index: 1,
	      					ID: 121212,
	      					value: "НЕ принимать без ответа",
	      				},
	      			],
	      			},
	      	]
	      });
	      	*/
	    }
	  }, {
	    key: "addComponent",
	    value: function addComponent(name) {
	      this.objectsGallery.createFactoryObject(name);
	      this.selectingAComponentMenu.remove();
	    }
	  }]);
	  return ComponentEditor;
	}();

	exports.ComponentEditor = ComponentEditor;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX,Savmaxru,Savmaxru,Savmaxru));
//# sourceMappingURL=componenteditor.bundle.js.map
