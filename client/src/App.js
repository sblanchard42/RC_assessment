import React, { useState, useEffect, useContext } from "react";
import { Header, Divider, Segment, Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Context from "./Context";
import Loading from "./Loading";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";


const App = () => {
    const context = useContext(Context.Context),
        [data, setData] = useState(""),
        [isLoading, setIsLoading] = useState(true),
        [employeeID, setEmployeeID] = useState(),
        [openClose, setOpenClose] = useState(false);
console.log("context.data: ", context.data);
    useEffect(() => {
        context.data.getEmployees()
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error("Error fetching and parsing data", error);
            })
            .finally(() => setIsLoading(false));
    }, [context.data]);

    // useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);

    return (
        isLoading ?
            <Loading />
            : <div className="Employees">
                <div className="data">{data ? <p>{data}</p> : null}</div>
                <Header
                    as="h1"
                    textAlign="center"
                >Royal Caribbean Assessment</Header>
                <Segment
                    compact
                    color="blue"
                >
                    <EmployeeForm
                        employeeID={employeeID}
                        setEmployeeID={setEmployeeID}
                        openClose={openClose}
                        setOpenClose={setOpenClose}
                    />
                    <Button color="blue" onClick={() => setOpenClose(true)}>Add New Employee</Button>
                    <Divider horizontal>
                        <Header as="h4">Employees</Header>
                    </Divider>
                    <EmployeeList
                        employeeID={employeeID}
                        setEmployeeID={setEmployeeID}
                        openClose={openClose}
                        setOpenClose={setOpenClose}
                    />
                </Segment>
            </div>
    );
}

export default App;