import { transient } from "aurelia-framework";

@transient()
export class Filterer {
	filters = [];
	values = {};

	changeFilter(column, value) {
		this.values[column.property] = value;
		this.handleFilterChange(column);
	}

	onInput(column) {
		return ($event) => this.handleFilterChange(column);
	}

	handleFilterChange(column) {
		let newFilter = { property: column.property, value: this.values[column.property] };
		this.addOrUpdateFilter(newFilter);
		this.removeBlankFilters();
		this.signalFiltersChanged();
	}

	addOrUpdateFilter(newFilter) {
		let existingFilter = this.filters.find(filter => { return filter.property === newFilter.property; });
		if(existingFilter) {
			existingFilter.value = newFilter.value;
		} else {
			this.filters.push(newFilter);
		}
	}

	removeBlankFilters() {
		this.filters = this.filters.filter(filter => { return filter.value || filter.value === false; });
	}

	signalFiltersChanged() {
		if(this.filtersChanged) {
			this.filtersChanged(this.filters);
		}
	}
}