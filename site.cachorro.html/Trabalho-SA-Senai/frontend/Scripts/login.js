
const loginBtn = document.getElementById('login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function validateInput(input) {
  const isValid = input.value.trim()!== '';
  input.classList.toggle('input-invalid',!isValid);
  return isValid;
}


loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const emailValid = validateInput(emailInput);
  const passwordValid = validateInput(passwordInput);

  if (emailValid && passwordValid) {
   
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);

 
    emailInput.value = '';
    passwordInput.value = '';


    window.location.href = "../pages/selection.html";
  }
});

emailInput.addEventListener('input', () => validateInput(emailInput));
passwordInput.addEventListener('input', () => validateInput(passwordInput));