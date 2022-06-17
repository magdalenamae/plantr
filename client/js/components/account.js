console.log("account running");
const navBar = document.getElementById("nav");

function accountInfo() {
  axios
    .get("/api/session")
    .then((response) => {
      console.log(response.data);
      const { name } = response.data;
      const userGreeting = document.createElement("p");
      userGreeting.setAttribute("id", "logininfo");
      navBar.appendChild(userGreeting);
      const loginInfo = document.getElementById("logininfo");
      loginInfo.textContent = `Logged in as ${name} `;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        console.log("not logged in");
        const loginInfo = document.getElementById("logininfo");
        loginInfo.textContent = ``;
        const loginLink = document.createElement("a");
        loginLink.href = "/login.html";
        loginLink.textContent = "login";
        loginInfo.appendChild(loginLink);
        return;
      }
      console.warn(err);
    });
}
