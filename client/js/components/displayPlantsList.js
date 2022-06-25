function displayPlantsList() {
  const section = document.getElementById("plants-details");
  const div = document.getElementById("care-details");
  div.innerHTML = "";
  //
  const loadingTag = document.createElement("p");
  loadingTag.textContent = "loading";
  section.replaceChildren(loadingTag);
  //
  const heading = document.createElement("h1");
  heading.classList.add("header-greenhouseh1");

  //async
  sessionurl = "/api/session";
  const getUserid = async (sessionurl) => {
    try {
      const response = await axios(sessionurl);
      greenhouseurl = `/api/greenHouse/${response.data.id}`;
      const response2 = await axios(greenhouseurl);
      heading.textContent = `Take a walk through your greenhouse, ${response.data.name}`;
      const listElements = response2.data.map((plant) => displayPlant(plant, response.data.id));
      section.replaceChildren(heading, ...listElements);
    } catch (error) {
      const errormsg = document.createElement("p");
      errormsg.textContent = "You dont have any plants to display. Please add some plants.";
      section.replaceChildren(errormsg);
    }
  };
  getUserid(sessionurl);
}

function displayPlant(plant, userid) {
  console.log('userid', userid);
  const divEl = document.createElement("div");
  divEl.classList.add("plant");
  divEl.setAttribute("id", plant.id);
  divEl.setAttribute("data-greenhouseid", plant.greenhouseid);
  //
  const name = document.createElement("h2");
  name.textContent = plant.name;
  //
  const description = document.createElement("p");
  description.textContent = plant.description;
  //
  const image = document.createElement("img");
  image.classList.add("plant-image");
  image.src = plant.image;
  //
  const linkViewMore = document.createElement("a");
  linkViewMore.classList.add("see-more");
  linkViewMore.textContent = "See more";
  linkViewMore.href = "javascript:void(0)";
  //
  const deletePlantButton = document.createElement("p");
  deletePlantButton.setAttribute("id", "delete-plant");
  deletePlantButton.textContent = "delete";
  // delete plant function
  deletePlantButton.addEventListener("click", (event) => {
    event.preventDefault();
    const ghID = document.getElementById(plant.id);
    const greenhouseID = ghID.dataset.greenhouseid;
    axios.delete(`/api/greenhouse/${greenhouseID}`).then((response) => {
      displayPlantsList();
    });
  });
  //
  divEl.append(image, name, description, linkViewMore, deletePlantButton);
  linkViewMore.addEventListener("click", showPlantsDetails);
  return divEl;
}

function showPlantCareDetails() {
  let showCareDetails = document.createElement("linkViewMore");
  showCareDetails.addEventListener("click", (event) => {});
}
