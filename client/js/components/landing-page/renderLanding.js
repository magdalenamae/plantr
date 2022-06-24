const accountField = document.getElementById("landing");
const footer = document.getElementById("made-by");

function renderLanding() {
  accountField.innerHTML = "";
  const accountBar = document.createElement("div");
  accountBar.className = "account-bar";
  accountField.appendChild(accountBar);
  // heading
  const pageTitle = document.createElement("img");
  pageTitle.src = "./images/PLNTR.png";
  pageTitle.className = "page-title";
  accountBar.appendChild(pageTitle);
  // app info
  const greeting = document.createElement("p");
  greeting.setAttribute("id", "greeting");
  greeting.textContent = "Help your plants thrive and cultivate the best environment with PLNTR";
  accountBar.appendChild(greeting);
  // links
  const accountNav = document.createElement("ul");
  accountNav.classList.add("account-nav");
  accountBar.appendChild(accountNav);
  // account option items
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
  //footer
  const attrib = document.createElement("p");
  attrib.classList.add("footer-field");
  attrib.textContent = "A group project by Ankita, Eleanor and Magdalena";
  footer.appendChild(attrib);
}
