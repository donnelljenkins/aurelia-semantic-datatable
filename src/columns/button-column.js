import { bindable, inject, noView } from "aurelia-framework";
import { Grid } from "../grid";
import { columnSetup } from "./column-setup";

@noView
@inject(Grid)
export class ButtonColumn {
	@bindable alignment = 'center aligned';
	@bindable buttonClass = 'ui button';
	@bindable caption;
	@bindable click;
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