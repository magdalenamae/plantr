// // const { default: axios } = require("axios");

// const { default: axios } = require("axios");

function addNewPlant() {
  console.log("in add plants");
  const addForm = document.getElementById("plants-details");
  //form to be added in

  addForm.textContent = "add your plant";

  const section = document.getElementById("plants-details");

  const careSection = document.getElementById("care-details");
  careSection.innerHTML = "";

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
    ///**************fix for search appending search result */
    let showPlant;

    if ((showPlant = document.querySelector(".show-plants"))) {
      showPlant.innerHTML = "";
    } else {
      showPlant = document.createElement("div");
      showPlant.classList.add("show-plants");
      section.appendChild(showPlant);
    }
    // *************************END**************************
    const articleTag = document.createElement("article");

    axios
      .get(`/api/plants/${searchedPlant}`)

      .then((response) => {
        if (response.data.length != 0) {
          console.log(response);
          const addPlantsToGreenHouseButton = document.createElement("button");
          addPlantsToGreenHouseButton.textContent = "add";
          addPlantsToGreenHouseButton.setAttribute("id", "add-plnts-GreenHouse");
          //add button triggers another Axios  to add plants to user's greenhouse
          addPlantsToGreenHouseButton.addEventListener("click", addPlantsToGreenhhouse);

          console.log(response.data);
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
  console.log(divEl);
  divEl.classList.add("select-plant");
  //create checkbox
  const selectCheckBox = document.createElement("input");
  selectCheckBox.type = "checkbox";
  selectCheckBox.setAttribute("id", plant.id);
  const name = document.createElement("h2");
  name.textContent = plant.name;
  const description = document.createElement("p");
  description.textContent = plant.description;
  const image = document.createElement("img");
  image.src = plant.image;
  divEl.append(selectCheckBox, image, name, description);
  return divEl;
}

function addPlantsToGreenhhouse() {
  const checkedCheckBox = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(checkedCheckBox);

  //to get the session user id from the session api and set it to user_id
  sessionurl = "/api/session";
  const getUserid = async (sessionurl) => {
    try {
      const response = await axios(sessionurl);
      console.log("response.data", response.data);
      const plant_idArray = [];
      const data = {
        name: response.data.name,
        userid: response.data.id,
        plantid: plant_idArray,
      };
      checkedCheckBox.forEach((el) => {
        plant_idArray.push(el.id);
      });
      console.log(data);
      axios.post("/api/greenhouse", data).then((response) => {
        console.log(response);
        displayPlantsList();
      });
      // }
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
  getUserid(sessionurl);
}
