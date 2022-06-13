console.log("login running");

const logInForm = document.getElementById("login-form");
logInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(logInForm));
  axios
    .post("/api/session", data)
    .then(() => (window.location = "/"))
    .catch((err) => (document.querySelector("#errors").innerHTML = err.response.data.message));
});
