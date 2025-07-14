const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (emailValid && passwordValid) {
    form.submit();
  }
});

function validateEmail() {
    const email = emailInput.value.trim();
    const error = emailInput.parentElement.querySelector(".error-message");
    let missing = [];
  
    if (!email.includes("@")) missing.push("@");
    if (!email.includes(".")) missing.push(".");
  
    if (missing.length > 0) {
      error.textContent = `Email must contain ${missing.join(" and ")}`;
      error.style.display = "block";
      return false;
    } else {
      error.textContent = "";
      error.style.display = "none";
      return true;
    }
  }

function validatePassword() {
  const password = passwordInput.value.trim();
  const error = passwordInput.parentElement.querySelector(".error-message");

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters";
    error.style.display = "block";
    return false;
  } else {
    error.textContent = "";
    error.style.display = "none";
    return true;
  }
}

function clearErrors() {
  form.querySelectorAll(".error-message").forEach((el) => {
    el.textContent = "";
    el.style.display = "none";
  });
}
