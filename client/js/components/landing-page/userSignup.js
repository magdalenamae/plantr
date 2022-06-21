console.log("signup running");
// fucntion to create the Sign Up form
function renderSignUpForm() {
  // getting body element from the html page
  const main = document.getElementById("landing");
  const heading = document.createElement("h1");
  heading.textContent = "Sign Up";
  const form = document.createElement("form");
  form.innerHTML = `
    <input type="text" name="name" placeholder="name" />
    <input type="text" name="email" placeholder="email" autocomplete="off" />
    <input type="password" name="password" placeholder="password" autocomplete="off" />
    <button id="sign-up">Sign Up</button>
    `;
  main.replaceChildren(heading, form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    newFormData = new FormData(form);

    const data = {
      name: newFormData.get("name"),
      email: newFormData.get("email"),
      password: newFormData.get("password"),
    };

    // sending form data to server/ database

    axios.post("/api/users", data).then((response) => {
      renderLogin();
    });
  });
}
