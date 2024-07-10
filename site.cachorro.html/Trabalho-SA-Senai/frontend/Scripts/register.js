emailInput.addEventListener('input', () => {
    validateInput(emailInput);
  });
  
  passwordInput.addEventListener('input', () => {
    validateInput(passwordInput);
  });

document.getElementById("register-btn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../pages/login.html";
});