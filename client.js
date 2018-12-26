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
    }

    employees.push(newEmployee);
    console.log('adding', newEmployee);
    

    // $('#submittedFirstName').append(`<tr><td>${subFirstName}</td></tr>`);
    // $('#submittedLastName').append(`<tr><td>${subLastName}</td></tr>`);
    // $('#submittedEmpId').append(`<tr><td>${subEmpId}</td></tr>`);
    // $('#submittedEmpTitle').append(`<tr><td>${subEmpTitle}</td></tr>`);
    // $('#submittedEmpSalary').append(`<tr><td>${subEmpSalary}</td></tr>`);

    let totalSalary = 0;
    for(employee of employees){
        totalSalary += Number(employee.empSalary);
    }
    console.log('total salary: ', totalSalary);
    

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