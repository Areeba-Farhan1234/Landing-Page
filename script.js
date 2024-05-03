// Create a function to generate either registration or login form
function createForm(isRegistration) {
  // Create elements
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const form = document.createElement('form');
  form.setAttribute('action', '');

  const heading = document.createElement('h1');
  heading.textContent = isRegistration ? 'Registration' : 'Login';

  const inputBox = document.createElement('div');
  inputBox.classList.add('input-box');

  // Helper function to create input fields with icons
  function createInputField(type, placeholder, iconClass) {
      const inputField = document.createElement('div');
      inputField.classList.add('input-field');

      const input = document.createElement('input');
      input.setAttribute('type', type);
      input.setAttribute('placeholder', placeholder);
      input.setAttribute('required', '');

      const icon = document.createElement('i');
      icon.classList.add(iconClass);
      icon.setAttribute('aria-hidden', 'true');

      inputField.appendChild(input);
      inputField.appendChild(icon);

      return inputField;
  }

  // Create input fields
  const usernameInput = createInputField('text', 'Username', 'fa fa-user');
  const emailInput = createInputField('email', 'Email Address', 'fa fa-envelope');
  const passwordInput = createInputField('password', 'Password', 'fa fa-lock');
  const confirmPasswordInput = createInputField('password', 'Confirm Password', 'fa fa-lock');

  // Create checkbox and label (only for registration form)
  if (isRegistration) {
      const declarationLabel = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      declarationLabel.appendChild(checkbox);
      declarationLabel.innerHTML += 'I hereby declare that the above information provided is true and correct.';

      inputBox.appendChild(declarationLabel);
  }

  // Create buttons
  const submitButtonText = isRegistration ? 'Register' : 'Login';
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('btn');
  submitButton.textContent = submitButtonText;

  const pageButtonText = isRegistration ? 'Login' : 'Registration';
  const pageButton = document.createElement('button');
  pageButton.setAttribute('type', 'button');
  pageButton.classList.add('page');
  const pageLink = document.createElement('a');
  pageLink.setAttribute('href', isRegistration ? 'page1.html' : 'page2.html');
  pageLink.textContent = pageButtonText;
  pageButton.appendChild(pageLink);

  // Append elements
  inputBox.appendChild(usernameInput);
  inputBox.appendChild(emailInput);
  inputBox.appendChild(passwordInput);
  inputBox.appendChild(confirmPasswordInput);
  inputBox.appendChild(pageButton);

  form.appendChild(heading);
  form.appendChild(inputBox);
  form.appendChild(submitButton);

  wrapper.appendChild(form);

  // Append the wrapper to the body
  document.body.appendChild(wrapper);
}

// Call the function to create the registration form
createForm(true); // Pass true for registration form

// Call the function to create the login form
createForm(false); // Pass false for login form

