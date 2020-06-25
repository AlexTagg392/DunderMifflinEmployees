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
    console.table("Welcome to Dunder Mifflin!")
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
        "Update an Employee's Role",
        "Exit"
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
            case "Exit":
                    break;
        }
    });
}
function viewAllEmployees() {
    var query = 
    `SELECT employee.first_name, employee.last_name, 
    employee.role_id, role.title, role.salary, role.id
    FROM employee 
    INNER JOIN role ON (employee.role_id = role.id)
    ORDER BY employee.role_id    
    `;
    connection.query(query, null, function(err, res) {
        console.table(res);
})
    runApp();
}
function viewAllByDept() {
    prompt({
        name: "department",
        type: "input",
        message: "Which Department would you like to view? Ex: Management = 1, Sales = 2, Accounting = 3, Quality Assurance = 4, Human Resources = 5, Customer Service = 6, Warehouse = 7, Administrative Dept. = 8. What is your number of choice?",
   
    })
    .then(function(answer) {
        var query = 
        `SELECT department.name, employee.role_id, department.id, 
        employee.first_name, employee.last_name, role.department_id, role.id
        FROM department 
        INNER JOIN role ON (department.id = role.department_id)
        INNER JOIN employee ON (role.id = employee.role_id)
        WHERE (department.id = ? AND role.department_id = ?)
        ORDER BY department.id
        `;
        connection.query(query, [answer.department, answer.department], function(err, res) {
                console.table(res);
        })
    })
}
function viewAllByRole() {
    prompt({
        name: "role",
        type: "rawlist",
        message: "Which Role would you like to view?",
        // Ex: Manager = 1, Sales = 2, Accounting = 3, Quality Assurance = 4, Human Resources = 5, Customer Service = 6, Warehouse = 7, Administrative Dept. = 8. What is your number of choice?
        choices: [
            "Regional Manager",
            "Assistant Regional Manager",
            "Assistant to the Reg. Manager",
            "Sales Team",
            "Accountant",
            "Assurance Team",
            "Lead HR Representative",
            "HR Representative",
            "Customer Service Rep.",
            "Warehouse Foreman",
            "Warehouse Worker",
            "Office Manager",
            "Receptionist"
        ]
    })
    .then(function(answer) {
        var query = 
        `SELECT employee.role_id, employee.first_name, employee.last_name, 
        role.department_id, role.title, role.salary
        FROM role 
        INNER JOIN employee ON (role.id = employee.role_id)
        WHERE (role.title = ?)
        ORDER BY role.title
        `;
        connection.query(query, [answer.role, answer.role], function(err, res) {
                console.table(res);
        })
    })
}
// function addDepartment() {
//     console.log("Success")
//     runApp();
// }
// function addRole() {
//     console.log("Success")
//     runApp();
// }
// function addEmployee() {
//     console.log("Success")
//     runApp();
// }
// function updateRole() {
//     console.log("Success")
//     runApp();
// }