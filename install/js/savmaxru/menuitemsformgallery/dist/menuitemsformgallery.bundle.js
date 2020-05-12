this.BX = this.BX || {};
(function (exports,main_core,savmaxru_objectsgallery,savmaxru_menuitemform) {
	'use strict';

	var MenuItemsFormGallery = /*#__PURE__*/function (_ObjectsGallery) {
	  babelHelpers.inherits(MenuItemsFormGallery, _ObjectsGallery);

	  function MenuItemsFormGallery(config) {
	    babelHelpers.classCallCheck(this, MenuItemsFormGallery);
	    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MenuItemsFormGallery).call(this));
	  }

	  babelHelpers.createClass(MenuItemsFormGallery, [{
	    key: "addGroupObject",
	    value: function addGroupObject(itemsStructure) {
	      for (var i = 0; i < itemsStructure.length; i++) {
	        this.addItems(itemsStructure[i]);
	      }
	    }
	  }, {
	    key: "addItems",
	    value: function addItems(itemStructure) {
	      var item = new savmaxru_menuitemform.MenuItemForm();
	      item.setName(itemStructure['TITLE']);
	      item.setID(itemStructure['ID']);
	      item.setNumberOfResults('Нет ответов');
	      item.dateOfChange(itemStructure['DATE_CREATE']);
	      this.push(item);
	    }
	  }, {
	    key: "loadGroupObject",
	    value: function loadGroupObject() {
	      var gallery = this;
	      BX.ajax.runComponentAction('savmaxru:forms.myforms', 'loadInterviewCurrentUser', {
	        mode: 'class',
	        data: {
	          quantity: '10',
	          firstPosition: '1'
	        }
	      }).then(function (response) {
	        gallery.addGroupObject(response['data']['result']);
	      });
	    }
	  }]);
	  return MenuItemsFormGallery;
	}(savmaxru_objectsgallery.ObjectsGallery);

	exports.MenuItemsFormGallery = MenuItemsFormGallery;

}((this.BX.Savmaxru = this.BX.Savmaxru || {}),BX,Savmaxru,Savmaxru));
//# sourceMappingURL=menuitemsformgallery.bundle.js.map
