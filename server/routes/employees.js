const express = require('express');

const router = express.Router();
const Employees = require('../models').Employee;
const { asyncHandler } = require('../middleware/async-handler');

// Return all employees
router.get('/employees', asyncHandler(async (req, res) => {
    let employees = await Employee.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: Employees,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    });
    res.json(employees);
}));

// Return a specific employee
router.get('/employees/:personal_id', asyncHandler(async (req, res) => {
    const employee = await Employees.findByPk(req.params.personal_id, {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: Employees,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    });
    if (employee) {
        res.json(employee);
    } else {
        res.json({
            "error": "Sorry, we couldn't find the employee you were looking for."
        });
    }
}));

// Create a employee
router.post('/employees', asyncHandler(async (req, res) => {
    try {
        const newEmployee = await Employees.create(req.body);
        res.status(201)
            .location(`/employees/${newEmployee.dataValues.personal_id}`)
            .end();
    } catch (error) {
        console.log('ERROR: ', error.name);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });
        } else {
            throw error;
        }
    }
}));

// Update an existing employee
router.put("/employees/:personal_id", asyncHandler(async (req, res, next) => {
    let employee;
    try {
        employee = await Employees.findByPk(req.params.personal_id);
        if (employee) {
            await employee.update(req.body);
            res.status(204).end();
        } else {
            const err = new Error(`Employee Not Found`);
            res.status(404).json({ error: err.message });
        }
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });
        } else {
            throw error;
        }
    }
}));

// Delete an existing employee
router.delete("/employees/:personal_id", asyncHandler(async (req, res, next) => {
    const employee = await Employees.findByPk(req.params.personal_id);
    if (employee) {
        await employee.destroy();
        res.status(204).end();
    } else {
        const err = new Error(`Employee Not Found`);
        res.status(404).json({ error: err.message });
    }
}));

module.exports = router;
