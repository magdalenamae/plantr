console.log("delete running");

function deletePlant() {
  axios.get("/api/greenhouse").then((response) => {
    response.data.map((greenhouseItem) => {
      const greenhouseID = greenhouseItem.id;
      console.log(greenhouseID);
      // axios.delete(`/api/greenhouse/${greenhouseID}`).then((response) => {
      //   // displayPlantsList();
      // });
    });
  });
}
