import utility from "../utility";

const columnSetup = {
	setup: function() {
		this.templatePrefix = utility.snakeCase(this.__proto__.constructor.name);
		this.heading = this.heading || utility.camelCase(this.property);
		this.grid.addColumn(this);
	}
}

export { columnSetup };