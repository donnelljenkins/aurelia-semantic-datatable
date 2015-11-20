define(["exports", "aurelia-framework", "./filtering/filterer", "./sorting/sorter"], function (exports, _aureliaFramework, _filteringFilterer, _sortingSorter) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	var Grid = (function () {
		var _instanceInitializers = {};
		var _instanceInitializers = {};

		_createDecoratedClass(Grid, [{
			key: "datasource",
			decorators: [_aureliaFramework.bindable],
			initializer: null,
			enumerable: true
		}, {
			key: "filtersChanged",
			decorators: [_aureliaFramework.bindable],
			initializer: null,
			enumerable: true
		}, {
			key: "sortChanged",
			decorators: [_aureliaFramework.bindable],
			initializer: null,
			enumerable: true
		}], null, _instanceInitializers);

		function Grid(filterer, sorter) {
			_classCallCheck(this, _Grid);

			_defineDecoratedPropertyDescriptor(this, "datasource", _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, "filtersChanged", _instanceInitializers);

			_defineDecoratedPropertyDescriptor(this, "sortChanged", _instanceInitializers);

			this.columns = [];
			this.filterer = filterer;
			this.sorter = sorter;
		}

		_createDecoratedClass(Grid, [{
			key: "filtersChangedChanged",
			value: function filtersChangedChanged(newValue) {
				this.filterer.filtersChanged = newValue;
			}
		}, {
			key: "sortChangedChanged",
			value: function sortChangedChanged(newValue) {
				this.sorter.sortChanged = newValue;
			}
		}, {
			key: "addColumn",
			value: function addColumn(column) {
				this.columns.push(column);
			}
		}], null, _instanceInitializers);

		var _Grid = Grid;
		Grid = (0, _aureliaFramework.inject)(_filteringFilterer.Filterer, _sortingSorter.Sorter)(Grid) || Grid;
		return Grid;
	})();

	exports.Grid = Grid;
});