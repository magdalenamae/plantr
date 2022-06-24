function renderLogin() {
  const main = document.getElementById("landing");

  let logInDiv = document.createElement("div");
  logInDiv.classList.add("login-div");
  let logInContentDiv = document.createElement("div");
  logInContentDiv.classList.add("login-content-div");
  //greeting
  const heading = document.createElement("h1");
  heading.classList.add("login-heading");
  heading.textContent = "Welcome back";
  const message = document.createElement("p");
  message.classList.add("login-message");
  message.textContent = "Dont have an account?";
  //switch to signup
  const signupMessage = document.createElement("span");
  signupMessage.setAttribute("id", "switchSignup");
  signupMessage.textContent = "Sign up";
  message.append(signupMessage);
  message.addEventListener("click", (event) => {
    console.log("click");
    main.innerHTML = "";
    renderSignUpForm();
  });
  //form element
  const form = document.createElement("form");
  form.setAttribute("id", "login-form");
  form.innerHTML = `    
    <input type="text" id='email' name="email" placeholder="Email" autocomplete="off" />
    <br>
    <br>
    <input type="password" id='password' name="password" placeholder="Password" autocomplete="off" />
    <br>
    <br>
    <button id="login-btn" name="login">Log in</button>
    `;

  logInDiv.append(logInContentDiv);
  logInContentDiv.append(heading, message, form);
  main.replaceChildren(logInDiv);

  const logInForm = document.getElementById("login-form");
  logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(logInForm));
    axios
      .post("/api/session", data)
      .then(() => (window.location = "/greenhouse.html"))
      .catch((err) => (document.getElementById("errors").innerHTML = err.response.data.message));
  });
}
