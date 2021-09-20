// Write your solution in this file!
const employee = {
    name:"a", 
    streetAddress: "111"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee = {...employee};
    newemployee.name = "Sam";
    newemployee.streetAddress = "11 Broadway"
    return newemployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee.name= "Sam";
    employee.streetAddress= "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const b= {...employee};
    delete b.name;
    delete b.streetAddress;
    return b;
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}