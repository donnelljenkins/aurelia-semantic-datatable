define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia) {
    aurelia.globalResources(['columns/boolean-column', 'columns/button-column', 'columns/column', 'columns/custom-column', 'data-table']);
  }
});