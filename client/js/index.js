console.log("initialised");
renderLanding();

// clicking the logo in the navbar reloads the page (need to add CSS)
const homeRefresh = document.getElementById("logo");
homeRefresh.addEventListener("click", (event) => {
  location.reload();
  //   renderLanding();
});

const runSignUp = document.getElementById("signup-link");
runSignUp.addEventListener("click", (event) => {
  renderSignUpForm();
});

const runLoginPage = document.getElementById("login-link");
runLoginPage.addEventListener("click", (event) => {
  renderLogin();
});
