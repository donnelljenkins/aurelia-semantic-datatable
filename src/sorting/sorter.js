import { transient } from "aurelia-framework";

@transient()
export class Sorter {
	sort = {};

	toggleSort = (column, newDirection) => {
		if(this.sort.property === column.property) {
			this.toggleSortForSameProperty(newDirection);
		} else {
			this.toggleSortForNewProperty(column.property, newDirection);
		}

		this.signalSortChanged();
	}

	toggleSortForSameProperty(newDirection) {
		if(this.sort.direction === newDirection) {
			this.clearSort();
		} else {
			this.sort.direction = newDirection;
		}
	}

	clearSort() {
		this.sort.property = null;
		this.sort.direction = null;
	}

	toggleSortForNewProperty(newProperty, direction) {
		this.sort.property = newProperty;
		this.sort.direction = direction;
	}

	signalSortChanged() {
		if(this.sortChanged) {
			this.sortChanged(this.sort);
		}
	}
}