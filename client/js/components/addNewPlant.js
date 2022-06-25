function addNewPlant() {
  const addForm = document.getElementById("plants-details");
  addForm.textContent = "add your plant";
  const section = document.getElementById("plants-details");
  const careSection = document.getElementById("care-details");
  careSection.innerHTML = "";

  //form to be added in
  const formEl = document.createElement("form");
  formEl.setAttribute("id", "search-plant");
  const heading = document.createElement("h1");
  heading.textContent = " Add New Plant";
  formEl.innerHTML = `
    <br>
    <label for="name">Name</label>
    <input type="text" name="name" id ='search-inp'>
    <button id ="add-pl-submit-btn" >Search</button>
    `;

  section.replaceChildren(formEl);
  const searchButton = document.getElementById("add-pl-submit-btn");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputSearch = document.getElementById("search-inp");
    const searchedPlant = inputSearch.value;
    let showPlant;

    if ((showPlant = document.querySelector(".show-plants"))) {
      showPlant.innerHTML = "";
    } else {
      showPlant = document.createElement("div");
      showPlant.classList.add("show-plants");
      section.appendChild(showPlant);
    }
    const articleTag = document.createElement("article");

    axios
      .get(`/api/plants/${searchedPlant}`)

      .then((response) => {
        if (response.data.length != 0) {
          const addPlantsToGreenHouseButton = document.createElement("button");
          addPlantsToGreenHouseButton.textContent = "add";
          addPlantsToGreenHouseButton.setAttribute("id", "add-plnts-GreenHouse");
          //add button triggers another Axios  to add plants to user's greenhouse
          addPlantsToGreenHouseButton.addEventListener("click", addPlantsToGreenhhouse);
          const listElements = response.data.map((plant) => selectPlantsToAdd(plant));
          showPlant.replaceChildren(addPlantsToGreenHouseButton, ...listElements);
        } else {
          showPlant.textContent = "No plants to display";
        }
      });
  });
}

function selectPlantsToAdd(plant) {
  const divEl = document.createElement("div");
  divEl.classList.add("select-plant");
  //create checkbox
  const selectCheckBox = document.createElement("input");
  selectCheckBox.type = "checkbox";
  selectCheckBox.setAttribute("id", plant.id);
  //plant info
  const name = document.createElement("h2");
  name.textContent = plant.name;
  const description = document.createElement("p");
  description.textContent = plant.description;
  //plant img
  const image = document.createElement("img");
  image.src = plant.image;
  divEl.append(selectCheckBox, image, name, description);
  return divEl;
}

function addPlantsToGreenhhouse() {
  const checkedCheckBox = document.querySelectorAll('input[type="checkbox"]:checked');

  //to get the session user id from the session api and set it to user_id
  sessionurl = "/api/session";
  const getUserid = async (sessionurl) => {
    try {
      const response = await axios(sessionurl);
      const plant_idArray = [];
      const data = {
        name: response.data.name,
        userid: response.data.id,
        plantid: plant_idArray,
      };
      checkedCheckBox.forEach((el) => {
        plant_idArray.push(el.id);
      });
      axios.post("/api/greenhouse", data).then((response) => {
        displayPlantsList();
      });
    } catch (error) {}
  };
  getUserid(sessionurl);
}
