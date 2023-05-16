import React, { useState, useEffect, useContext } from 'react';
import Context from "../Context";
import { Container, Table, Button } from "semantic-ui-react";

const EmployeeList = (setEmployeeID) => {
    const context = useContext(Context.Context),
        [data, setData] = useState("");

    let [employees] = useState('');
    // let navigate = useNavigate();

    useEffect(() => {
        // Fetch a employee from the database
        const controller = new AbortController();

        context.data.getEmployees();
        setData(context.data);
        // Clean up to prevent memory leak
        return () => controller?.abort();
    }, [context.data]);

    const handleUpdate = (event, personal_id) => {
        event.preventDefault();
        // context.data.updateEmployee(personal_id);
        // <EmployeeForm employee_id={personal_id} />
        setEmployeeID(personal_id);
        // navigate(`/${personal_id}`);
    }

    const handleDelete = (event, personal_id) => {
        event.preventDefault();
        context.data.deleteEmployee(personal_id);
            // .then((response) => {
            //     // If employee deletion is successful, then there should be no response returned
            //     if (response.length) {
            //         navigate('/error');
            //     } else {
            //         navigate('/');
            //     }
            // })
            // .catch((error) => {
            //     console.error(error);
            //     navigate('/error');
            // });
    }

    if (data.length) {
        employees = data.map((employee) => {
            return <Table.Row>
                <Table.Cell>{employee.personal_id}</Table.Cell>
                <Table.Cell>{employee.first_name}</Table.Cell>
                <Table.Cell>{employee.last_name}</Table.Cell>
                <Table.Cell>{employee.email_address}</Table.Cell>
                <Table.Cell>{employee.hire_date}</Table.Cell>
                <Table.Cell>{employee.job_title}</Table.Cell>
                <Table.Cell>{employee.agency_num}</Table.Cell>
                <Table.Cell>{employee.registration_date}</Table.Cell>
                <Table.Cell>
                    <Button
                        color="blue"
                        onClick={(e) => handleUpdate(e, employee.personal_id)}>Update</Button>
                    <Button
                        color="red"
                        onClick={(e) => handleDelete(e, employee.personal_id)}>Delete</Button>
                </Table.Cell>
            </Table.Row>
        });
    }

    return (
        <Container
            textAlign="center"
        >
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Person ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Address</Table.HeaderCell>
                        <Table.HeaderCell>Hire Date</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Agency Number</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employees}
                </Table.Body>
            </Table>
        </Container>
    );
}

export default EmployeeList;