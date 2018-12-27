$(document).ready(readyNow);

function readyNow(){
    console.log('JQ Ready!');
    $('#submit').on('click', addEmployee);
}

console.log('JS Ready!');

const maxSalary = 20000;

let employees = [];

function addEmployee(){
    console.log('Button Clicked!');
    let newEmployee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    empId: $('#empId').val(),
    empTitle: $('#empTitle').val(),
    empSalary: $('#empSalary').val(),
    } //end add new employee

    employees.push(newEmployee);
    console.log('adding', newEmployee); 
    let table = $('#employeesOutput');
    table.empty();
    table.append(`
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employee ID</th>
                <th>Title</th>
                <th>Annual Salary</th>
            </tr>
    `);
    let totalSalary = 0;
    for(employee of employees){
        totalSalary += Number(employee.empSalary);
        table.append(`
                    <tr>
                        <td>` + employee.firstName + `</td>
                        <td>` + employee.lastName + `</td>
                        <td>` + employee.empId + `</td>
                        <td>` + employee.empTitle + `</td>
                        <td>` + employee.empSalary + `</td>
                        `); //end table append for employee
    } //end for
    console.log('total salary: ', totalSalary);
    let monthSalary = Math.ceil(totalSalary/12);
    console.log('monthly salary', monthSalary);
    let el = $('#monthly-total');
    el.empty();
    el.append(monthSalary);

    clearInputs();
}

// function addMonthlySalary(){
//     let num1 = 0 + $('#empSalary').val();
//     let monthSalary = maxSalary;
//     if(let num1 > monthSalary) {
//         $('body').css('background-color', 'red')
//     }
// }

function clearInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empId').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');
}