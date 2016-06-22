
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Company', function(){
		table.increment();
		table.string('Name');
		table.string('Introduction');
		table.boolean('IsEvaluationClosed');
		table.date('LastReminderDate');
		table.date('CreatedOn');
		table.string('CreatedBy');
		table.date('ModifiedOn');
		table.string('ModifiedBy');
		table.integer('QuestionnaireOrder');
		table.string('QuestionnaireTitle');
	});
  
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('Company');
};
