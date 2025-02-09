interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: "Peter", lastName: "Parker", age: 20, location: "Vancouver" };
const student2: Student = { firstName: "June", lastName: "O'Dell", age: 22, location: "Paris" };

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
