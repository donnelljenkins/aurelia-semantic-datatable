import { bindable, inject, noView } from "aurelia-framework";
import { DataTable } from "../data-table";
import { columnSetup } from "./column-setup";

@noView
@inject(DataTable)
export class Column {
	@bindable alignment;
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