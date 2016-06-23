
exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Assessment', function(){
 		table.increments();
 		table.integer('CompanyId').references('id').inTable('CompanyId').onDelete('cascade');
 		table.integer('SortOrder');
 		table.string('Code');
 		table.string('Title');
 		table.string('Description');
 		table.string('LeftLabel');
 		table.string('RightLabel');
 		table.date('CreatedOn');
 		table.string('CreateBy');
 		table.date('ModifiedOn');
 		table.string('ModifiedBy');

 	}); 
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('Assessment');
};
