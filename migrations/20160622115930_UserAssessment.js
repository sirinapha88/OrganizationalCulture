
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('UserAssessment', function(){
  		table.increments();
  		table.integer('UserId').references('id').inTable('OcpUser').onDelete('cascade');
  		table.integer('AssessmentId').references('id').inTable('Assessment').onDelete('cascade');
  		table.boolean('IsComplete');

  	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('UserAssessment');
};
