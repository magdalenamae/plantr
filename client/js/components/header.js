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
    const addForm = document.getElementById("plants-details");
    //form to be added in
    addForm.textContent = "add your plant";
  });

  //logout function to be added
}
