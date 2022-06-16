console.log("signup running");
// fucntion to create the Sign Up form
function renderSignUpForm() {
  // getting body element from the html page
  const main = document.getElementById("landing");
  const heading = document.createElement("h1");
  heading.textContent = "Sign Up";
  // creating form element
  const form = document.createElement("form");
  form.innerHTML = `
    <input type="text" name="name" placeholder="name" />
    <input type="text" name="email" placeholder="email" autocomplete="off" />
    <input type="password" name="password" placeholder="password" autocomplete="off" />
    <button>Sign Up</button>
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
