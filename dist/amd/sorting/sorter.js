define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Sorter = (function () {
    function Sorter() {
      var _this = this;

      _classCallCheck(this, _Sorter);

      this.sort = {};

      this.toggleSort = function (column, newDirection) {
        if (_this.sort.property === column.property) {
          _this.toggleSortForSameProperty(newDirection);
        } else {
          _this.toggleSortForNewProperty(column.property, newDirection);
        }

        _this.signalSortChanged();
      };
    }

    _createClass(Sorter, [{
      key: 'toggleSortForSameProperty',
      value: function toggleSortForSameProperty(newDirection) {
        if (this.sort.direction === newDirection) {
          this.clearSort();
        } else {
          this.sort.direction = newDirection;
        }
      }
    }, {
      key: 'clearSort',
      value: function clearSort() {
        this.sort.property = null;
        this.sort.direction = null;
      }
    }, {
      key: 'toggleSortForNewProperty',
      value: function toggleSortForNewProperty(newProperty, direction) {
        this.sort.property = newProperty;
        this.sort.direction = direction;
      }
    }, {
      key: 'signalSortChanged',
      value: function signalSortChanged() {
        if (this.sortChanged) {
          this.sortChanged(this.sort);
        }
      }
    }]);

    var _Sorter = Sorter;
    Sorter = (0, _aureliaFramework.transient)()(Sorter) || Sorter;
    return Sorter;
  })();

  exports.Sorter = Sorter;
});