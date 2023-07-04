// function configuracion(metodo, data) {
//   return {
//     method: metodo,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify(data),
//   };
// }
//   function post(tarea) {
//    fetch("http://localhost:3000/api/task",configuracion("POST",tarea) ) //tarea solo "POST"y "PUT"
//      .then((response) => response.json()) //cambiarlo
//      .then((response) => console.log(JSON.stringify(response)));
//  }

async function post(task) {
  const response = await fetch("http://localhost:3000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postedTask = await response.json();
  return postedTask;
}
async function borrar(task) {
  const response = await fetch("http://localhost:3000/api/task/<task_id>", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postedTask = await response.json();
  return postedTask;
}




export { post, borrar};
