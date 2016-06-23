
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('Category', function(){
  		table.increments();
  		table.integer('CompanyId').references('id').inTable('Company').onDelete('cascade');
  		table.integer('SortOrder');
  		table.string('Code');
  		table.string('Title');
  		table.string('Items');
  		table.date('CreatedOn');
  		table.string('CreatedBy');
  		table.date('ModifiedOn');
  		table.string('ModifiedBy');
  	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('Category');  
};
