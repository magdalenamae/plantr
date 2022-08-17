function renderSignUpForm() {
  const main = document.getElementById("sign-up-section");
  const page = document.getElementById("landing");
  page.innerHTML = "";
  const signUpDiv = document.createElement("div");
  signUpDiv.setAttribute("id", "signUpDiv");
  //page copy
  const heading = document.createElement("h1");
  heading.textContent = "Get Started";
  heading.setAttribute("id", "signUpHeading");
  const signUpMessage = document.createElement("p");
  signUpMessage.setAttribute("id", "signUp-msg");
  signUpMessage.textContent = "Already have an account?";
  const loginMessage = document.createElement("span");
  //switch to login page
  loginMessage.setAttribute("id", "switchLogin");
  loginMessage.textContent = "Log in";
  signUpMessage.append(loginMessage);
  signUpMessage.addEventListener("click", (event) => {
    main.innerHTML = "";
    renderLogin();
  });

  // creating form element
  const form = document.createElement("form");
  form.setAttribute("id", "signUpForm");
  form.innerHTML = `
    <input type="text" name="name" placeholder="Name" />
    <br>
    <input type="text" name="email" placeholder="Email" autocomplete="off" />
    <br>
    <input type="password" name="password" placeholder="Password" autocomplete="off" />
    <br>
    <br>
    <br>
    <button id="sign-up">Sign Up</button>
    `;
  main.innerHTML = "";
  main.append(signUpDiv);
  signUpDiv.append(heading, signUpMessage, form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    newFormData = new FormData(form);

    const data = {
      name: newFormData.get("name"),
      email: newFormData.get("email"),
      password: newFormData.get("password"),
    };

    // sending data to server/database
    axios.post("/api/users", data).then((response) => {
      console.log(response ,'response')
      console.log(data, 'data')
      main.innerHTML = "";
      renderLogin();
    });
  });
}
