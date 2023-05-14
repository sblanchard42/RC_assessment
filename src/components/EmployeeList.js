import React from "react";
import { Container, Table } from "semantic-ui-react";

function EmployeeList () {
    
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
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell>Person ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail Address</Table.HeaderCell>
                        <Table.HeaderCell>Hire Date</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Agency Number</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    );
}

export default EmployeeList;