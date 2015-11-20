System.register(["../utility"], function (_export) {
	"use strict";

	var utility, columnSetup;
	return {
		setters: [function (_utility) {
			utility = _utility["default"];
		}],
		execute: function () {
			columnSetup = {
				setup: function setup() {
					this.templatePrefix = utility.snakeCase(this.__proto__.constructor.name);
					this.heading = this.heading || utility.camelCase(this.property);
					this.grid.addColumn(this);
				}
			};

			_export("columnSetup", columnSetup);
		}
	};
});