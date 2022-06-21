// const res = require("express/lib/response");

function displayPlantsList() {
  console.log('in display plant list')
  const section = document.getElementById("plants-details");
  console.log("in display plants");
  const div = document.getElementById("care-details");
  div.innerHTML =''
  //
  const loadingTag = document.createElement("p");
  loadingTag.textContent = "loading";
  //
  // const userid = 4;
  section.replaceChildren(loadingTag);
  //
  const heading = document.createElement("h1");
  heading.classList.add("header-h1");
  heading.textContent = "Green House";

//********************* CODE FOr async wait ti get data grom green house for the logged in user*/

sessionurl = 'http://localhost:3000/api/session'
const getUserid = async(sessionurl)=>{
  try {
    const response =await axios(sessionurl);
    console.log('response.data',response.data)
    greenhouseurl =`/api/greenHouse/${response.data.id}`
    console.log(greenhouseurl)
    const response2 = await axios(greenhouseurl)
    console.log('response2 data',response2)

    const listElements = response2.data.map((plant) => displayPlant(plant, response.data.id));
    console.log(listElements);
    section.replaceChildren(heading, ...listElements);
  }catch(error){
    console.log(error)
    console.log(error.response)
    const errormsg = document.createElement('p')
    errormsg.textContent = "You dont have any plants to display. Please add some plants."
    section.replaceChildren(errormsg)
  }
}

getUserid(sessionurl)
}
function displayPlant(plant, userid) {
  const divEl = document.createElement("div");
  console.log(divEl);
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
  image.classList.add('plant-image');
  image.src = plant.image;
  //
  const linkViewMore = document.createElement("a");
  linkViewMore.classList;
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
    console.log(greenhouseID);
    axios.delete(`/api/greenhouse/${greenhouseID}`).then((response) => {
      console.log("deleted ", response);
      displayPlantsList();
    });
  });
  //
  divEl.append(image, name, description, linkViewMore, deletePlantButton);
  linkViewMore.addEventListener("click", showPlantsDetails);
  //   deletePlantButton.addEventListener("click", deletePlant);
  return divEl;
}

function showPlantCareDetails() {
  let showCareDetails = document.createElement("linkViewMore");
  console.log("hello world, this is the showPlantCareDetails function");
  showCareDetails.addEventListener("click", (event) => {
    // axios event to get care details that match the plant id
    // render the care details with the plant name and description and image
    //add catch details to the axios event
  });
}

plantcareDetails();

// plantcareDetails();
