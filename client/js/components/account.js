const navBar = document.getElementById("nav");

function accountInfo() {
  axios
    .get("/api/session")
    .then((response) => {
      const userName = response.data.name;
    })
    .catch((err) => {
      if (err.response.status === 401) {     
        const loginLink = document.createElement("a");
        loginLink.href = "/";
        loginLink.textContent = "Login or create an account to view your Greenhouse";
        loginInfo.appendChild(loginLink);
        return;
      }
    });
}
