exports.up = function(knex, Promise) {
	return knex.schema.createTable('CompanyItem', function(){
		table.increments();
		table.integer('CompanyId');
		table.integer('DimensionId');
		table.integer('ReverseScore');
		table.integer('Number');
		table.string('Description');
		table.date('CreatedOn');
		table.string('CreatedBy');
		table.date('ModifiedOn');
		table.string('ModifiedBy');
	});
  
};

exports.down = function(knex, Promise) {
 	return knex.schema.dropTable('CompanyItem'); 
};
