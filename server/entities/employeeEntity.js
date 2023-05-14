const Sequelize = require("sequelize"),
    ORM = require("../utils/ORM"),
    orm = new ORM().connect();

let employeeEntity = orm.define(
    "employee",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        personal_id: {
            type: Sequelize.INTEGER
        },
        first_name: {
            type: Sequelize.TEXT
        },
        last_name: {
            type: Sequelize.TEXT
        },
        email_address: {
			type: Sequelize.STRING
		},
		hire_date: {
			type: Sequelize.STRING
		},
        job_title: {
            type: Sequelize.TEXT
        },
        agency_num: {
			type: Sequelize.INTEGER
		},
		registration_date: {
			type: Sequelize.STRING
		}
    },
    {
        timestamps: true
    }
);

module.exports = employeeEntity;