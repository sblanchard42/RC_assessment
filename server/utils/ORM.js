const Sequelize = require("sequelize");

class ORM {
    constructor(orm = global.orm) {
        this.orm = orm;
    }

    _setupGlobalORM() {
        let orm = new Sequelize({
			dialect: "sqlite",
			storage: "localdev.sqlite"
		});
        if ("DB_SERVER" in process.env) {
			orm = new Sequelize(process.env["DB_DATABASE"], {
				dialect: "mysql",
				host: process.env["DB_SERVER"],
				pool: {
					max: 5,
					min: 1
				}
			});
		}

        orm.sync();
        this.orm = orm;
        global.orm = orm;
    }

    connect() {
        if (!global.orm) {
            this._setupGlobalORM();
        }
        return global.orm;
    }
}

module.exports = ORM;
