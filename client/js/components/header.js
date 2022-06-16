console.log("header running");
function renderHeader() {
  //view greenhouse
  const buttonGetPlants = document.getElementById("get-plants");
  console.log(buttonGetPlants);
  buttonGetPlants.addEventListener("click", displayPlantsList);

  //add plant
  const addPlant = document.getElementById("add-plants");
  console.log("added plants");
  addPlant.addEventListener("click", (event) => {
  console.log("success");
  addNewPlant();
  });

  //logout function to be added
}
