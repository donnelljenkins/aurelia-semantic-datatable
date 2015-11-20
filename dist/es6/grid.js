import { bindable, inject } from "aurelia-framework";
import { Filterer } from "./filtering/filterer";
import { Sorter } from "./sorting/sorter";

@inject(Filterer, Sorter)
export class Grid {
	@bindable datasource;
	@bindable filtersChanged;
	@bindable sortChanged;

	constructor(filterer, sorter) {
		this.columns = [];
		this.filterer = filterer;
		this.sorter = sorter;
	}

	filtersChangedChanged(newValue) {
		this.filterer.filtersChanged = newValue;
	}

	sortChangedChanged(newValue) {
		this.sorter.sortChanged = newValue;
	}

	addColumn(column) {
		this.columns.push(column);
	}
}