// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");

  //Vamos al parent node
  let elementList = document.getElementsByClassName('selected').item(0).parentNode.parentNode;

  //Añadimos la primera clase al primer
  let element = elementList.firstElementChild
  element.getElementsByTagName('span').item(0).classList.add("element-1")

  //A partir del primer elemento añadimos el resto de clases
  for(let i = 1; i < elementList.children.length; i++){
    element = element.nextElementSibling;
    element.getElementsByTagName('span').item(0).classList.add('element-'+(i+1))
  }
  
  //Seleccionamos los elementos pares y los borramos
  let listaNueva = elementList.querySelectorAll("li > span.element-2, li > span.element-4");
  for(let i = 0; i < listaNueva.length; i++){
    listaNueva.item(i).parentNode.remove();
  };

  //Segunda parte de la app
  //Guardo ambas listas
  let secondList = document.getElementById("list2");
  let firstList = document.getElementById("list1");

  //Recorro la primera lista para usarla al crear la segunda
  for(let i = 0; i < firstList.children.length; i++){
    //Creamos botones y les damos los mismos valores
    let boton = document.createElement("button");
    let botonText = firstList.children.item(i).firstElementChild.textContent;
    boton.innerText = botonText;
    boton.classList = firstList.children.item(i).firstElementChild.classList;
    //Creamos el nuevo elemento y lo añadimos
    let element = document.createElement("li");
    secondList.append(element);
    secondList.children.item(i).appendChild(boton)
  }

  //Añadimos disabled a los botones
  document.getElementById("list2").lastChild.firstChild.setAttribute("disabled","");

}
