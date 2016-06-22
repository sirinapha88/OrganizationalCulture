
exports.up = function(knex, Promise) {
	return knex.schema.createTable('OcpUser', function(){
		table.increments();
		table.integer('CompanyId');
		table.string('EmailAddress');
		table.string('FirstName');
		table.string('LastName');
		table.string('AccessKey');
		table.boolean('IsAdmin');
		table.boolean('IsFocal');
		table.date('CreatedOn');
		table.string('CreatedBy');
		table.date('ModifiedOn');
		table.string('ModifiedBy');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('OcpUser');  
};
