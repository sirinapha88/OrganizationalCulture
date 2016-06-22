
exports.up = function(knex, Promise) {
	return knex.schema.createTable('UserResponse', function(table){
		table.increment();
		table.integer('UserAssessmentId');
		table.integer('ItemId');
		table.integer('Response');
	});
  
};

exports.down = function(knex, Promise) {
 	return knex.schema.dropTable('UserResponse');
};
