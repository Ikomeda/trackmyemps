// to create a new department you need to INSERT the new department name VALUE (this functionality will be used in the server.js)
const newDepartment = deptName => `INSERT INTO departments (name) VALUES ('${deptName}')`;

// Creating a new role requires more information, and to specify that the salary and deptid are both number fields.
const newRole = (title, salary, dept) => {
    let salaryAmount = Number(salary);
    let deptId = Number(dept);

    let sql = `INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salaryAmount}', '${deptId}')`;
    return sql;
}

// NewEmployee will take the user input of the first/last name, role and whether or not they're a manager and INSERT the new employee into the table
const newEmployee = (firstName, lastName, role, manager) => {
    let role_id = Number(role);

    if(manager) {
        const manager_id = Number(manager);
        let sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${role_id}, ${manager_id})`;

        return sql;
    }
    else {
        let sql = `INSERT INTO employees (first_name, last_name, role_id) VALUES ('${firstName}', '${lastName}', ${role_id})`;

        return sql;
    }
}

// updating an employee only requires you to update their role_id by targeting the employee themselves.
const updateEmp = (empId, roleId) => {
    let employee_id = Number(empId);
    let role_id = Number(roleId);
    let sql = `UPDATE employees SET role_id = ${role_id} WHERE id = ${employee_id}`;
    return sql;
}

module.exports = { newDepartment, newRole, newEmployee, updateEmp }