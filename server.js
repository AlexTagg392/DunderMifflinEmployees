var mysql = require("mysql");
var { prompt } = require("inquirer");

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
                connection.end();
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
        message: "Which Department would you like to view?",
   
    })
    .then(function(answer) {
        var query = 
        `SELECT department.name, employee.role_id, department.id, 
        employee.first_name, employee.last_name, role.department_id, role.id
        FROM department 
        INNER JOIN role ON (department.id = role.department_id)
        INNER JOIN employee ON (role.id = employee.role_id)
        WHERE (department.name = ?)
        ORDER BY department.id
        `;
        connection.query(query, [answer.department], function(err, res) {
                console.table(res);
        runApp();
        })
    })
}
function viewAllByRole() {
    prompt({
        name: "role",
        type: "rawlist",
        message: "Which Role would you like to view?",
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
        runApp();
        })
    })
}
function addDepartment() {
    prompt ({
        name: "newDepartment",
        type: "input",
        message: "What is the Name of the new Department that you would like to add",
    })
    .then(function(answer) {
        const query = 
        `INSERT INTO department (name)
        VALUES (?);
        `;
        connection.query(query, [answer.newDepartment], function(err, res) {
            console.table(res);
            console.log("Its been added!");
        runApp();
        })
    })
}
function addRole() {
    prompt ([
        {
        name: "newRole",
        type: "input",
        message: "What is the title of the new Role?",
    },
    {
        name: "salary",
        type: "input",
        message: "What is the salary of the new Role?",
    },
    {
        name: "departmentId",
        type: "input",
        message: "What is the Department Id of the new Role? Management = 1, Sales = 2, Accounting = 3, QA = 4, HR = 5, CS = 6, Warehouse = 7, Admin = 8",
    },
])
    .then(function(answer) {
        const query = 
        `INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?);
        `;
        connection.query(query, [answer.newRole, answer.salary, answer.departmentId], function(err, res) {
            console.table(res);
            console.log("Its been added!");
        runApp();
        })
    })
}
function addEmployee() {
    prompt ([{
        name: "firstName",
        type: "input",
        message: "What is the first name of the new Employee?",
    },
    {
        name: "lastName",
        type: "input",
        message: "What is the last name of the new employee?",
    },
])
    .then(function(answer) {
        const query = 
        `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?, ?, 4, 1);
        `;
        connection.query(query, [answer.firstName, answer.lastName], function(err, res) {
            console.table(res);
            console.log("Its been added!");
        runApp();
        })
    })
}
function updateRole() {
    prompt ([
        {
        name: "title",
        type: "input",
        message: "What is the title of the Role you want to update?",
    },
    {
        name: "salary",
        type: "input",
        message: "What is the salary of the updated Role?",
    },
    {
        name: "departmentId",
        type: "input",
        message: "What is the Department Id of the updated Role? Management = 1, Sales = 2, Accounting = 3, QA = 4, HR = 5, CS = 6, Warehouse = 7, Admin = 8",
    },
])
    .then(function(answer) {
        const query = 
        `UPDATE role 
        SET title = ?, salary = ?, department_id = ?
        WHERE title = ?;
        `;
        connection.query(query, [answer.title, answer.salary, answer.departmentId, answer.title], function(err, res) {
            console.table(res);
            console.log("Its been added!");
        runApp();
        })
    })
}