import { post, borrarTarea, getById, get, updateTask } from "./api.js";

let input = document.getElementById("tareaaña");
let ol = document.querySelector(".listat");
let vacio = document.querySelector(".fondot");
let contador = document.getElementById("contador");
let listaElementos = [];

async function cargartareas() {
  let tareas = await get();
  tareas.forEach((tarea) => {
    crearTareas(tarea.id, tarea.task);
  });
}

function crearTareas(id, text) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  let text3 = text.charAt(0).toUpperCase() + text.slice(1);
  p.textContent = text3;
  p.className = "nombre";
  li.appendChild(p);
  li.appendChild(borrar());
  li.appendChild(Check());
  li.className = "registro-linea";
  li.id = id;
  ol.appendChild(li);
}

let ListaAgregar = async (e) => {
  e.preventDefault();
  let text2 = input.value.toLowerCase().trim();
  let task = { task: text2, check: false };
  //objeto//
  // crearTareas(respuesta.id, respuesta.task);
  let text3 = text2.charAt(0).toUpperCase() + text2.slice(1);
  let repite = false;
  let elementos = document.querySelectorAll("li"); //nos devuelve una lista de elemento que cumplen con la condiccion, todos los elementos que sean li.
  for (let i = 0; i < elementos.length; i++) {
    let tarea = elementos[i].querySelector("p");
    if (tarea.textContent === text3) {
      repite = true;
      break;
    }
  }
  if (repite) {
    alert("Ingrese un tarea no repetida");
  } else {
    if (text2 !== "") {
      let respuesta = await post(task);
      crearTareas(respuesta.id, respuesta.task);
      input.value = "";
      vacio.style.display = "none";
    } else {
      alert("Ingrese un texto");
    }
  }
};

function borrar() {
  let borrartext = document.createElement("button");
  let icono = document.createElement("a");
  icono.className = "fa-solid fa-trash-can fa-bounce";
  borrartext.className = "asd";
  borrartext.appendChild(icono);

  borrartext.addEventListener("click", function (e) {
    let item = e.currentTarget.parentElement;
    let diff = item.id;
    borrarTarea(item.id); //api//
    item.remove();

    if (diff == "check") {
      contador.textContent--;
    }
    let items = document.querySelectorAll("li");
    if (items.length === 0) {
      vacio.style.display = "block";
    }
  });
  return borrartext;
}

function Check() {
  let confirmartext = document.createElement("button");
  let iconocheck = document.createElement("a");
  iconocheck.className = "fa-solid fa-check-double fa-bounce";
  confirmartext.className = "asd";
  confirmartext.appendChild(iconocheck);

  confirmartext.addEventListener("click", async (e) => {
    let item = e.currentTarget.parentElement;
    let diff = item["data-check"];
    if (diff == "check") {
      item["data-check"] = "State";
      contador.textContent--;
      item.style = "background-color: #f5f5f5";
      await updateTask(item.id, { check: false });
    } else {
      item["data-check"] = "check";
      contador.textContent++;
      item.style = "background-color: rgb(136, 145, 201);";
      await updateTask(item.id, { check: true });
    }
  });
  return confirmartext;
}

export { ListaAgregar, cargartareas };
