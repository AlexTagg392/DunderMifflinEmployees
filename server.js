var mysql = require("mysql");
var { prompt } = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "company_employeedb"
});

connection.connect(function(err) {
  if (err) throw err;
  runApp();
});

function runApp() {
    console.log("Welcome to Dunder Mifflin!")
    prompt({
        name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Role",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee's Role"
      ]
    })
    .then(function(answer) {
        switch(answer.action) {
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Employees by Department":
                viewAllByDept();
                break;
            case "View All Employees by Role":
                viewAllByRole();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole(); 
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee's Role":
                updateRole();
                break;
        }
    });
}
function viewAllEmployees() {
    console.log("Success")
    runApp();
}
function viewAllByDept() {
    console.log("Success")
    runApp();
}
function viewAllByRole() {
    console.log("Success")
    runApp();
}
function addDepartment() {
    console.log("Success")
    runApp();
}
function addRole() {
    console.log("Success")
    runApp();
}
function addEmployee() {
    console.log("Success")
    runApp();
}
function updateRole() {
    console.log("Success")
    runApp();
}