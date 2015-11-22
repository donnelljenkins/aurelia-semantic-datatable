define(['exports', '../utility'], function (exports, _utility) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _utility2 = _interopRequireDefault(_utility);

  var columnSetup = {
    setup: function setup() {
      this.templatePrefix = _utility2['default'].snakeCase(Onject.getPrototype(this).constructor.name);
      this.heading = this.heading || _utility2['default'].camelCase(this.property);
      this.dataTable.addColumn(this);
    }
  };

  exports.columnSetup = columnSetup;
});