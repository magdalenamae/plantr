const navBar = document.getElementById("nav");

function accountInfo() {
  axios
    .get("/api/session")
    .then((response) => {
      const userName = response.data.name;
      const userGreeting = document.getElementById("logininfo");
      userGreeting.textContent = `Logged in as ${userName} `;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        const loginInfo = document.getElementById("logininfo");
        loginInfo.textContent = ``;
        const loginLink = document.createElement("a");
        loginLink.href = "/";
        loginLink.textContent = "Login or create an account to view your Greenhouse";
        loginInfo.appendChild(loginLink);
        return;
      }
    });
}
