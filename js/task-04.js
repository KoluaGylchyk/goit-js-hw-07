// const loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const emailValue = loginForm.elements.email.value.trim();
//   const passwordValue = loginForm.elements.password.value.trim();

//   if (!emailValue || !passwordValue) {
//     alert("All form fields must be filled in");
//     return;
//   }

//   const formData = {
//     email: emailValue,
//     password: passwordValue,
//   };

//   console.log(formData);

//   loginForm.reset();
// });
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = loginForm.elements["email"];
    const passwordInput = loginForm.elements["password"];

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    // Reset the form
    loginForm.reset();
  });
});
