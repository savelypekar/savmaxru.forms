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
	    var _this;

	    babelHelpers.classCallCheck(this, TypeButton);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TypeButton).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "typesDescription", {
	      "DropDownList": "DROPDOWN_LIST",
	      "CheckboxList": "CHECKBOX_LIST",
	      "RadiobuttonList": "RADIOBUTTON_LIST",
	      "Heading": "HEADING",
	      "SingleLineTextBox": "SINGLELINE_TEXTBOX",
	      "MultiLineTextBox": "MULTILINE_TEXTBOX"
	    });
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "typesIcon", {
	      "DropDownList": "dropdownlist-ico",
	      "CheckboxList": "checkboxlist-ico",
	      "RadiobuttonList": "radiobuttonlist-ico",
	      "Heading": "heading-ico",
	      "SingleLineTextBox": "singlelinetextbox-ico",
	      "MultiLineTextBox": "multilinetextbox-ico"
	    });

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.typesIcon[type], BX.message(_this.typesDescription[type])));

	    _this.getHTMLObject().onclick = function () {
	      parent.addComponent(type);
	    };

	    return _this;
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
	    key: "closeWindow",
	    value: function closeWindow() {
	      this.window.close();
	    }
	  }, {
	    key: "runCreator",
	    value: function runCreator() {
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
	    key: "buildFieldStructureForEditingOption",
	    value: function buildFieldStructureForEditingOption(optionStructure) {
	      var option = {
	        index: optionStructure["index"],
	        ID: optionStructure["ID"],
	        type: "SingleLineTextBox",
	        options: [{
	          value: optionStructure["value"]
	        }]
	      };
	      return option;
	    }
	  }, {
	    key: "applyChanges",
	    value: function applyChanges(component, description, optionsGallery, otherSettings) {
	      var objects = optionsGallery.getObjects();

	      for (var i = 0; i < objects.length; i++) {
	        var object = objects[i];
	        var newValue = object.getValue();
	        var modifiableOption = object.getProperty('modifiableOption');

	        if (modifiableOption !== undefined) {
	          var savedValue = modifiableOption.getProperty('value');

	          if (object.getProperty('change') === 'removed') {
	            modifiableOption.remove();
	          } else if (newValue !== savedValue) {
	            modifiableOption.rewriteProperty('value', newValue);
	            modifiableOption.refreshHTML();
	          }
	        } else if (object.getProperty('change') !== 'removed') {
	          //если был создана новая опция и не была удалена при том
	          component.addOptions([{
	            value: newValue
	          }], 'create');
	        }
	      } //options.getValue();

	    }
	  }, {
	    key: "runEditor",
	    value: function runEditor(component) {
	      var runWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      if (runWindow) {
	        this.openWindow();
	      }

	      var componentStructure = component.getStructure();
	      var configDescription = {
	        "galleryClassCSS": "editor-description-gallery"
	      };
	      var description = new savmaxru_componentsgallery.ComponentsGallery(configDescription, this, this.IDManager);
	      this.window.setContent(description.getHTMLObject());
	      var configOption = {
	        "galleryClassCSS": "editor-options-gallery"
	      };
	      var options = new savmaxru_componentsgallery.ComponentsGallery(configOption, this, this.IDManager);
	      this.window.setContent(options.getHTMLObject());
	      var configOtherSettings = {
	        "galleryClassCSS": "editor-other-settings-gallery"
	      };
	      var otherSettings = new savmaxru_componentsgallery.ComponentsGallery(configOtherSettings, this, this.IDManager);
	      this.window.setContent(otherSettings.getHTMLObject());
	      var type = componentStructure["type"];
	      var titles = {
	        "Heading": BX.message("HEADER_EDITING_TITLE"),
	        "RadiobuttonList": BX.message("QUESTION_EDITING_TITLE"),
	        "CheckboxList": BX.message("QUESTION_EDITING_TITLE"),
	        "MultiLineTextBox": BX.message("QUESTION_EDITING_TITLE"),
	        "SingleLineTextBox": BX.message("QUESTION_EDITING_TITLE"),
	        "DropDownList": BX.message("QUESTION_EDITING_TITLE"),
	        "Button": BX.message("BUTTON_EDITING_TITLE")
	      };
	      description.addObjectsGroup({
	        questions: [{
	          type: "Heading",
	          options: [{
	            value: titles[type]
	          }]
	        }]
	      });

	      if (type !== "Button" && type !== "Heading") {
	        description.addObjectsGroup({
	          questions: [{
	            ID: "questionText",
	            description: BX.message("QUESTION_TEXT"),
	            type: "MultiLineTextBox"
	          }, {
	            ID: "hintToTheQuestion",
	            description: BX.message("HINT_TO_THE_QUESTION"),
	            type: "MultiLineTextBox"
	          }]
	        });

	        if (type === "CheckboxList" || type === "RadiobuttonList" || type === "DropDownList") {
	          description.addObjectsGroup({
	            questions: [{
	              type: "Heading",
	              comment: BX.message("ANSWER_OPTIONS_COMMENT"),
	              options: [{
	                value: BX.message("ANSWER_OPTIONS")
	              }]
	            }]
	          });
	        }
	      }
	      /*let questions = [];
	      for(let i=0; i<componentStructure['options'].length; i++)
	      {
	      	questions.push(this.buildFieldStructureForEditingOption(componentStructure['options'][i]));
	      }
	      	options.addObjectsGroup({
	      	questions,
	      },);*/


	      if (type === "DropDownList" || type === "CheckboxList" || type === "RadiobuttonList") {
	        options.enableEditMode({
	          "remove": true
	        });
	      }

	      var optionsStructure = component.getOptions();

	      for (var i = 0; i < optionsStructure.length; i++) {
	        if (optionsStructure[i].getProperty('change') !== 'removed') {
	          var option = options.createComponent("SingleLineTextBox");
	          option.addProperty('modifiableOption', optionsStructure[i]);
	          option.build({
	            'options': [{
	              value: optionsStructure[i].getProperty('value')
	            }]
	          });
	        }
	      }

	      if (type !== "Button" && type !== "Heading") {
	        if (type !== "SingleLineTextBox" && type !== "MultiLineTextBox") {
	          var add = otherSettings.createComponent("Button");
	          add.setStyle("plus-button");
	          add.onDown(function () {
	            var object = options.createComponentWithOption("SingleLineTextBox");
	          });
	        }

	        otherSettings.addObjectsGroup({
	          questions: [{
	            ID: "notAcceptUnanswered",
	            type: "CheckboxList",
	            options: [{
	              value: BX.message("NOT_ACCEPT_UNANSWERED")
	            }]
	          }]
	        });
	      }

	      var saveButton = otherSettings.createComponent("Button");
	      saveButton.build({
	        'options': [{
	          value: BX.message("SAVE_FORM")
	        }]
	      });
	      var editor = this;
	      saveButton.onDown(function () {
	        //options.getHTMLObject().blur();
	        editor.applyChanges(component, undefined, options);
	        editor.closeWindow();
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
	    value: function addComponent(type) {
	      this.selectingAComponentMenu.remove();
	      var newComponent = this.objectsGallery.createComponent(type);
	      newComponent.build({
	        options: [{
	          value: ''
	        }]
	      });
	      this.runEditor(newComponent, false);
	    }
	  }]);
	  return ComponentEditor;
	}();

	exports.ComponentEditor = ComponentEditor;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX,Savmaxru,Savmaxru,Savmaxru));
//# sourceMappingURL=componenteditor.bundle.js.map
