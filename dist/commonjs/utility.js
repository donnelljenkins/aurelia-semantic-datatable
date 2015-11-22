'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utility = (function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: 'camelCase',
    value: function camelCase(text) {
      if (!text) return text;

      return text.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }, {
    key: 'snakeCase',
    value: function snakeCase(text) {
      var firstCharacter = text.slice(0, 1);
      var snakeCaseEnd = text.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
      return '' + (firstCharacter + snakeCaseEnd);
    }
  }]);

  return Utility;
})();

exports['default'] = Utility;
module.exports = exports['default'];