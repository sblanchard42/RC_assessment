<a name="readme-top"></a>



<!-- PROJECT TITLE -->
<br />
<div align="center">
  <h3 align="center">Royal Caribbean Job Assessment</h3>
</div>




<!-- ABOUT THE PROJECT -->
## About The Project

*  Create a web form to register and manage an employee list by consuming a RESTful API. The interaction with the 
API could be based on Javascript or jQuery.
* Create a RESTful API could be based on PHP or another language that can insert, edit, or delete an employee in a 
database. The HTTP methods allowed are GET and POST.
* Create the database needed by the form.
* Present all registered employees in the home page.
* The UI design is up to you.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* Node.js
* React.js
* Semantic UI
* Sequalize
* sqlite3

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- REQUIREMENTS -->
## Requirements

### Employee Information Form
- Text fields - Personal identification, First name, Last name, and email address.
- Date picker - Hired Date.
- Dropdown - Job title (4 options: TA Rep A, TA Rep B, Direct Rep A, Direct Rep B).
- Text field: Agency Number field should be hidden during form load, show for job titles starting with “Direct”.

### Registered Employees
- List all registered employees.
- Option to Insert, Delete and Edit an employee.

### Validations
- All fields are required.
- Personal Id is a 7-digit number.
- Hire Date can’t be in the future.
- Check the email address format is valid without using regular expressions. An email will be considered valid if:
    - Has only one @ character 
    - Has at least a “.” (dot)
    - Has no spaces 

### On form submission for new Employee:
- Call the API route to insert the new Employee. Person_ID is unique, the API request should return an error in case 
the id already exists. 
- UI must be refreshed after the request is successful.

### On Delete action from the grid:
- Call the API route that will remove the selected employee from the database.
- UI must be refreshed after the request is successful.

### On Edit action from the grid:
- Call the API route that will bring data from the given Employee and present it in the edit form.
- The Person Id can’t be edited.

### On submission of the Edit form:
- Call the API route that will update the selected employee in the database.
- All validation previously defined should be present.
- UI must be refreshed after the request is successful.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Local -->
## Local

### To access local:
- Open a terminal in the server folder
- Run `npm start` to start the server

- Open a new terminal in the client folder
- Run `npm start` to start the react client


<!-- CONTACT -->
## Contact

Sara Blanchard - sarablanchard42@gmail.com

Project Link: [https://github.com/sblanchard42/RC_assessment](https://github.com/sblanchard42/RC_assessment)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
