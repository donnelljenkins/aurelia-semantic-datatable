System.register(["aurelia-framework", "../grid", "./column-setup"], function (_export) {
	"use strict";

	var bindable, inject, noView, Grid, columnSetup, Column;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
			noView = _aureliaFramework.noView;
		}, function (_grid) {
			Grid = _grid.Grid;
		}, function (_columnSetup) {
			columnSetup = _columnSetup.columnSetup;
		}],
		execute: function () {
			Column = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(Column, [{
					key: "alignment",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "filterable",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "heading",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "property",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "sortable",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function Column(grid) {
					_classCallCheck(this, _Column);

					_defineDecoratedPropertyDescriptor(this, "alignment", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "filterable", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "heading", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "property", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "sortable", _instanceInitializers);

					this.grid = grid;
					Object.assign(this, columnSetup);
				}

				_createDecoratedClass(Column, [{
					key: "bind",
					value: function bind() {
						this.setup();
					}
				}], null, _instanceInitializers);

				var _Column = Column;
				Column = inject(Grid)(Column) || Column;
				Column = noView(Column) || Column;
				return Column;
			})();

			_export("Column", Column);
		}
	};
});