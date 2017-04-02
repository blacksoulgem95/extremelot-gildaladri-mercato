(function(require, exports) {
	'use strict';

	var Sequelize = require('sequelize');
	var connection = new Sequelize('extremelot_ladri', 'extremelot_ladri', null, {
		host: 'localhost',
		dialect: 'mysql',

		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});
	connection.authenticate().complete(function(err) {
		if (err) {
			console.error('Unable to connect to the database:', err);
		} else {
			console.debug('Connection has been established successfully.');
		}
	});

	var mapping = {};
	mapping.prodotto = connection.define('prodotto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		codice: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		titolo: {
			type: Sequelize.STRING
			allowNull: false
		},
		descrizione: {
			type: Sequelize.STRING
			allowNull: false
		},
		costo: {
			type: Sequelize.DECIMAL
			allowNull: false
		},
		immagine: {
			type: Sequelize.BLOB
			allowNull: false
		}
	});

	connection.sync();

	exports.database = {
		"mapping": mapping,
		"connection": connection
	};
})(require, exports);
