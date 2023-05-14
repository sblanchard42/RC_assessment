const HttpStatusError = require("../utils/HttpStatusError"),
    ORM = require("../utils/ORM"),
    orm = new ORM().connect();

class employeeController {
    constructor(entity = require("../entities/employeeModel")) {
        this.entity = entity;
    }

    async create(requestValues) {
        if (!requestValues || typeof requestValues !== "object") {
            throw new HttpStatusError(400, "No data provided. No action taken");
        }
        try {
            return await this.entity.create(
                { ...requestValues },
                { fields: ["personal_id", "first_name", "last_name", "email_address", "hire_date", "job_title", "agency_num", "registration_date"]}
            );
        } catch (error) {
            throw new Error(error.message);
        }
        
    }

    async findAll(requestValues) {
        if (!requestValues || typeof requestValues !== "object") {
            throw new HttpStatusError(400, "No data provided. No action taken");
        }

        try{
            return await this.entity.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findOne(requestValues) {
        if (!requestValues || typeof requestValues !== "object") {
            throw new HttpStatusError(400, "No data provided. No action taken");
        }

        try{
            return await this.entity.findOne({
                where: {
                    personal_id: requestValues.personal_id
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateOne(requestValues) {
        if (!requestValues || typeof requestValues !== "object") {
            throw new HttpStatusError(400, "No data provided. No action taken");
        }

        try{
            return await this.entity.update({
                where: {
                    personal_id: requestValues.personal_id
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteOne(requestValues) {
        if (!requestValues || typeof requestValues !== "object") {
            throw new HttpStatusError(400, "No data provided. No action taken");
        }

        try{
            return await this.entity.destroy({
                where: {
                    personal_id: requestValues.personal_id
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = employeeController;


// // Import database
// const db = require("./../models");

// // Retrieve all employees
// exports.findAll = async (req, res) => {
//     db
//         .select("*")
//         .from("employees")
//         .then(userData => {
//             // Send employees extracted from database in response
//             res.json(userData)
//         })
//         .catch(err => {
//             // Send a error message in response
//             res.json({ message: `There was an error retrieving employees: ${err}` })
//         })
// }

// // Create new employee
// exports.createNew = async (req, res) => {
//     db("employees")
//         .insert({
//             "first_name": req.body.first_name,
//             "last_name": req.body.last_name,
//             "email_address": req.body.email_address,
//             "hire_date": req.body.hire_date,
//             "job_title": req.body.job_title,
//             "agency_num": req.body.agency_num,
//             "registration_date": req.body.registration_date
//         })
//         .then(() => {
//             // Send a success message in response
//             res.json({ message: `employee ${req.body.first_name} ${req.body.last_name} created.` })
//         })
//         .catch(err => {
//             // Send a error message in response
//             res.json({ message: `There was an error creating ${req.body.first_name} ${req.body.last_name} employee: ${err}` })
//         })
// }

// // Remove specific employee
// exports.deleteOne = async (req, res) => {
//     db("employees")
//         .where("id", req.body.id)
//         .del()
//         .then(() => {
//             // Send a success message in response
//             res.json({ message: `employee ${req.body.id} deleted.` })
//         })
//         .catch(err => {
//             // Send a error message in response
//             res.json({ message: `There was an error deleting ${req.body.id} employee: ${err}` })
//         })
// }

// // Remove all employees on the list
// exports.updateOne = async (req, res) => {
//     db
//         .select("*")
//         .from("employees")
//         .truncate()
//         .then(() => {
//             // Send a success message in response
//             res.json({ message: "employee list cleared." })
//         })
//         .catch(err => {
//             // Send a error message in response
//             res.json({ message: `There was an error resetting employee list: ${err}.` })
//         })
// }