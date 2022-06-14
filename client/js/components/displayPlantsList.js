


function displayPlantsList(){
    const section = document.getElementById('plants-details')
    console.log("in display plants")
    const loadingTag = document.createElement('p')
    loadingTag.textContent = "loading"
    const userid = 2
    section.replaceChildren(loadingTag)
    const heading = document.createElement("h1")
    heading.classList.add('header-h1')
    heading.textContent ="Green House"
    axios
        .get(`/api/plants/${userid}`)
        .then((response)=>{
            console.log(response.data)
            const listElements = response.data.map((plant)=>displayPlant(plant,userid))
            console.log(listElements)
            section.replaceChildren(heading,...listElements)
        })
}
function displayPlant(plant,userid){
    const divEl = document.createElement('div')
    console.log(divEl)
    divEl.classList.add("plant")
    divEl.setAttribute('id',plant.id)
    const name = document.createElement('h2')
    name.textContent = plant.name
    const description = document.createElement('p') 
    description.textContent = plant.description
    const image = document.createElement("img")
    image.src = plant.image
    const linkViewMore = document.createElement('a')
    linkViewMore.classList
    linkViewMore.textContent ="View more"
    linkViewMore.href = 'javascript:void(0)'
    divEl.append(image,name,description,linkViewMore)
    linkViewMore.addEventListener('click',showPlantsDetails)
    return divEl
}