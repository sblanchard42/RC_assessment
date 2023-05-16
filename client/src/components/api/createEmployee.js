const employeeController = require("../../../server/models/employee-controller");

export default async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "400 Bad Request; Request body params missing."
        });
    }

    const employeeController = new employeeController(),
        employee = await employeeController.createOne(req.body);

    res.status(200).json(employee);
}