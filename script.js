document.getElementById('studentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrorMessages();
            
            // Validate form
            let isValid = validateForm();
            
            if (isValid) {
                // Show success message
                document.getElementById('successMessage').style.display = 'block';
                
                // Get form data
                const formData = new FormData(this);
                const studentData = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    age: formData.get('age')
                };
                
                // Log the data (in a real application, you would send this to a server)
                console.log('Student Registration Data:', studentData);
                
                // Reset form after successful submission
                setTimeout(() => {
                    this.reset();
                    document.getElementById('successMessage').style.display = 'none';
                }, 3000);
            }
        });

        function validateForm() {
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                showError('nameError', 'Name is required');
                isValid = false;
            } else if (name.value.length < 2) {
                showError('nameError', 'Name must be at least 2 characters long');
                isValid = false;
            } else if (!/^[A-Za-z\s]+$/.test(name.value)) {
                showError('nameError', 'Name should contain only letters and spaces');
                isValid = false;
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError('emailError', 'Email is required');
                isValid = false;
            } else if (!emailPattern.test(email.value)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate Age
            const age = document.getElementById('age');
            if (!age.value) {
                showError('ageError', 'Age is required');
                isValid = false;
            } else if (age.value < 16 || age.value > 100) {
                showError('ageError', 'Age must be between 16 and 100');
                isValid = false;
            }
            
            return isValid;
        }

        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        function clearErrorMessages() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(element => {
                element.style.display = 'none';
                element.textContent = '';
            });
        }

// Real-time validation feedback
document.getElementById('name').addEventListener('input', function() {
    if (this.value.length >= 2 && /^[A-Za-z\s]+$/.test(this.value)) {
        this.style.borderColor = '#27ae60';
        this.style.background = '#f8fff9';
    } else if (this.value.length > 0) {
        this.style.borderColor = '#e74c3c';
        this.style.background = '#fff8f8';
    } else {
        this.style.borderColor = '#e1e8ed';
        this.style.background = '#f8f9fa';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.value)) {
        this.style.borderColor = '#27ae60';
        this.style.background = '#f8fff9';
    } else if (this.value.length > 0) {
        this.style.borderColor = '#e74c3c';
        this.style.background = '#fff8f8';
    } else {
        this.style.borderColor = '#e1e8ed';
        this.style.background = '#f8f9fa';
    }
});

document.getElementById('age').addEventListener('input', function() {
    if (this.value >= 16 && this.value <= 100) {
        this.style.borderColor = '#27ae60';
        this.style.background = '#f8fff9';
    } else if (this.value.length > 0) {
        this.style.borderColor = '#e74c3c';
        this.style.background = '#fff8f8';
    } else {
        this.style.borderColor = '#e1e8ed';
        this.style.background = '#f8f9fa';
    }
});

// Add smooth scrolling and form animations
document.addEventListener('DOMContentLoaded', function() {
    // Add focus animations to form inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});