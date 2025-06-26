const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValid = validateName();
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  const passwordValid = validatePassword();
  const confirmPasswordValid = validateConfirmPassword();

  if (
    nameValid &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    confirmPasswordValid
  ) {
    alert("Sign up successful!");
    form.reset();
    clearErrors();
  }
});

function validateName() {
  const name = nameInput.value.trim();
  const error = nameInput.parentElement.querySelector(".error-message");

  if (name === "") {
    error.textContent = "Name is required";
    error.style.display = "block";
    return false;
  }


  if (!/^[a-zA-Z\s]+$/.test(name)) {
    error.textContent = "Name can contain only letters and spaces";
    error.style.display = "block";
    return false;
  }

  error.textContent = "";
  error.style.display = "none";
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const error = emailInput.parentElement.querySelector(".error-message");

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === "") {
    error.textContent = "Email is required";
    error.style.display = "block";
    return false;
  }

  if (!emailRegex.test(email)) {
    error.textContent = "Please enter a valid email address";
    error.style.display = "block";
    return false;
  }

  error.textContent = "";
  error.style.display = "none";
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  const error = phoneInput.parentElement.querySelector(".error-message");

  const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

  if (phone === "") {
    error.textContent = "Phone number is required";
    error.style.display = "block";
    return false;
  }

  if (!bdPhoneRegex.test(phone)) {
    error.textContent =
      "Phone must be a valid Bangladeshi number (+8801XXXXXXXXX or 01XXXXXXXXX)";
    error.style.display = "block";
    return false;
  }

  error.textContent = "";
  error.style.display = "none";
  return true;
}

function validatePassword() {
  const password = passwordInput.value;
  const error = passwordInput.parentElement.querySelector(".error-message");

  const minLength = /.{6,}/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const digit = /[0-9]/;
  const specialChar = /[^A-Za-z0-9]/;

  let errors = [];

  if (!minLength.test(password))
    errors.push("at least 6 characters");
  if (!uppercase.test(password))
    errors.push("one uppercase letter");
  if (!lowercase.test(password))
    errors.push("one lowercase letter");
  if (!digit.test(password))
    errors.push("one number");
  if (!specialChar.test(password))
    errors.push("one special character");

  if (errors.length > 0) {
    error.textContent = "Password must contain " + errors.join(", ");
    error.style.display = "block";
    return false;
  }

  error.textContent = "";
  error.style.display = "none";
  return true;
}

function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value;
  const password = passwordInput.value;
  const error = confirmPasswordInput.parentElement.querySelector(".error-message");

  if (confirmPassword === "") {
    error.textContent = "Please confirm your password";
    error.style.display = "block";
    return false;
  }

  if (confirmPassword !== password) {
    error.textContent = "Passwords do not match";
    error.style.display = "block";
    return false;
  }

  error.textContent = "";
  error.style.display = "none";
  return true;
}

function clearErrors() {
  form.querySelectorAll(".error-message").forEach((el) => {
    el.textContent = "";
    el.style.display = "none";
  });
}
