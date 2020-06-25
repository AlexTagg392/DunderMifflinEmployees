DROP DATABASE IF EXISTS company_employeeDB;
CREATE database company_employeeDB;

USE company_employeeDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(10) NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Management"), 
("Sales"), 
("Accounting"), 
("Quality Assurance"), 
("Human Resources"),
("Customer Service"), 
("Warehouse"),
("Administrative Dept."); 

INSERT INTO role (title, salary, department_id)
VALUES ("Regional Manager", 60000, 1), 
("Assistant Regional Manager", 55000, 1),
("Assistant to the Reg. Manager", 50000, 1),
("Sales Team", 50000, 2), 
("Accountant", 48000, 3), 
("Assurance Team", 48000, 4), 
("Lead HR Representative", 49000, 5),
("HR Representative", 48000, 5),
("Customer Service Rep.", 48000, 6), 
("Warehouse Foreman", 58000, 7),
("Warehouse Worker", 40000, 7),
("Office Manager", 43000, 8),
("Receptionist", 40000, 8); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, null),
("Jim", "Halpert", 2, 1),
("Dwight K.", "Schrute", 3, 1),
("Andy", "Bernard", 4, 2),
("Angela", "Martin", 5, 2),
("Kevin", "Malone", 5, 5),
("Creed", "Bratton", 6, 2),
("Holly", "Flax", 8, 9),
("Toby", "Flenderson", 7, 1),
("Kelly", "Kapoor", 9, 2),
("Darryl", "Philbin", 10, 1),
("Roy", "Anderson", 11, 11),
("Pam", "Halpert", 12, 1),
("Erin", "Hannon", 13, 13);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
