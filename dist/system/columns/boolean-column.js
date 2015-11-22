System.register(['aurelia-framework', '../data-table', './column-setup'], function (_export) {
  'use strict';

  var bindable, inject, noView, DataTable, columnSetup, BooleanColumn;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      noView = _aureliaFramework.noView;
    }, function (_dataTable) {
      DataTable = _dataTable.DataTable;
    }, function (_columnSetup) {
      columnSetup = _columnSetup.columnSetup;
    }],
    execute: function () {
      BooleanColumn = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(BooleanColumn, [{
          key: 'alignment',
          decorators: [bindable],
          initializer: function initializer() {
            return 'center aligned';
          },
          enumerable: true
        }, {
          key: 'filterable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'heading',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'property',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'sortable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function BooleanColumn(dataTable) {
          _classCallCheck(this, _BooleanColumn);

          _defineDecoratedPropertyDescriptor(this, 'alignment', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'property', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

          this.dataTable = dataTable;
          Object.assign(this, columnSetup);
        }

        _createDecoratedClass(BooleanColumn, [{
          key: 'bind',
          value: function bind() {
            this.setup();
          }
        }], null, _instanceInitializers);

        var _BooleanColumn = BooleanColumn;
        BooleanColumn = inject(DataTable)(BooleanColumn) || BooleanColumn;
        BooleanColumn = noView(BooleanColumn) || BooleanColumn;
        return BooleanColumn;
      })();

      _export('BooleanColumn', BooleanColumn);
    }
  };
});