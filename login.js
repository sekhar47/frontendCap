
function login() {
  const usernameInput = document.querySelector('#loginForm input[type="text"]');
  const passwordInput = document.querySelector('#loginForm input[type="password"]');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "11111" && password === "pass") {
    window.location.href = 'index.html';
    // You can add additional logic or alerts if needed
  } else if (username === "11100" && password === "pass") {
    window.location.href = 'admi.html';
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
function forgotPassword() {
  // Hide the login form
  const loginForm = document.getElementById("loginForm");
  loginForm.style.display = "none";

  // Show the forgot password form
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  forgotPasswordForm.style.display = "block";
}

function sendResetLink() {
  // Add logic to send a reset link to the provided email
  alert("Reset link sent to your email.");
}

function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");

  loginForm.classList.toggle("animated");
  forgotPasswordForm.classList.toggle("animated");

  setTimeout(() => {
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    forgotPasswordForm.style.display = forgotPasswordForm.style.display === "none" ? "block" : "none";
  }, 400);
}

// Add your existing login() function here


// function login() {
//     var employeeId = document.getElementById("employeeId").value;
//     var userRole = "employee"; // Set the user role based on your criteria (e.g., employee or admin)

//     // Redirect to the appropriate dashboard with the user role
//     // window.location.href = "admin.html?user=" + employeeId + "&role=" + userRole;
// 