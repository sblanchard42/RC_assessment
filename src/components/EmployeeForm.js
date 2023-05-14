import React, { useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


const jobOptions = [
    { key: "taA", text: "TA Rep A", value: "TA Rep A" },
    { key: "taB", text: "TA Rep B", value: "TA Rep B" },
    { key: "directA", text: "Direct Rep A", value: "Direct Rep A" },
    { key: "directB", text: "Direct Rep B", value: "Direct Rep B" }
];

const Form_Endpoint = "";

function EmployeeForm () {
    const [open, setOpen] = useState(false),
        [personalID, setPersonalID] = useState(0),
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [emailAddress, setEmailAddress] = useState(""),
        [jobTitle, setJobTitle] = useState(""),
        [agencyNumber, setAgencyNumber] = useState(0),
        [hireDate, setHireDate] = useState(null),
        [message, setMessage] = useState("");

    const checkFields = () => {
        console.log("check values")
    }
    const handleDateChange = (event, data) => setHireDate(data.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        checkFields();

        try {
            let res = await fetch("http://localhost/3001/post", {
                method: "POST",
                body: JSON.stringify({
                    personal_id: personalID,
                    first_name: firstName,
                    last_name: lastName,
                    email_address: emailAddress,
                    hire_date: hireDate,
                    job_title: jobTitle,
                    agency_num: agencyNumber,
                    registration_date: new Date()
                }),
            });
            // let resJSON = await res.json();
            if (res.status === 200) {
                setPersonalID();
                setFirstName("");
                setLastName("");
                setEmailAddress("");
                setJobTitle("");
                setAgencyNumber();
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color="blue">Add New Employee</Button>}
        >
            <Modal.Header>
                Employee Information Form
            </Modal.Header>
            <Modal.Content>
                <div className="message">{message ? <p>{message}</p> : null}</div>
                <Form
                    action={Form_Endpoint}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <Form.Group widths="equal">
                        <Form.Input
                            fluid
                            label="Personal ID"
                            placeholder="Personal ID"
                            onChange={(e) => setPersonalID(e.target.value)}
                            required
                        />
                        <Form.Input
                            fluid
                            label="First Name"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <Form.Input
                            fluid
                            label="Last Name"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <Form.Input
                            fluid
                            label="E-mail Address"
                            placeholder="E-mail Address"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Select
                            fluid
                            label="Job Title"
                            options={jobOptions}
                            placeholder="Job Title"
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                        {console.log(jobTitle)}
                        {(jobTitle && jobTitle.indexOf("Direct") > 0) ? <Form.Input
                            fluid
                            label="Agency Number"
                            placeholder="Agency Number"
                            onChange={(e) => setAgencyNumber(e.target.value)}
                        /> : null}
                        <Form.Field required>
                            <label>Hire Date</label>
                            <SemanticDatepicker onChange={handleDateChange} />
                        </Form.Field>
                    </Form.Group>
                    <Button type="submit" color="blue">Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}

export default EmployeeForm;