function toggleForm() {
    const userForm = document.getElementById("loginForm");
    const adminForm = document.getElementById("adminForm");
  
    userForm.classList.toggle("animated");
    adminForm.classList.toggle("animated");
  
    setTimeout(() => {
      userForm.style.display = userForm.style.display === "none" ? "block" : "none";
      adminForm.style.display = adminForm.style.display === "none" ? "block" : "none";
    }, 400);
  }
  
  function login() {
    window.location.href = 'index.html';
  }

  // Example login logic in login.html
// function login() {
//     var employeeId = document.getElementById("employeeId").value;
//     var userRole = "employee"; // Set the user role based on your criteria (e.g., employee or admin)

//     // Redirect to the appropriate dashboard with the user role
//     // window.location.href = "admin.html?user=" + employeeId + "&role=" + userRole;
// }

  
  function adminLogin() {
    window.location.href = 'admin.html';
  }
  