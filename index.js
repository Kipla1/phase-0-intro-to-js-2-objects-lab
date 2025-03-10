// Write your solution in this file!
const employee = {
    name: `Oscar`,
    streetAddress: 23455
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    return Object.assign(delete employee.key)
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
}