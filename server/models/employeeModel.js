const HttpStatusError = require("../utils/HttpStatusError"),
    ORM = require("../utils/ORM"),
    orm = new ORM().connect();

class EmployeeModel {
    constructor(entity = require("../entities/employeeEntity")) {
        this.entity = entity;
    }

    async createOne(requestValues) {
        if (!requestValues || typeof requestValues !== "object") {
            throw new HttpStatusError(400, "No data provided. No action taken");
        }
        try {
            return await this.entity.create(
                { ...requestValues, createdBy: "sarablanchard42@gmail.com" },
                { fields: ["personal_id", "first_name", "last_name", "email_address", "hire_date", "job_title", "agency_num", "registration_date"]}
            );
        } catch (error) {
            throw new Error(error.message);
        }
        
    }

    // async viewAll(requestValues) {

    // }
}

module.exports = EmployeeModel;