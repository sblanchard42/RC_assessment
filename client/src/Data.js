import config from "./config";

export default class Data {
    /**
     * Function to make Fetch requests to our custom REST API
     * @param {*} path - route or path to API endpoint e.g. /employees, /users
     * @param {*} method - e.g. POST, GET
     * @param {*} body - body of the request (optional)
     * @returns {function} Make the Fetch API request
     */
    api(path, method = "GET", body = null) {
        const url = config.apiBaseUrl + path;

        const options = {
            method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        return fetch(url, options);
    }


    /**
     * Get all available employees
     * @returns API response if successful
     */
    async getEmployees() {
        const response = await this.api("/employees", "GET", null);

        if (response.status === 200) {
            return response.json().then(data => data);
        } else if (response.status === 401) {
            return response.json().then(message => message);
        } else {
            throw new Error();
        }
    }

    /**
     * Get a specific employee by id
     * @param {String} personal_id - Employee personal_id
     * @returns API response if successful
     */
    async getEmployee(personal_id) {
        const response = await this.api(`/employees/${personal_id}`, "GET", null);
        if (response.status === 200) {
            return response.json().then(data => data);
        } else {
            throw new Error();
        }
    }

    /**
     * Create a new employee
     * @param {Object} employee - with personal_id, first_name, last_name, email_address, hire_date, job_title, agency_num, registration_date
     * @returns empty response if successful
     */
    async createEmployee(employee) {
        const response = await this.api("/employees", "POST", employee);
        if (response.status === 201) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }

    /**
     * Delete a specific employee
     * Only users who are authors of the employee are authorised to delete the employee
     * @param {String} personal_id - Employee personal_id
     * @returns empty response if successful
     */
    async deleteEmployee(personal_id) {
        const response = await this.api(`/employees/${personal_id}`, "DELETE", null);
        if (response.status === 204) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }

    /**
     * Update a particular employee
     * @param {String} personal_id - Employee personal_id
     * @param {Object} employee - with updated first_name, last_name, email_address, hire_date, job_title, agency_num, registration_date
     * @returns empty response if successful
     */
    async updateEmployee(personal_id, employee) {
        const response = await this.api(`/employees/${personal_id}`, "PUT", employee);
        if (response.status === 204) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => {
                return data.errors;
            });
        }
        else {
            throw new Error();
        }
    }
}