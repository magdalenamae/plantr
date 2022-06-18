console.log("login running");

function renderLogin() {
  const main = document.getElementById("landing");
  const heading = document.createElement("h1");
  heading.textContent = "Login";
  const form = document.createElement("form");
  form.setAttribute("id", "login-form");
  form.innerHTML = `    
    <input type="text" name="email" placeholder="email" autocomplete="off" />
    <input type="password" name="password" placeholder="password" autocomplete="off" />
    <button>Log in</button>
    `;
  main.replaceChildren(heading, form);

  const logInForm = document.getElementById("login-form");
  logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(logInForm));
    console.log("this is the data: ", data);
    axios
      .post("/api/session", data)
      .then(() => (window.location = "/greenhouse.html"))
      .catch((err) => (document.getElementById("errors").innerHTML = err.response.data.message));
  });
}
