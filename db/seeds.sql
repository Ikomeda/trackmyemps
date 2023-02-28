INSERT INTO departments (name)
VALUES ("Human Resources"),
("Sales"),
("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("HR Manager", 230000, 1),
("Finance", 120000, 1),
("Frontend Engineer", 90000, 3),
("Sales Manager", 175500, 2),
("Sales Rep", 70000, 2),
("Backend Engineer", 110000, 3),
("Full Stack Engineer", 150000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Biggus", "Dickus", 1, null),
("Incontenentia", "Buttocks", 2, 1),
("Bendict", "Cucumberpatch", 3, null),
("Edward", "Cullen", 4, null),
("Brian", "Bryan", 5, 4),
("John", "Schmitt", 6, 2),
("The", "Boss", 7, null);