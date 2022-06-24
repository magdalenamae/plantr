function renderHeader() {
  //view greenhouse
  const buttonGetPlants = document.getElementById("get-plants");
  buttonGetPlants.addEventListener("click", displayPlantsList);
  //add plant
  const addPlant = document.getElementById("add-plants");
  addPlant.addEventListener("click", (event) => {
    addNewPlant();
  });
  //display greetint
  accountInfo();
  //logout function to be added
  const logsOut = document.getElementById("logout");
  logsOut.addEventListener("click", (event) => {
    logout();
  });
}
