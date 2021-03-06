import utility from '../utility';

const columnSetup = {
  setup: function() {
    this.templatePrefix = utility.snakeCase(Object.getPrototypeOf(this).constructor.name);
    this.heading = this.heading || utility.camelCase(this.property);
    this.dataTable.addColumn(this);
  }
};

export { columnSetup };
