function showPlantsDetails(){
    const page = document.getElementById('plants-details')
    page.innerHTML = ''
    const plantDiv = document.getElementById('care-details')
    plantDiv.classList.add('care-details')
    const id =  this.parentElement.id
    console.log("id",id)
    

    axios.get(`/api/care/${id}`)
    .then((response) => {
       console.log(response.data)
       
       for (result of response.data){
        careId = result.id
        plantName = result.name
        plantDescription = result.description
        plantImage = result.image
        water = result.water
        light = result.light
        humidity = result.humidity
        soil = result.soil

        console.log(id,plantName)
        
       }
       const careDiv = document.createElement('div')
       careDiv.classList.add('care-div')
       const imageDiv = document.createElement('div')
       imageDiv.classList.add('image-div')
       const head = document.createElement('h1')
       head.textContent = plantName
      
       const careDesc = document.createElement('p')
       careDesc.classList.add('care-desc')
       careDesc.textContent = plantName + ' needs the following care to thrive and be its best self'
       const img = document.createElement('img')
       img.src = plantImage
       img.classList.add('care-img')
       const careList = document.createElement('ul')
       careList.classList.add('care-list')
         const waterLi = document.createElement('li')
             waterLi.textContent = water + ' water levels'
         const lightLi = document.createElement('li')
            lightLi.textContent = light + ' light exposure'
         const humidityLi = document.createElement('li')
            humidityLi.textContent = humidity + ' humidity levels'
        const soilLi = document.createElement('li')
            soilLi.textContent = soil + ' soil'
       
       careList.append(waterLi,lightLi,humidityLi,soilLi) 
       plantDiv.appendChild(careDiv)
       careDiv.append(head,img,careDesc, careList)
    })
   
    // axios
    // .get(`/api/plants/${plant}`)
    // .then((response)=>{
    //     console.log(response.data)
    //     const listElements = response.data.map((plant)=>displayPlant(plant))
    //     console.log(listElements)
    //     section.replaceChildren(heading,...listElements)
    // })
}

showPlantsDetails()
