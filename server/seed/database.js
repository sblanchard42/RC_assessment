'use strict';

const Context = require('./context');

class Database {
    constructor(seedData, enableLogging) {
        this.employees = seedData.employees;
        this.enableLogging = enableLogging;
        this.context = new Context('rca-restapi.db', enableLogging);
    }

    log(message) {
        if (this.enableLogging) {
            console.info(message);
        }
    }

    tableExists(tableName) {
        this.log(`Checking if the ${tableName} table exists...`);

        return this.context
            .retrieveValue(`
        SELECT EXISTS (
          SELECT 1
          FROM sqlite_master 
          WHERE type = 'table' AND name = ?
        );
      `, tableName);
    }

    createEmployee(employee) {
        return this.context
            .execute(`
        INSERT INTO Employees
          (personal_id, first_name, last_name, email_address, hire_date, job_title, agency_num, registration_date)
        VALUES
          (?, ?, ?, ?, ?, ?, ?, ?);
      `,
                employee.personal_id,
                employee.first_name,
                employee.last_name,
                employee.email_address,
                employee.hire_date,
                employee.job_title,
                employee.agency_num,
                employee.registration_date);
    }

    async createEmployees(employees) {
        for (const employee of employees) {
            await this.createEmployee(employee);
        }
    }

    async init() {
        const employeeTableExists = await this.tableExists('Employees');

        if (employeeTableExists) {
            this.log('Dropping the Employees table...');

            await this.context.execute(`
        DROP TABLE IF EXISTS Employees;
      `);
        }

        this.log('Creating the Employees table...');

        await this.context.execute(`
      CREATE TABLE Employees (
        personal_id INTEGER PRIMARY KEY NOT NULL,
        first_name VARCHAR(50) NOT NULL DEFAULT '',
        last_name VARCHAR(50) NOT NULL DEFAULT '',
        email_address VARCHAR(100) NOT NULL DEFAULT '',
        hire_date DATE NOT NULL DEFAULT '',
        job_title VARCHAR(100) NOT NULL DEFAULT '',
        agency_num INTEGER,
        registration_date DATE NOT NULL
      );
    `);

        this.log('Creating the employee records...');

        await this.createEmployees(this.employees);

        this.log('Database successfully initialized!');
    }
}

module.exports = Database;