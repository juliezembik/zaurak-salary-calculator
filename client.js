$(document).ready(readyNow);

function readyNow(){
    console.log('JQ Ready!');
    $('#submit').on('click', submitClick);
}

console.log('JS Ready!');

const maxSalary = 20000;

function submitClick(){
    console.log('Button Clicked!');
    
    let subFirstName = $('#firstName').val();
    let subLastName = $('#lastName').val();
    let subEmpId = $('#empId').val();
    let subEmpTitle = $('#empTitle').val();
    let subEmpSalary = $('#empSalary').val();

    $('#submittedFirstName').append(`<tr><td>${subFirstName}</td></tr>`);
    $('#submittedLastName').append(`<tr><td>${subLastName}</td></tr>`);
    $('#submittedEmpId').append(`<tr><td>${subEmpId}</td></tr>`);
    $('#submittedEmpTitle').append(`<tr><td>${subEmpTitle}</td></tr>`);
    $('#submittedEmpSalary').append(`<tr><td>${subEmpSalary}</td></tr>`);
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