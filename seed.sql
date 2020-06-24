-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

USE company_employeeDB;

INSERT INTO department (id, name)
VALUES (1, "Management"), 
(2, "Sales"), 
(3, "Accounting"), 
(4, "Quality Assurance"), 
(5, "Human Resources"),
(6, "Customer Service"), 
(7, "Warehouse"),
(8, "Administrative Dept."); 

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Regional Manager", 60000, 1), 
(2, "Assistant Regional Manager", 55000, 1),
(3, "Assistant to the Reg. Manager", 50000, 1),
(4, "Sales Team", 50000, 2), 
(5, "Accountant", 48000, 3), 
(6, "Assurance Team", 48000, 4), 
(7, "Lead HR Representative", 49000, 5),
(8, "HR Representative", 48000, 5),
(9, "Customer Service Rep.", 48000, 6), 
(10, "Warehouse Foreman", 58000, 7),
(11, "Warehouse Worker", 40000, 7),
(12, "Office Manager", 43000, 8),
(13, "Receptionist", 40000, 8); 

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