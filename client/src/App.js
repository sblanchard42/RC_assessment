import React from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "semantic-ui-css/semantic.min.css";
import { Header, Divider, Segment } from "semantic-ui-react";

const App = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App">
            <div className="data">{data ? <p>{data}</p> : null}</div>
            <Header
                as="h1"
                textAlign="center"
            >Royal Caribbean Assessment</Header>
            <Segment
                compact
                color="blue"
            >
                <EmployeeForm setEmployeeID />
                <Divider horizontal>
                    <Header as="h4">Employees</Header>
                </Divider>
                <EmployeeList employeeID />
            </Segment>
        </div>
    );
}

export default App;
