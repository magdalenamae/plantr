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
  message.textContent = "Dont have an account? Sign up";
  form.setAttribute("id", "login-form");
  form.innerHTML = `    
    <input type="text" id='email' name="email" placeholder="email" autocomplete="off" />
    <br>
    <br>
    <input type="password" id='password' name="password" placeholder="password" autocomplete="off" />
    <br>
    <br>
    <button>Log in</button>
    `;
 
  logInDiv.append(logInContentDiv);
  logInContentDiv.append(heading, message,form);
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
