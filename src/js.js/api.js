function configuracion(metodo, data) {
  return {
    method: metodo,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  };
}

async function get() {
  const response = await fetch(
    "http://localhost:3000/api/task",
    configuracion("GET")
  );
  const tasks = await response.json();
  return tasks;
}

async function getById(id) {
  const response = await fetch(
    "http://localhost:3000/api/task/" + id,
    configuracion("GET")
  );
  const tasks = await response.json();
  return tasks;
}

async function post(task) {
  const response = await fetch(
    "http://localhost:3000/api/task",
    configuracion("POST", task)
  );
  const postedTask = await response.json();
  return postedTask;
}
async function borrarTarea(id) {
  const response = await fetch(
    "http://localhost:3000/api/task/" + id,
    configuracion("DELETE")
  );
  const tareaBorrada = await response.json();
  return tareaBorrada;
}

export { post, borrarTarea, get, getById };

// si las tareas estan en el li.id se podria el id para borrar.
// tomar respuesta 2
