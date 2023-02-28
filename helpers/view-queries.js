// Puts the SELECT command into the mysql terminal to return the department as id and department instead of id/name
const viewAllDepartments = () => {
    let sql = `SELECT id, name AS department FROM departments`;

    return sql;
}

// Using the left outer join to access the foreign key this command will return all the roles, salaries, and the department name for those roles.
const viewAllRoles = () => {
    let sql = `SELECT title AS role, salary, departments.name AS departments FROM roles
    LEFT OUTER JOIN departments ON roles.department_id = departments.id
    ORDER BY departments.name`;
    return sql;
}

// This one will grab two instances of first/last name, the first will be the employee, and the second will be the manager. It also displays the role/department/and salaries for employees.
const viewAllEmployees = () => {
    let sql = `SELECT E.first_name, E.last_name, roles.title AS role, departments.name AS department, roles.salary, CONCAT(M.first_name, " ", M.last_name) AS manager
    FROM employees E
    JOIN roles
    ON E.role_id = roles.id
    JOIN departments
    ON roles.department_id = departments.id
    LEFT JOIN employees M
    ON E.manager_id = M.id
    ORDER BY E.last_name`
    return sql;
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees }