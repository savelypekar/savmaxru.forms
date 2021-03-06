(function (exports,main_core,savmaxru_objectsgallery,savmaxru_resultitemform) {
	'use strict';

	var ResultsGallery = /*#__PURE__*/function (_ObjectsGallery) {
	  babelHelpers.inherits(ResultsGallery, _ObjectsGallery);

	  function ResultsGallery(config, parent, ID) {
	    var _this;

	    babelHelpers.classCallCheck(this, ResultsGallery);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ResultsGallery).call(this, config));
	    _this.ID = ID;

	    _this.setParent(parent);

	    return _this;
	  }

	  babelHelpers.createClass(ResultsGallery, [{
	    key: "addGroupObject",
	    value: function addGroupObject(itemsStructure) {
	      for (var i = 0; i < itemsStructure.length; i++) {
	        this.addItems(itemsStructure[i]);
	      }
	    }
	  }, {
	    key: "addItems",
	    value: function addItems(itemStructure) {
	      console.log(itemStructure);
	      var item = new savmaxru_resultitemform.ResultItemForm(this.getParent());
	      this.push(item);
	      item.setName(itemStructure['NAME_USER']);
	      item.setID(itemStructure['ID']);
	      item.setUserName(itemStructure['TIME']);
	      item.setDate(BX.message(itemStructure['DATE_MONTH']) + ' ' + itemStructure['DATE_DAY']);
	    }
	  }, {
	    key: "loadGroupObject",
	    value: function loadGroupObject() {
	      var gallery = this;
	      var idInterview = this.ID;
	      var quantity = '70';
	      var firstPosition = '1';
	      BX.ajax.runComponentAction('savmaxru:forms.results', 'sendResults', {
	        mode: 'class',
	        data: {
	          idInterview: idInterview,
	          quantity: quantity,
	          firstPosition: firstPosition
	        }
	      }).then(function (response) {
	        //console.log(response['data']['result']);
	        gallery.addGroupObject(response['data']['result']);
	      });
	    }
	  }]);
	  return ResultsGallery;
	}(savmaxru_objectsgallery.ObjectsGallery);

	exports.ResultsGallery = ResultsGallery;

}((this.Savmaxru = this.Savmaxru || {}),BX,Savmaxru,Savmaxru));
//# sourceMappingURL=resultsgallery.bundle.js.map
