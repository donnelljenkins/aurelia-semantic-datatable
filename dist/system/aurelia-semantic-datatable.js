System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalResources(['columns/boolean-column', 'columns/button-column', 'columns/column', 'columns/custom-column', 'data-table']);
  }

  return {
    setters: [],
    execute: function () {}
  };
});