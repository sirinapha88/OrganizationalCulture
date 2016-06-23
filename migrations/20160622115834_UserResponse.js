
exports.up = function(knex, Promise) {
	return knex.schema.createTable('UserResponse', function(table){
		table.increment();
		table.integer('UserAssessmentId').references('id').inTable('UserAssessment').onDelete('cascade');
		table.integer('ItemId').references('id').inTable('CompanyItem').onDelete('cascade');
		table.integer('Response');
	});
  
};

exports.down = function(knex, Promise) {
 	return knex.schema.dropTable('UserResponse');
};
