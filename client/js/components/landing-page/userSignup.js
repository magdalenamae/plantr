console.log("signup running");
// fucntion to create the Sign Up form
function renderSignUpForm() {
  // getting body element from the html page
  const main = document.getElementById("sign-up-section");
  const page = document.getElementById("landing");
  page.innerHTML = "";
  const signUpDiv = document.createElement("div");
  signUpDiv.setAttribute("id", "signUpDiv");
  const heading = document.createElement("h1");
  heading.textContent = "Sign Up";
  heading.setAttribute("id", "signUpHeading");
  // creating form element
  const form = document.createElement("form");
  form.setAttribute('id', 'signUpForm');
  form.innerHTML = `
    <input type="text" name="name" placeholder="name" />
    <br>
    <input type="text" name="email" placeholder="email" autocomplete="off" />
    <br>
    <input type="password" name="password" placeholder="password" autocomplete="off" />
    <br>
    <br>
    <br>
    <button>Sign Up</button>
    `;
  main.innerHTML = "";
  main.append(signUpDiv)
  signUpDiv.append(heading, form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    newFormData = new FormData(form);

    const data = {
      name: newFormData.get("name"),
      email: newFormData.get("email"),
      password: newFormData.get("password"),
    };
    console.log(data);

    // sending form data to server/ database

    axios.post("/api/users", data).then(() => (window.location = "/greenhouse.html"));
  });
}
// axios.post("/api/users", data).then((response) => {
//   console.log("user saved", response);
// });
//deleted the below because we have this covered in server.js
// .catch((error) => {
//   console.error(error.status);
//   if (error.response.status === 400) {
//     const reason = error.response.data.message;
//     alert(reason);
//   } else {
//     alert("something went wrong");
//   }
// });
// });
// }
