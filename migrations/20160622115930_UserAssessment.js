
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('UserAssessment', function(){
  		table.increments();
  		table.integer('UserId');
  		table.integer('AssessmentId');
  		table.integer('IsComplete');

  	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('UserAssessment');
};
