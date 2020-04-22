this.Savmaxru = this.Savmaxru || {};
this.Savmaxru.Forms = this.Savmaxru.Forms || {};
(function (exports,main_core) {
	'use strict';

	var ObjectGUI = /*#__PURE__*/function () {
	  babelHelpers.createClass(ObjectGUI, [{
	    key: "setTemplate",
	    value: function setTemplate(template) {
	      this.template = template;
	    }
	    /*setTemplate2(template)
	    {
	    	let placeholder = /#([^# ]+)#/;
	    	while(1)
	    	{
	    		let matches = (placeholder.exec(template));
	    		if (matches === null)
	    		{
	    			break;
	    		}
	    		let foundKeyword = (placeholder.exec(template))[1];
	    		this.nodes[foundKeyword] = document.createElement('div');
	    		template = template.replace(placeholder, '<div>${this.nodes['+foundKeyword+']}</div>');
	    	}
	    //	Tag.render`template`;
	    }*/

	  }, {
	    key: "createWrapper",
	    value: function createWrapper(parent, className) {
	      var object = document.createElement('div');
	      object.className = className;
	      parent.append(object);
	      return object;
	    }
	  }]);

	  function ObjectGUI() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	      parentHTMLObject: undefined
	    };
	    babelHelpers.classCallCheck(this, ObjectGUI);
	    babelHelpers.defineProperty(this, "nodes", []);
	    this.wrapper = this.createWrapper(options.parentHTMLObject, 'savmaxru-object-wrapper');
	  }

	  babelHelpers.createClass(ObjectGUI, [{
	    key: "addContent",
	    value: function addContent(placeholdersValues) {
	      var content = this.template;
	      var newTemplate = this.template;

	      for (var placeholder in placeholdersValues) {
	        var newContent = content.replace(placeholder, placeholdersValues[placeholder]);
	        newTemplate = newTemplate.replace(placeholder, placeholdersValues[placeholder] + placeholder); //оставляем место для повторной начинки контентом с помощью дублирования
	        //плейсхолдеров

	        content = newContent;
	      }

	      this.setTemplate(newTemplate);
	      this.wrapper.innerHTML = content; //	let textNode = Tag.render`<span class="ui-btn-text">${ObjectGUI2.getHTMLObject()}</span>`;
	      // 		document.getElementById(options.wrapperID).append(textNode);
	      // 		ObjectGUI2.remove();
	    } //лучше переписать на заммену контента
	    //по мере необходимости

	  }, {
	    key: "include",
	    value: function include(object) {
	      this.wrapper.append(object.getHTMLObject());
	    }
	  }, {
	    key: "swapWithAnObject",
	    value: function swapWithAnObject(object) {
	      this.include(object);
	      object.include(this);
	    }
	  }, {
	    key: "getHTMLObject",
	    value: function getHTMLObject() {
	      return this.wrapper;
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      this.wrapper.remove();
	    }
	  }]);
	  return ObjectGUI;
	}();

	exports.ObjectGUI = ObjectGUI;

}((this.Savmaxru.Forms.GUI = this.Savmaxru.Forms.GUI || {}),BX));
//# sourceMappingURL=objectgui.bundle.js.map
