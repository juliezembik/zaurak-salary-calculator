$(document).ready(readyNow);

function readyNow(){
    // console.log('JQ Ready!');
    $('#submit').on('click', addEmployee);
    $(document).on('click', '.idClick', removeEmployee);
}

// console.log('JS Ready!');

const maxSalary = 20000; //max salary

let employees = [];

function addEmployee(){
    console.log('Button Clicked!');
    let newEmployee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    empId: $('#empId').val(),
    empTitle: $('#empTitle').val(),
    empSalary: $('#empSalary').val(),
    } //end add new employee to newEmployee

    employees.push(newEmployee);
    console.log('adding', newEmployee); 
    let table = $('#employeesOutput');
    table.empty();
    table.append(`
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employee ID (click to remove)</th>
                <th>Title</th>
                <th>Annual Salary</th>
            </tr>
    `); //end employee append and inputs
    let totalSalary = 0;
    for(employee of employees){
        totalSalary += Number(employee.empSalary);
        table.append(`
                    <tr>
                        <td>` + employee.firstName + `</td>
                        <td>` + employee.lastName + `</td>
                        <td class="idClick">` + employee.empId + `</td>
                        <td>` + employee.empTitle + `</td>
                        <td>` + employee.empSalary + `</td>
                        `); //end table append for employee
    } //end for
    console.log('total salary: ', totalSalary);
    let monthSalary = Math.ceil(totalSalary/12);
    console.log('monthly salary', monthSalary); // end monthly salary calculation
    let el = $('#monthly-total');
    el.empty();
    el.append(monthSalary.toFixed(2)); // two decimal places

    if(monthSalary > maxSalary){
    el.css('color', 'white');
    el.css('background-color', 'red');
    } //end background red for overage 
    else{
        el.css('color', 'black');
        el.css('background-color', 'white');
    } //end background to regular else

    clearInputs(); 
} //end add employee function


function clearInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empId').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');
} //end clearInputs

function removeEmployee() {
    console.log('in removeEmployee', $(this).text());
    // loop through employees
    for (index in employees) {
        if (employees[index].empId === $(this).text()) {
            employees.splice(index, 1);
        }    //remove employee with this id
    }; //end for
    addEmployee();
}