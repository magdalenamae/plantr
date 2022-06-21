console.log("landing running");
const accountField = document.getElementById("landing");

function renderLanding() {
  //   console.log("success");
  accountField.innerHTML = "";
  const accountBar = document.createElement("div");
  accountBar.className = "account-bar";
  accountField.appendChild(accountBar);
  // heading
  const pageTitle = document.createElement("img");
  pageTitle.src = "./images/PLNTR.png"
  pageTitle.className = "page-title";
  accountBar.appendChild(pageTitle);

  // app info
  const greeting = document.createElement("p");
  greeting.setAttribute("id", "greeting");
  
  greeting.textContent =
    "A group project made by Ankita, Eleanor and Magdalena to help keep your plant buddies alive and track their progress";
  accountBar.appendChild(greeting);
  // links
  const accountNav = document.createElement("ul");
  accountNav.classList.add("account-nav");
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