console.log("landing running");
const accountField = document.getElementById("landing");

function renderLanding() {
  //   console.log("success");
  accountField.innerHTML = "";
  const accountBar = document.createElement("div");
  accountBar.className = "account-bar";
  accountField.appendChild(accountBar);
  // heading
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "PLNTR";
  accountBar.appendChild(pageTitle);
  // app info
  const greeting = document.createElement("p");
  greeting.setAttribute("id", "greeting");
  
  greeting.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde sequi facilis, voluptate pariatur doloremque hic nobis magni ipsam esse quaerat autem quo explicabo consectetur rerum quas minima quod eius! Consequatur, explicabo laudantium enim culpa quidem maiores cupiditate quisquam voluptas?";
  accountBar.appendChild(greeting);
  // links
  const accountNav = document.createElement("ul");
  accountBar.appendChild(accountNav);
  // list items
  const addUser = document.createElement("li");
  addUser.textContent = "sign up";
  addUser.className = "links";
  addUser.setAttribute("id", "signup-link");
  accountNav.appendChild(addUser);
  const login = document.createElement("li");
  login.textContent = "login";
  login.className = "links";
  login.setAttribute("id", "login-link");
  accountNav.appendChild(login);
}
