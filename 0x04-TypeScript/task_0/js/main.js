// Create two students
var studentOne = {
    firstName: 'Rachel',
    lastName: 'Oyondi',
    age: 24,
    location: 'Nairobi',
}

var studentTwo = {
    firstName: 'Besh',
    lastName: 'Betty',
    age: 21,
    location: 'Naivasha',
}
// create an array named studentsList containing the two variables
var studentsList = [studentOne, studentTwo];

var table = document.createElement('table');
var tableBody = document.createElement('tbody');
table.style.width = '100%';
table.style.background = '#34ebeb';
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCol = document.createElement('td');
    var locationCol = document.createElement('td');

    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;
    nameCol.style.textAlign = 'center';
    locationCol.style.textAlign = 'center';
    nameCol.style.color = '#000';
    locationCol.style.color = '#000';
    nameCol.style.border = '1px dotted black';
    locationCol.style.border = '1px dotted black';
    nameCol.style.height = '300px';
    locationCol.style.height = '300px';
    row.appendChild(nameCol); // append the cell to the row
    row.appendChild(locationCol); // append the cell to the row
    tableBody.appendChild(row); // append the row to the tbody
});
table.appendChild(tableBody); // append the tbody to the table
document.body.appendChild(table);
