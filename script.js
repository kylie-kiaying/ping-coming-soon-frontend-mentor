//Wait for the DOMM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const errorElement = document.getElementById('error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  //Validate form by checking if email is empty or has a valid format
  function validateForm() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      showError('Whoops! Looks like you forgot to add your email');
    } else if (!isValidEmail(emailValue)) {
      showError('Please provide a valid email address');
    } else {
      clearError();
    }
  }

  //Show error message by setting error element's text content to the message and styling it
  function showError(message) {
    errorElement.textContent = message;
    errorElement.style.color = lightRed;
  }

  //Clear the error message by setting error element's text content to an empty string
  function clearError() {
    errorElement.textContent = '';
  }

  //Check if email has a valid format. 
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Return true if email matches the regex, false otherwise
    return emailRegex.test(email);
  }
});

