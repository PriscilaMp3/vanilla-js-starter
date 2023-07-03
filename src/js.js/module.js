
// Inserte el código aquí
let input = document.getElementById("tareaaña");
let ol = document.querySelector(".listat");
let vacio = document.querySelector(".fondot");
let contador = document.getElementById("contador");
let listaElementos = [];

let datosGuardados = localStorage.getItem("datosGuardados");
let datos = JSON.parse(datosGuardados);

let listaGuardada = localStorage.getItem("listaGuardada");
let listaElementos2 = JSON.parse(listaGuardada);
if (listaElementos2 && listaElementos2.length > 0) {
  listaElementos2.forEach(function (elemento) {
    let list = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = elemento.parrafo;
    p.className = "nombre";
    list.appendChild(p);
    list.appendChild(borrar());
    list.appendChild(Check());
    list.className = "registro-linea";
    list.id = "check";
    list.style = "background-color: rgb(136, 145, 201);";
    ol.appendChild(list);
  });
} else {
  console.log("La lista está vacía.");
  listaElementos2 = [];
}

if (listaElementos2 && listaElementos2.length) {
  contador.textContent = datos.contador;
} else {
  console.log("La lista está vacía.");
}
let ListaAgregar=(e) => {
    e.preventDefault();
    let text2 = input.value.toLowerCase();
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
        const li = document.createElement("li");
        const p = document.createElement("p");
        let text3 = text2.charAt(0).toUpperCase() + text2.slice(1);
        p.textContent = text3;
        p.className = "nombre";
        li.appendChild(p);
        li.appendChild(borrar());
        li.appendChild(Check());
        li.className = "registro-linea";
        li.id = "state";
        ol.appendChild(li);
  
        input.value = "";
        vacio.style.display = "none";
      } else {
        alert("Ingrese un texto");
      }
    }
  }

function borrar() {
  let borrartext = document.createElement("button");
  let icono = document.createElement("a");
  icono.className = "fa-solid fa-trash-can fa-bounce";
  borrartext.className = "asd";
  borrartext.appendChild(icono);

  borrartext.addEventListener("click", function (e) {
    //cuando se usa taregt el padre en este caso era el boton, porque el evento venia del icono,
    //y a veces el padre era el li porque el evento venia del boton.
    //con current target el vento siempre venia del boton.

    let item = e.currentTarget.parentElement;
    let diff = item.id;
    item.remove();
    if (diff == "check") {
      contador.textContent--;

      let datos = {
        contador: contador.textContent,
      };
      let datosJSON = JSON.stringify(datos);
      localStorage.setItem("datosGuardados", datosJSON);

      let Parr = item.textContent;
      listaElementos = listaElementos2;
      let index = listaElementos.find((elemento) => elemento.parrafo === Parr);
      if (index !== -1) {
        listaElementos.splice(index, 1);
        let listaJSON = JSON.stringify(listaElementos);
        localStorage.setItem("listaGuardada", listaJSON);
      }
    } else {
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

  confirmartext.addEventListener("click", (e) => {
    let item = e.currentTarget.parentElement;
    let diff = item.id;
    if (diff == "check") {
      item.id = "State";
      contador.textContent--;
      item.style = "background-color: #f5f5f5";

      let datos = {
        contador: contador.textContent,
      };
      let datosJSON = JSON.stringify(datos);
      localStorage.setItem("datosGuardados", datosJSON);

      let Parr = item.textContent;
      listaElementos = listaElementos2;
      let index = listaElementos.find((elemento) => elemento.parrafo === Parr);
      if (index !== -1) {
        listaElementos.splice(index, 1);
        let listaJSON = JSON.stringify(listaElementos);
        localStorage.setItem("listaGuardada", listaJSON);
      }
    } else {
      item.id = "check";
      contador.textContent++;
      item.style = "background-color: rgb(136, 145, 201);";

      let datos = {
        contador: contador.textContent,
      };

      let datosJSON = JSON.stringify(datos);
      localStorage.setItem("datosGuardados", datosJSON);

      let Parr = item.textContent;
      let elemento = {
        parrafo: Parr,
        cont: 1,
      };
      listaElementos = listaElementos2;
      listaElementos.push(elemento);

      let listaJSON = JSON.stringify(listaElementos);
      localStorage.setItem("listaGuardada", listaJSON);
      console.log(listaElementos);
    }
  });
  return confirmartext;
}
export { ListaAgregar };