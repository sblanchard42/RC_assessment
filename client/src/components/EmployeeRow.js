import React, { useContext } from 'react';
import Context from "../Context";
import { Table, Button } from "semantic-ui-react";

const EmployeeRow = ({employee, employeeID, setEmployeeID, openClose, setOpenClose}) => {
    const context = useContext(Context.Context);

    const handleUpdate = (event, personal_id) => {
        event.preventDefault();
        setEmployeeID(personal_id);
        setOpenClose(true);
    }

    const handleDelete = (event, personal_id) => {
        event.preventDefault();
        context.data.deleteEmployee(personal_id);
    }


    return (<Table.Row>
        <Table.Cell>{employee.personal_id}</Table.Cell>
        <Table.Cell>{employee.first_name}</Table.Cell>
        <Table.Cell>{employee.last_name}</Table.Cell>
        <Table.Cell>{employee.email_address}</Table.Cell>
        <Table.Cell>{employee.hire_date}</Table.Cell>
        <Table.Cell>{employee.job_title}</Table.Cell>
        <Table.Cell>{employee.agency_num}</Table.Cell>
        <Table.Cell>{employee.registration_date}</Table.Cell>
        <Table.Cell>
            <Button color="blue" onClick={(e) => handleUpdate(e, employee.personal_id)}>{"Update"}</Button>
            <Button
                color="red"
                onClick={(e) => handleDelete(e, employee.personal_id)}>{"Delete"}</Button>
        </Table.Cell>
    </Table.Row>);

}

export default EmployeeRow;