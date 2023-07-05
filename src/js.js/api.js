async function get() {
  const response = await fetch("http://localhost:3000/api/task/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  const postTask = await response.json();
  return postTask;
}

async function getById(id) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postTask = await response.json();
  return postTask;
}

async function post(task) {
  const response = await fetch("http://localhost:3000/api/task/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const postTask = await response.json();
  return postTask;
}

async function borrarTarea(id) {
  console.log(id);
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const postTask = await response.json();
  return postTask;
}

async function put(id) {    //nuevafuncion para metodo put//
  const response = await fetch("http://localhost:3000/api/task/ " + id, {
    method: " PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",      
    },
    
  });
  const postTask = await response.json();
  return postTask;
}

export { post, borrarTarea, get, getById, put};

// si las tareas estan en el li.id se podria el id para borrar.
// tomar respuesta 2
