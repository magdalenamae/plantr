
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
  


//

//
// const userid =23
//api session
// axios.get(`/api/session`)
//   .then((response)=>{
//   console.log("in session")
//     console.log(response.data.id,"session")
//      let userid = response.data.id
//      console.log(userid)
//     //  useridfromsession = userid
//     })
//     // console.log(useridfromsession)

// // console.log(sessionUserid,"sessionUserid,")
//   axios.get(`/api/greenHouse/${userid}`)
//   .then((response) => {
//     console.log(response.data);
    
//     const listElements = response.data.map((plant) => displayPlant(plant, userid));
//     console.log(listElements);
//     section.replaceChildren(heading, ...listElements);
//   })
//   .catch((error)=>{
//     console.log(error.response)
//     const errormsg = document.createElement('p')
//     errormsg.textContent = "You dont have any plants to display. Please add some plants."
//     section.replaceChildren(errormsg)
//   })
 
// }

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
//********************* */
function displayPlant(plant, userid) {
  const divEl = document.createElement("div");
  console.log(divEl);
  divEl.classList.add("plant");
  divEl.setAttribute("id", plant.id);
  divEl.setAttribute("dataset-greenhouseid",plant.greenhouseid)
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
  divEl.append(image, name, description, linkViewMore);
  linkViewMore.addEventListener("click", showPlantsDetails);
  return divEl;
}



 plantcareDetails()