System.register(["aurelia-framework"], function (_export) {
	"use strict";

	var transient, Filterer;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [function (_aureliaFramework) {
			transient = _aureliaFramework.transient;
		}],
		execute: function () {
			Filterer = (function () {
				function Filterer() {
					_classCallCheck(this, _Filterer);

					this.filters = [];
					this.values = {};
				}

				_createClass(Filterer, [{
					key: "changeFilter",
					value: function changeFilter(column, value) {
						this.values[column.property] = value;
						this.handleFilterChange(column);
					}
				}, {
					key: "onInput",
					value: function onInput(column) {
						var _this = this;

						return function ($event) {
							return _this.handleFilterChange(column);
						};
					}
				}, {
					key: "handleFilterChange",
					value: function handleFilterChange(column) {
						var newFilter = { property: column.property, value: this.values[column.property] };
						this.addOrUpdateFilter(newFilter);
						this.removeBlankFilters();
						this.signalFiltersChanged();
					}
				}, {
					key: "addOrUpdateFilter",
					value: function addOrUpdateFilter(newFilter) {
						var existingFilter = this.filters.find(function (filter) {
							return filter.property === newFilter.property;
						});
						if (existingFilter) {
							existingFilter.value = newFilter.value;
						} else {
							this.filters.push(newFilter);
						}
					}
				}, {
					key: "removeBlankFilters",
					value: function removeBlankFilters() {
						this.filters = this.filters.filter(function (filter) {
							return filter.value || filter.value === false;
						});
					}
				}, {
					key: "signalFiltersChanged",
					value: function signalFiltersChanged() {
						if (this.filtersChanged) {
							this.filtersChanged(this.filters);
						}
					}
				}]);

				var _Filterer = Filterer;
				Filterer = transient()(Filterer) || Filterer;
				return Filterer;
			})();

			_export("Filterer", Filterer);
		}
	};
});