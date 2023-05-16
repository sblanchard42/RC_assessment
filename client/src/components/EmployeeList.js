import React, { useState, useEffect, useContext } from 'react';
import { Container, Table } from "semantic-ui-react";

import Context from "../Context";
import EmployeeRow from "./EmployeeRow";

const EmployeeList = ({employeeID, setEmployeeID, openClose, setOpenClose}) => {
    const context = useContext(Context.Context),
        [data, setData] = useState("");

    useEffect(() => {
        // Fetch a employee from the database
        const controller = new AbortController();

        context.data.getEmployees();
        setData(context.data);

        return () => controller?.abort();
    }, [context.data]);

    return (
        <Container
            textAlign="center"
        >
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>{"Person ID"}</Table.HeaderCell>
                        <Table.HeaderCell>{"First Name"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Last Name"}</Table.HeaderCell>
                        <Table.HeaderCell>{"E-mail Address"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Hire Date"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Job Title"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Agency Number"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Registration Date"}</Table.HeaderCell>
                        <Table.HeaderCell>{"Actions"}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{
                    (data.length > 0) ? data.map((employee) => {
                        return (<EmployeeRow
                            employee={employee}
                            employeeID={employeeID}
                            setEmployeeID={setEmployeeID}
                            openClose={openClose}
                            setOpenClose={setOpenClose}
                        />)
                    })
                    : (<Table.Row>
                        <Table.Cell colSpan="9">{"There are currently no Employees registered."}</Table.Cell>
                    </Table.Row>)
                }</Table.Body>
            </Table>
        </Container>
    );
}

export default EmployeeList;