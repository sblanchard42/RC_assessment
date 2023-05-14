// Import database
const db = require("./../db")

// Retrieve all employees
exports.employeesAll = async (req, res) => {
    db
        .select("*")
        .from("employees")
        .then(userData => {
            // Send employees extracted from database in response
            res.json(userData)
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error retrieving employees: ${err}` })
        })
}

// Create new employee
exports.employeesCreate = async (req, res) => {
    db("employees")
        .insert({
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email_address": req.body.email_address,
            "hire_date": req.body.hire_date,
            "job_title": req.body.job_title,
            "agency_num": req.body.agency_num,
            "registration_date": req.body.registration_date
        })
        .then(() => {
            // Send a success message in response
            res.json({ message: `employee ${req.body.first_name} ${req.body.last_name} created.` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error creating ${req.body.first_name} ${req.body.last_name} employee: ${err}` })
        })
}

// Remove specific employee
exports.employeesDelete = async (req, res) => {
    db("employees")
        .where("id", req.body.id)
        .del()
        .then(() => {
            // Send a success message in response
            res.json({ message: `employee ${req.body.id} deleted.` })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error deleting ${req.body.id} employee: ${err}` })
        })
}

// Remove all employees on the list
exports.employeesReset = async (req, res) => {
    db
        .select("*")
        .from("employees")
        .truncate()
        .then(() => {
            // Send a success message in response
            res.json({ message: "employee list cleared." })
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error resetting employee list: ${err}.` })
        })
}