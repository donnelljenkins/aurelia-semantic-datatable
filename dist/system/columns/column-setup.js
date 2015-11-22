System.register(['../utility'], function (_export) {
  'use strict';

  var utility, columnSetup;
  return {
    setters: [function (_utility) {
      utility = _utility['default'];
    }],
    execute: function () {
      columnSetup = {
        setup: function setup() {
          this.templatePrefix = utility.snakeCase(Object.getPrototype(this).constructor.name);
          this.heading = this.heading || utility.camelCase(this.property);
          this.dataTable.addColumn(this);
        }
      };

      _export('columnSetup', columnSetup);
    }
  };
});