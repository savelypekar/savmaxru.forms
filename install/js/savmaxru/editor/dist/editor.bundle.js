(function (exports,savmaxru_objectgui,main_core,savmaxru_componenteditor,savmaxru_componentsgallery,savmaxru_guicomponents,savmaxru_idmanager) {
	'use strict';

	function _templateObject2() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t<div class=\"navigation-bar\">\n\t\t\t<div class=\"a-wrapper\">\n\t\t\t\t<a class= 'nav-hide", "' href=\"/forms/results/", "\" target=\"_blank\">", "</a>\n\t\t\t\t<a class= 'nav-hide", "' href=\"/forms/view/", "\" target=\"_blank\">", "</a>\n\t\t\t</div><br>\n\t\t</div>\n\t\t"]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject() {
	  var data = babelHelpers.taggedTemplateLiteral(["\n\t\t\t", ""]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Editor = /*#__PURE__*/function (_ObjectGUI) {
	  babelHelpers.inherits(Editor, _ObjectGUI);

	  function Editor(ID) {
	    var _this;

	    babelHelpers.classCallCheck(this, Editor);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Editor).call(this));
	    babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "IDManager", new savmaxru_idmanager.IDManager("editform"));

	    _this.setRootNode(main_core.Tag.render(_templateObject(), _this.addNode("editor-wrapper")));

	    _this.includeInNode("editor-wrapper", main_core.Tag.render(_templateObject2(), ID, ID, BX.message("RESULTS"), ID, ID, BX.message("FORM_PAGE")));

	    var componentEditor = new savmaxru_componenteditor.ComponentEditor(_this.getNode("editor-wrapper"));
	    var argumentID = ID;

	    if (argumentID === '0') {
	      argumentID = "NEW_FORM";
	    }

	    var configGallery = {
	      "galleryClassCSS": "editor-gallery",
	      "componentEditor": componentEditor,
	      "argumentsForResult": {
	        'ID': argumentID,
	        change: 'changed'
	      }
	    };
	    var titleForm = savmaxru_guicomponents.GUIComponents.attach("SingleLineTextBox");

	    _this.includeInNode("editor-wrapper", titleForm.getHTMLObject());

	    var gallery = new savmaxru_componentsgallery.ComponentsGallery(configGallery, babelHelpers.assertThisInitialized(_this), _this.IDManager);
	    componentEditor.setGallery(gallery);
	    gallery.enableEditMode();

	    _this.includeInNode("editor-wrapper", gallery.getHTMLObject());

	    var title;

	    if (ID === '0') {
	      //заготовка для создания новой формы
	      var button = gallery.createComponentWithOption("Button", 'Send form');
	      title = gallery.createComponentWithOption("Heading", 'New form');

	      _this.includeInNode("editor-wrapper", button.getHTMLObject()); //сюда

	    } else {
	      BX.ajax.runComponentAction('savmaxru:forms.viewform', 'sendInterviewStructure', {
	        mode: 'class',
	        data: {
	          idInterview: ID
	        }
	      }).then(function (response) {
	        var formStructure = response['data']['result'];
	        titleForm.setValue(formStructure['title']);
	        gallery.addObjectsGroup(formStructure, "edit");
	      });
	    }

	    _this.includeInNode("editor-wrapper", gallery.getSaveButton());

	    var addComponentButton = savmaxru_guicomponents.GUIComponents.attach("Button");
	    addComponentButton.setStyle('plus-button');

	    _this.includeInNode("editor-wrapper", addComponentButton.getHTMLObject());

	    var saveButton = savmaxru_guicomponents.GUIComponents.attach("Button");
	    saveButton.build({
	      'options': [{
	        value: BX.message("SAVE_FORM")
	      }]
	    });

	    _this.includeInNode("editor-wrapper", saveButton.getHTMLObject());

	    saveButton.onDown(function () {
	      this.getHTMLObject().innerHTML = '<div class="saving-button-text">Сохраняем ...</div>';
	      var changes = gallery.getChanges();
	      changes['title'] = titleForm.getValue();
	      BX.ajax.runComponentAction('savmaxru:forms.editor', 'saveInterviewStructure', {
	        mode: 'class',
	        data: {
	          result: changes
	        }
	      }).then(function (response) {
	        window.location = "" + response['data']['IDInterview'];
	      });
	      console.log(changes);
	    });
	    addComponentButton.onDown(function () {
	      componentEditor.runCreator();
	    });
	    return _this;
	  }

	  return Editor;
	}(savmaxru_objectgui.ObjectGUI);

	exports.Editor = Editor;

}((this.Savmaxru = this.Savmaxru || {}),Savmaxru,BX,Savmaxru,Savmaxru,Savmaxru,Savmaxru));
//# sourceMappingURL=editor.bundle.js.map
