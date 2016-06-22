
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('OcpSetting', function(){
  		table.increment();
  		table.string('Code');
  		table.string('ValueString');
  		table.string('ValueText');
  		table.date('CreatedOn');
  		table.string('CreatedBy');
  		table.date('ModifiedOn');
  		table.string('ModifiedBy');
  	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('OcpSetting');
  
};
