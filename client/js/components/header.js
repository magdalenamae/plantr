console.log('hi')
function renderHeader(){
    
    const buttonGetPlants = document.getElementById("get-plants")
    console.log(buttonGetPlants)
    buttonGetPlants.addEventListener('click',displayPlantsList)
}
