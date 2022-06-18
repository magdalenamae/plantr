function logout() {
  axios.delete("/api/session").then(() => (window.location = "/"));
}
