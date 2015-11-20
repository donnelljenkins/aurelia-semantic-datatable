import { bindable, inject, noView } from "aurelia-framework";
import { Grid } from "../grid";
import { columnSetup } from "./column-setup";

@noView
@inject(Grid)
export class Column {
	@bindable alignment;
	@bindable filterable;
	@bindable heading;
	@bindable property;
	@bindable sortable;

	constructor(grid) {
		this.grid = grid;
		Object.assign(this, columnSetup);
	}

	bind() {
		this.setup();
	}
}