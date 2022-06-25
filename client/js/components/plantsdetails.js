function showPlantsDetails() {
  const page = document.getElementById("plants-details");
  page.innerHTML = "";
  const plantDiv = document.getElementById("care-details");
  plantDiv.classList.add("care-details");
  const id = this.parentElement.id;

  axios.get(`/api/care/${id}`).then((response) => {
    for (result of response.data) {
      careId = result.id;
      plantName = result.name;
      plantDescription = result.description;
      plantImage = result.image;
      water = result.water;
      light = result.light;
      humidity = result.humidity;
      soil = result.soil;
    }

    //create html elements
    //container
    const careDiv = document.createElement("div");
    careDiv.classList.add("care-div");
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");
    //head
    const head = document.createElement("h1");
    head.textContent = plantName;
    //body
    const careDesc = document.createElement("p");
    careDesc.classList.add("care-desc");
    careDesc.textContent = plantName + " needs the following care to thrive and be its best self";
    //image
    const img = document.createElement("img");
    img.src = plantImage;
    img.classList.add("care-img");
    //care details
    const careList = document.createElement("ul");
    careList.classList.add("care-list");
    const waterLi = document.createElement("li");
    waterLi.textContent = water + " water levels";
    const lightLi = document.createElement("li");
    lightLi.textContent = light + " light exposure";
    const humidityLi = document.createElement("li");
    humidityLi.textContent = humidity + " humidity levels";
    const soilLi = document.createElement("li");
    soilLi.textContent = soil + " soil";

    careList.append(waterLi, lightLi, humidityLi, soilLi);
    plantDiv.append(careDiv, imageDiv);
    careDiv.append(head, careDesc, careList);
    imageDiv.append(img);
  });
}

showPlantsDetails();
