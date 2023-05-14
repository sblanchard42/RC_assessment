const express = require('express')
const employeesRoutes = require('./../controllers/employee-controller.js')
const router = express.Router()

// Add route for GET request to retrieve all employee
router.get('/all', employeesRoutes.employeesAll)

// Add route for POST request to create new employee
router.post('/create', employeesRoutes.employeesCreate)

// Add route for PUT request to delete specific employee
router.put('/delete', employeesRoutes.employeesDelete)

// Add route for PUT request to reset employeeshelf list
router.put('/reset', employeesRoutes.employeesReset)


module.exports = router