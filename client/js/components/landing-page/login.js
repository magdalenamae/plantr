console.log("login running");

function renderLogin() {
  const main = document.getElementById("landing");

  let logInDiv = document.createElement("div");
  logInDiv.classList.add("login-div");
  let logInContentDiv = document.createElement("div");
  logInContentDiv.classList.add("login-content-div");
  const heading = document.createElement("h1");
  heading.classList.add("login-heading");
  heading.textContent = "Welcome back";
  const form = document.createElement("form");
  const message = document.createElement("p");
  message.classList.add("login-message");
  message.textContent = "Dont have an account?";
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

  form.setAttribute('autocomplete', 'off');



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

// const logInBtn = document.getElementById('login-btn');

// logInBtn.addEventListener('click', function onClick(event) {
//   const input = document.getElementById('email');
//   const inputTwo = document.getElementById('password');
//   let color = '#7E8285';
//   input.style.backgroundColor = color;
//   inputTwo.style.backgroundColor = color;
//   console.log('login button clicked');

// });
