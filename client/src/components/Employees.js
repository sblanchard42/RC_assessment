import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context";
import Loading from "../Loading";

const Employees = () => {
    const context = useContext(Context.Context);
    let [employees] = useState("");
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        context.data.getEmployees()
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error("Error fetching and parsing data", error);
                navigate("/error");
            })
            .finally(() => setIsLoading(false));
    }, [navigate, context.data]);

    if (data.length) {
        employees = data.map((employee) => {
            return <Link to={`/employees/${employee.id}`} className="employee--module employee--link" key={employee.id}>
                <h2 className="employee--label">Employee</h2>
                <h3 className="employee--title">{employee.title}</h3>
            </Link>
        });
    }

    return (
        isLoading ?
            <Loading />
            : <div className="wrap main--grid">
                {employees}
                <Link to="/employees/create" className="employee--module employee--add--module">
                    <span className="employee--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Employee
                    </span>
                </Link>
            </div>
    );
}

export default Employees;