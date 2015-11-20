# aurelia-semantic-datatable
An Aurelia data table control styled using the Semantic-UI CSS framework.

## Demo
<a href="http://donthedev.com/aurelia/#grid-examples/" target="_blank">Aurelia Semantic Grid Demo</a>

## Documentation

### Installing the plugin


#### Install via JSPM
```
jspm install github:donnelljenkins/aurelia-semantic-datatable
```
*Coming soon.



## Example Usage
```HTML
<data-table datasource.bind="items" filters-changed.bind="filtersChanged" sort-changed.bind="sortChanged">
	<column property="name" filterable sortable></column>
	<column property="title" filterable sortable></column>
	<boolean-column property="active" filterable sortable></boolean-column>
	<button-column heading="Actions" caption="Select" click.call="semanticGridButtonClick($event)"></button-column>
	<custom-column view="../../../../../src/examples/grids/demo-custom-column-template.html" heading="Custom"></custom-column>
	<column property="id" alignment="right"></column>

  <template replace-part="footer">
		<tr><td colspan.bind="columns.length">This is the Aurelia Semantic-UI grid!  We tried to make using it as simple as possible.</td></tr>
	 </template>
</data-table>
```

## Dependencies

* [aurelia-framework](https://github.com/aurelia/framework)
* [semantic-ui](https://github.com/Semantic-Org/Semantic-UI)
