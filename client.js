$(document).ready(readyNow);

function readyNow(){
    console.log('JQ Ready!');
    $('#submit').on('click', submitClick);
}

console.log('JS Ready!');



function submitClick(){
    console.log('Button Clicked!');
    let subFirstName = $('#firstName').val();
    let subLastName = $('#lastName').val();
    let subEmpId = $('#empId').val();
    let subEmpTitle = $('#empTitle').val();
    let subEmpSalary = $('#empSalary').val();

    $('#fNameList').append(`<tr><td>${subFirstName}</td></tr>`);
    $('#lNameList').append(`<tr><td>${subLastName}</td></tr>`);
    $('#empIdList').append(`<tr><td>${subEmpId}</td></tr>`);
    $('#empTitleList').append(`<tr><td>${subEmpTitle}</td></tr>`);
    $('#empSalaryList').append(`<tr><td>${subEmpSalary}</td></tr>`);
}

