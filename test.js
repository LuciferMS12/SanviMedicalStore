// Function to handle form submission
function submitForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;

    // Create a data object
    var data = {
        name: name,
        age: age,
        email: email
    };

    // Read existing data from JSON file
    var existingData = [];
    try {
        existingData = JSON.parse(localStorage.getItem('formData')) || [];
    } catch (error) {
        console.error('Error parsing existing data:', error);
    }

    // Add new data to the existing data
    existingData.push(data);

    // Store the updated data back in the JSON file
    localStorage.setItem('formData', JSON.stringify(existingData));

    // Clear the form fields
    document.getElementById('dataForm').reset();

    // Display the stored data in the table
    displayData();
}

// Function to display stored data in the table
function displayData() {
    var dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = ''; // Clear existing data

    // Read data from JSON file
    var storedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Populate the table with the stored data
    storedData.forEach(function(item) {
        var row = dataBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = item.name;
        cell2.innerHTML = item.age;
        cell3.innerHTML = item.email;
    });
}

// Display stored data on page load
displayData();
