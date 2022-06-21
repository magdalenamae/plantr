console.log("initialised");

renderLanding();

// clicking the logo in the navbar reloads the page (need to add CSS)
const homeRefresh = document.getElementById("landing-logo");
homeRefresh.addEventListener("click", (event) => {
  location.reload();
  //   renderLanding();
});

const runSignUp = document.getElementById("signup-link");
runSignUp.addEventListener("click", (event) => {
  renderSignUpForm();
});

const runLogin = document.getElementById("login-link");
runLogin.addEventListener("click", (event) => {
  renderLogin();
});
