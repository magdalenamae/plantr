// const { default: axios } = require("axios");

// const res = require("express/lib/response");

function displayPlantsList() {
  const section = document.getElementById("plants-details");
  console.log("in display plants");
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
  


// let Wuserid = getUser()
// console.log(Wuserid,"Wuserid")
// async function getUser() { // make function asynchronous
//   URL = 'http://localhost:3000/api/session'
//   const results = await axios.get(URL).then(response => { //set await so that when the function is called it knows that a promise is coming
//   console.log(response.data)
//   if (response.data.id) { //checks if user is logged in as there are still "sessions" albeit with null info in them when you log out
//       console.log(response.data.id)
//       return response.data.id
//   }
// })}





//api session
axios.get(`/api/session`)
  .then((response)=>{
  console.log("in session")
    console.log(response.data.id,"session")
     let userid = response.data.id
     console.log(userid)
  
// console.log(sessionUserid,"sessionUserid,")
  axios.get(`/api/greenHouse/${userid}`)
  .then((response) => {
    console.log(response.data);
    
    const listElements = response.data.map((plant) => displayPlant(plant, userid));
    console.log(listElements);
    section.replaceChildren(heading, ...listElements);
  });
 
  
})
.catch((response)=>{
  console.log(response)
  if(response.status ===500){
  console.log("Yor dont have any plants in your Green House. Please add some")
  }
})
}

function displayPlant(plant, userid) {
  const divEl = document.createElement("div");
  console.log(divEl);
  divEl.classList.add("plant");
  divEl.setAttribute("id", plant.id);
  // 
  const name = document.createElement("h2");
  name.textContent = plant.name;
  //
  const description = document.createElement("p");
  description.textContent = plant.description;
  //
  const image = document.createElement("img");
  image.src = plant.image;
  //
  const linkViewMore = document.createElement("a");
  linkViewMore.classList;
  linkViewMore.textContent = "See more";
  linkViewMore.href = "javascript:void(0)";
  //
  divEl.append(image, name, description, linkViewMore);
  linkViewMore.addEventListener("click", showPlantsDetails);
  return divEl;
}

 function showPlantCareDetails(){
  let showCareDetails = document.createElement("linkViewMore");
  console.log('hello world, this is the showPlantCareDetails function');
  showCareDetails.addEventListener("click", (event) => {
    // axios event to get care details that match the plant id 
    // render the care details with the plant name and description and image 
    //add catch details to the axios event
  });
 }

 plantcareDetails()