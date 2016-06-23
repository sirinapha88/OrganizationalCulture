
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('UserCategory', function(){
  		table.increments();
  		table.integer('CategoryId').references('id').inTable('Category').onDelete('cascade');
  		table.integer('UserId').references('id').inTable('OcpUser').onDelete('cascade');
  		table.string('Response');
  	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('UserCategory');
};
