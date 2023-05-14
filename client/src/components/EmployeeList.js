import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Context from '../../Context';
import { Container, Table } from "semantic-ui-react";

function EmployeeList () {
    let employeeDetail = useState('');
    const context = useContext(Context.Context),
        [employee, setEmployeeDetail] = useState({}),
        [data, setData] = useState(""),
        authUser = context.authenticatedUser;
  
    const { personal_id } = useParams();
  
    // useEffect(() => {
    //   // Fetch a employee from the database
    //   const controller = new AbortController();
    //   context.data.getEmployee(personal_id)
    //     .then(response => {
    //       if (response.personal_id) {
    //         setEmployeeDetail(response)
    //       } else {
    //         // If there is no employee ID, direct to Not Found
    //         navigate('/notfound');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching and parsing employee', error);
    //       navigate('/error');
    //     });
    //   // Clean up to prevent memory leak
    //   return () => controller?.abort();
    // }, [personal_id, navigate, context.data]);

    useEffect(() => {
        context.data.getEmployees()
          .then((response) => {
            setData(response);
          })
          .catch((error) => {
            console.error('Error fetching and parsing data', error);
            navigate('/error');
          });
      }, [navigate, context.data]);

  
    const handleDelete = (event) => {
      event.preventDefault();
      context.data.deleteEmployee(personal_id, authUser.emailAddress, authUser.password)
        .then((response) => {
          // If employee deletion is successful, then there should be no response returned
          if (response.length) {
            navigate('/error');
          } else {
            navigate('/');
          }
        })
        .catch((error) => {
          console.error(error);
          navigate('/error');
        });
    }

    if (data.length) {
        employees = data.map((employee) => {
          return <Table.Row>
            <Table.HeaderCell>{employee.personal_id}</Table.HeaderCell>
            <Table.HeaderCell>{employee.first_name}</Table.HeaderCell>
            <Table.HeaderCell>{employee.last_name}</Table.HeaderCell>
            <Table.HeaderCell>{employee.email_address}</Table.HeaderCell>
            <Table.HeaderCell>{employee.hire_date}</Table.HeaderCell>
            <Table.HeaderCell>{employee.job_title}</Table.HeaderCell>
            <Table.HeaderCell>{employee.agency_num}</Table.HeaderCell>
            <Table.HeaderCell>{employee.registration_date}</Table.HeaderCell>
            <Table.HeaderCell>
                {/* <Button color="blue">Update</Button> */}
                <Button
                    color="red"
                    onClick={(e) => handleDelete(e)}
                >Delete</Button>
            </Table.HeaderCell>
        </Table.Row>
          
          
          
        //   <Link to={`/employees/${employee.id}`} className="employee--module employee--link" key={employee.id}>
        //     <h2 className="employee--label">employee</h2>
        //     <h3 className="employee--title">{employee.title}</h3>
        //   </Link>
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