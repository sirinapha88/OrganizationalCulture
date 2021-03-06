
exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Dimension', function(){
 		table.increment();
 		table.integer('SortOrder');
 		table.string('Title');
 		table.date('CreatedOn');
 		table.string('CreatedBy');
 		table.date('ModifiedOn');
 		table.string('ModifiedBy');
 	}); 
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('Dimension');
};
