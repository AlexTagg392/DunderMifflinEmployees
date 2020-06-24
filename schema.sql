DROP DATABASE IF EXISTS company_employeeDB;
CREATE database company_employeeDB;

USE company_employeeDB;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL,
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

/* SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee; */