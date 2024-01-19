//your JS code here. If required.
        function showDetails() {
            // Get form values
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var email = document.getElementById("email").value;

            // Create alert message
            var message = "User Details:\n\n";
            message += "First Name: " + firstName + "\n";
            message += "Last Name: " + lastName + "\n";
            message += "Phone Number: " + phoneNumber + "\n";
            message += "Email: " + email;

            // Display alert
            alert(message);
        }