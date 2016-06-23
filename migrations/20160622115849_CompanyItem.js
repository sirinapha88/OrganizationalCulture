exports.up = function(knex, Promise) {
	return knex.schema.createTable('CompanyItem', function(){
		table.increments();
		table.integer('CompanyId').references('id').inTable('Company').onDelete('cascade');
		table.integer('DimensionId').references('id').inTable('Dimension').onDelete('cascade');
		table.boolean('ReverseScore');
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
