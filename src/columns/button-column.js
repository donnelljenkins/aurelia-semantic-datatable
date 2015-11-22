import { bindable, inject, noView } from 'aurelia-framework';
import { DataTable } from '../data-table';
import { columnSetup } from './column-setup';

@noView
@inject(DataTable)
export class ButtonColumn {
  @bindable alignment = 'center aligned';
  @bindable buttonClass = 'ui button';
  @bindable caption;
  @bindable click;
  @bindable filterable;
  @bindable heading;
  @bindable property;
  @bindable sortable;

  constructor(dataTable) {
    this.dataTable = dataTable;
    Object.assign(this, columnSetup);
  }

  bind() {
    this.setup();
  }
}
