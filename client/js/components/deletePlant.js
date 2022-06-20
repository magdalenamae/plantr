// // console.log("delete running");

// function deletePlant() {
//   const ghID = document.getElementById(plant.id);
//   const greenhouseID = ghID.dataset.greenhouseid;
//   console.log(greenhouseID);
//   axios.get("/api/greenhouse").then((response) => {
//     response.data.map((greenhouseItem) => {
//       const greenhouseID = greenhouseItem.dataset;
//       console.log(greenhouseID);
//       axios.delete(`/api/greenhouse/${greenhouseID}`).then((response) => {
//         displayPlantsList();
//       });
//     });
//   });
// }
