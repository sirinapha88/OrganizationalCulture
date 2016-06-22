
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('UserCategory', function(){
  		table.increments();
  		table.integer('CategoryId');
  		table.integer('UserId');
  		table.string('Response');
  	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('UserCategory');
};
