function renderManualAdd() {
  const section = document.getElementById("plants-details");

  // creating form element
  const addDiv = document.createElement("div");
  addDiv.setAttribute("id", "manual-add");
  const form = document.createElement("form");
  form.setAttribute("id", "manual-add-form");
  form.innerHTML = `
    <input type="text" name="name" placeholder="Plant type" />
    <br>
    <input type="text" name="image" placeholder="Attach an image" autocomplete="off" />
    <br>
    <textarea name="description" placeholder="And a short description"></textarea>
    <br>
    <br>
    <br>
    <button id="btn-manual-add">Plant in greenhouse</button>
    `;
  section.innerHTML = "";
  section.append(addDiv);
  addDiv.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    newFormData = new FormData(form);

    const data = {
      name: newFormData.get("name"),
      image: newFormData.get("image"),
      description: newFormData.get("description"),
    };

    // sending data to server/database
    axios.post("/api/plants", data).then((response) => {
      section.innerHTML = "";
      addNewPlant();
    });
  });
}
