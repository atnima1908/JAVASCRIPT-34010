// alert("BIENVENID@ A NUESTRA TIENDITA DE CAFE\n\nPor favor seleccione las opciones en base a la numeracion")
//////////////////////////////////////////// SE LE PREGUNTA AL USUARIO SI DESEA SUSCRIBIRSE PARA INICIAR EL CICLO
// let carrito = prompt("Desea suscribirte? \n 1 - SI\n 2 - NO\n");
// if (carrito == 1) {
//     nombreUsuario = prompt("Cual es su nombre completo?")
//     direccionUsuario = prompt("Ingrese su direccion para el envio")
// }
// else {
//     alert("Muchas gracias por su visita, esperamos verle pronto")
// }

////////////////////////////////////////////////////////// SE DECLARAN NUESTRAS FUNCIONES

//////////////////////////////////////////// GUSTO DE CAFE
let gustoCafe = () => {
    let preferencia = prompt("Como te gusta tu cafe?\n\n1- CAPSULA \n2- FILTRO \n3- ESPRESSO\n");
    if (preferencia == 1) {
        preferencia = "capsula"
    } else if (preferencia == 2) {
        preferencia = "filtro"
    } else if (preferencia == 3) {
        preferencia = "espresso"
    } else {
        alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
    } return preferencia
}

//////////////////////////////////////////// TIPO DE CAFE
let tipoCafe = () => {
    let preferencia = prompt("Que tipo de cafe prefieres?\n \n1- ORIGINAL \n2- DESCAFEINADO \n3- MEZCLA\n")
    if (preferencia == 1) {
        preferencia = "original"
    } else if (preferencia == 2) {
        preferencia = "descafeinado"
    } else if (preferencia == 3) {
        preferencia = "mezcla"
    } else {
        alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
    } return preferencia
}

//////////////////////////////////////////// TIPO DE GRANO
let grano = () => {
    let preferencia = prompt("Que tipo de grano prefieres?\n \n1- GRANO ENTERO \n2- FILTRADO \n3- MOLIDO\n")
    if (preferencia == 1) {
        preferencia = "entero"
    } else if (preferencia == 2) {
        preferencia = "filtrado"
    } else if (preferencia == 3) {
        preferencia = "molido"
    } else {
        alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
    } return preferencia
}

//////////////////////////////////////////// CANTIDAD DE CAFE
let peso = function pesoDelCafe() {
    let preferencia = prompt("Que cantidad de cafe te gustaria recibir?\n \n1- 250g \n2- 500g \n3- 1Kg\n")
    if (preferencia == 1) {
        preferencia = "250g"
    } else if (preferencia == 2) {
        preferencia = "500g"
    } else if (preferencia == 3) {
        preferencia = "1kg"
    } else {
        alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
    } return preferencia
}

//////////////////////////////////////////// FRECUENCIA DE ENVIO
let frecuencia = function frecuenciaDeEnvio() {
    let preferencia = prompt("Con que frecuencia deseas recibir tu cafe?\n \n1- SEMANAL \n2- QUINCENAL \n3- MENSUAL\n")
    if (preferencia == 1) {
        preferencia = "semanal"
    } else if (preferencia == 2) {
        preferencia = "quincenal"
    } else if (preferencia == 3) {
        preferencia = "mensual"
    } else {
        alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
    } return preferencia
}

//////////////////////////////////////////// PRECIO DE LA MEMBRESIA
let precio = (peso, frecuencia) => {
    let membresia
    if ((peso == "250g") && (frecuencia == "semanal")) {
        membresia = 7.20
    } else if (peso == "250g" && frecuencia == "quincenal") {
        membresia = 9.60
    } else if ((peso == "250g") && (frecuencia == "mensual")) {
        membresia = 12
    } else if ((peso == "500g") && (frecuencia == "semanal")) {
        membresia = 13
    } else if ((peso == "500g") && (frecuencia == "quincenal")) {
        membresia = 17.5
    } else if ((peso == "500g") && (frecuencia == "mensual")) {
        membresia = 22
    } else if ((peso == "1kg") && (frecuencia == "semanal")) {
        membresia = 24
    } else if ((peso == "1kg") && (frecuencia == "quincenal")) {
        membresia = 32
    } else if ((peso == "1kg") && (frecuencia == "mensual")) {
        membresia = 42
    } else {
        alert(`La membresia solicitada no esta disponible por el momento, por favor seleccione una de las membresias disponibles`)
    } return membresia
}

//INCORPORANDO ARRAYS /////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// FUNCION PARA UN NUMERO RANDOM DE PEDIDO
function getRandom() {
    return Math.floor(Math.random() * 100);
}

//////////////////////////////////////////// SE ALMACENAN LA INFORMACION DEL USUARIO Y EL PEDIDO 
class Pedido {
    constructor(id, usuario, direccion, preferencia, cafeina, grano, peso, frecuencia, precio) {
        //ATRIBUTOS DE NUESTRA MEMBRESIA
        this.id = id,
            this.usuario = usuario,
            this.direccion = direccion,
            this.preferencia = preferencia,
            this.cafeina = cafeina,
            this.grano = grano,
            this.peso = peso,
            this.frecuencia = frecuencia,
            this.precio = precio,
            this.conEnvio = precio + 3
    }

    mostrarMembresia() {
        console.log(`La nueva membresia fue agregada.
        Su numero de pedido es: ${this.id}.
        Nombre del usuario: ${this.usuario}.
        Su direccion: ${this.direccion}.
        
        
        Su preferencia es de: ${this.preferencia}.
        El nivel de cafeina es: ${this.cafeina}.
        Le gusta el grano ${this.grano}.
        El peso es: ${this.peso}.
        La frecuencia sera: ${this.frecuencia}.
        
        SUBTOTAL
        ******** El precio de la membresia es: $${this.precio}
        TOTAL
        ******** Precio del envio $3.
        ******** Precio con envio: $${this.conEnvio}`)
    }
}


//////////////////////////////////////////// SE INICIA EL CICLO PARA LA SUSCRIPCION

// while (carrito != "2") {


//     if (carrito == 1) {
//         ///////////////////////////// SE LLAMAN NUESTRAS FUNCIONES
//         let preferenciaCafe = gustoCafe()
//         let cafeina = tipoCafe()
//         let tipoDeGrano = grano()
//         let pesoCafe = peso()
//         let frecuenciaPedido = frecuencia()
//         let precioMembresia = precio(pesoCafe, frecuenciaPedido)

//         ///////////////////////////// SE MUESTRA AL USUARIO SU PEDIDO
//         alert(`Su preferencia es ${preferenciaCafe}, te gusta el tipo de cafe ${cafeina}, prefieres el grano de cafe ${tipoDeGrano}, recibiras ${pesoCafe} de cafe y lo recibiras de manera ${frecuenciaPedido}\n\nLa membresia es $${precioMembresia}.\nSu orden esta siendo procesada, muchas gracias!`)

//         ///////////////////////////// SE INICIA O FINALIZA EL CICLO
//         carrito = prompt("Desea agregar algo mas tu suscripcion? \n 1 - SI\n 2 - NO\n");
//         if (carrito == 2) {
//             alert("Muchas gracias por su visita, esperamos verle pronto")
//         }


//         ///////////////////////////// EN CONSOLA SE VE TODOS LOS PEDIDOS REALIZADOS 
//         let numeroPedido = getRandom()

//         const pedido = new Pedido(`Pedido #${numeroPedido}`, nombreUsuario, direccionUsuario, preferenciaCafe, cafeina, tipoDeGrano, pesoCafe, frecuenciaPedido, precioMembresia)

//         const solicitudPedido = [];
//         solicitudPedido.push(pedido)
//         for (let tipoMembresia of solicitudPedido) {
//             tipoMembresia.mostrarMembresia()
//         }
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// FIN DE LA PRIMERA ENTREGA
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//Clase constuctora 
class CafePreferencia {
    constructor(id, clase, titulo, info) {
        //propiedades o atributos de nuestra clase
        this.id = id,
            this.clase = clase,
            this.titulo = titulo,
            this.info = info
    }

    mostrarData() {
        console.log(`${this.titulo}.
        ${this.info}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const preferencia1 = new CafePreferencia("opcion1", "preferenciaCafe", "Capsula", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const preferencia2 = new CafePreferencia("opcion2", "preferenciaCafe", "Filtro", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const preferencia3 = new CafePreferencia("opcion3", "preferenciaCafe", "Espresso", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

const cafeina1 = new CafePreferencia("opcion1", "tipoCafe", "Original", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const cafeina2 = new CafePreferencia("opcion2", "tipoCafe", "Descafeinado", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const cafeina3 = new CafePreferencia("opcion3", "tipoCafe", "Mezcla", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

const grano1 = new CafePreferencia("opcion1", "granoCafe", "Grano entero", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const grano2 = new CafePreferencia("opcion2", "granoCafe", "Filtro", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const grano3 = new CafePreferencia("opcion3", "granoCafe", "Molido", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

const cantidad1 = new CafePreferencia("opcion1", "cantidadCafe", "250 gramos", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const cantidad2 = new CafePreferencia("opcion2", "cantidadCafe", "500 gramos", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const cantidad3 = new CafePreferencia("opcion3", "cantidadCafe", "1 kilogramo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

const frecuencia1 = new CafePreferencia("opcion1", "frecuenciaEnvio", "Semanal", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const frecuencia2 = new CafePreferencia("opcion2", "frecuenciaEnvio", "Qincenal", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const frecuencia3 = new CafePreferencia("opcion3", "frecuenciaEnvio", "Mensual", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")


//inicializar el array:
// const suscripcionPreferenciaCafe = []
// suscripcionPreferenciaCafe.push(preferencia1, preferencia2, preferencia3)
// console.log(suscripcionPreferenciaCafe)

// let divPreferencia = document.getElementById("productos")
// suscripcionPreferenciaCafe.forEach((preferencia) => {
//     let suscripcion = document.createElement("div")
//     suscripcion.innerHTML = `<div id="${preferencia.id}" class="card ${preferencia.clase}" style="width: 18rem; ">
//                                     <div class="card-body">
//                                         <h4 class="card-title">${preferencia.titulo}</h4>
//                                         <p class="">${preferencia.info}</p>
//                                     </div>
//                             </div> `
//     divPreferencia.append(suscripcion)
// })

// ATRAPANDO LOS NOMBRES DE NUESTROS DIV EN HTML
let divPreferencia = document.getElementById("preferenciaCafe")
let divTipo = document.getElementById("tipoCafe")
let divGrano = document.getElementById("granoCafe")
let divCantidad = document.getElementById("cantidadCafe")
let divFrecuencia = document.getElementById("frecuenciaCafe")



////////////// DOM - PREFERENCIA 
const suscripcionPreferencia = []
suscripcionPreferencia.push(preferencia1, preferencia2, preferencia3)
console.log(suscripcionPreferencia)

suscripcionPreferencia.forEach((preferencia) => {
    let suscripcion = document.createElement("div")
    suscripcion.innerHTML = `                            <label class="radio-item">
                                <input class="radio-item__input">
                                <span class="radio-item__label-text">

                                    <h4 class="card-title">${preferencia.titulo}</h4>
                                    <p class="">${preferencia.info}</p>

                                </span>
                            </label>`
    divPreferencia.append(suscripcion)
})



////////////// DOM - TIPO DE CAFE 
const suscripcionTipo = []
suscripcionTipo.push(cafeina1, cafeina2, cafeina3)
console.log(suscripcionTipo)

suscripcionTipo.forEach((cafeina) => {
    let suscripcion = document.createElement("div")
    suscripcion.innerHTML = `                            <label class="radio-item">
    <input class="radio-item__input">
    <span class="radio-item__label-text">
    
    <h4 class="card-title">${cafeina.titulo}</h4>
    <p class="">${cafeina.info}</p>
    
    </span>
    </label>`
    divTipo.append(suscripcion)
})


////////////// DOM - GRANO DE CAFE 
const suscripcionGrano = []
suscripcionGrano.push(grano1, grano2, grano3)
// console.log(suscripcionGrano)

suscripcionGrano.forEach((grano) => {
    let suscripcion = document.createElement("div")
    suscripcion.innerHTML = `                            <label class="radio-item">
                                <input class="radio-item__input">
                                <span class="radio-item__label-text">

                                    <h4 class="card-title">${grano.titulo}</h4>
                                    <p class="">${grano.info}</p>

                                </span>
                            </label>`
    divGrano.append(suscripcion)
})


////////////// DOM - CANTIDAD DE CAFE
const suscripcionCantidad = []
suscripcionCantidad.push(cantidad1, cantidad2, cantidad3)
// console.log(suscripcionCantidad)

suscripcionCantidad.forEach((cantidad) => {
    let suscripcion = document.createElement("div")
    suscripcion.innerHTML = `                            <label class="radio-item">
                                <input class="radio-item__input">
                                <span class="radio-item__label-text">

                                    <h4 class="card-title">${cantidad.titulo}</h4>
                                    <p class="">${cantidad.info}</p>

                                </span>
                            </label>`
    divCantidad.append(suscripcion)
})







////////////// DOM - FRECUENCIA ENVIO
const suscripcionFrecuencia = []
suscripcionFrecuencia.push(frecuencia1, frecuencia2, frecuencia3)
// console.log(suscripcionFreciencia)

suscripcionFrecuencia.forEach((frecuencia) => {
    let suscripcion = document.createElement("div")
    suscripcion.innerHTML = `                         <label class="radio-item">
                                <input class="radio-item__input">
                                <span class="radio-item__label-text">

                                    <h4 class="card-title">${frecuencia.titulo}</h4>
                                    <p class="">${frecuencia.info}</p>

                                </span>
                            </label>`
    divFrecuencia.append(suscripcion)
})





// let card = () => {
//     let suscripcion = document.createElement("div")
//     suscripcion.innerHTML = `<div id="${preferencia.id}" class="card ${preferencia.clase}" style="width: 18rem; ">
//                                          <div class="card-body">
//                                              <h4 class="card-title">${preferencia.titulo}</h4>
//                                              <p class="">${preferencia.info}</p>
//                                         </div>
//                                  </div> `
//     divPreferencia.append(suscripcion)
// }







//////////////////HASTA ACA FUNCIONA



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const seleccionCafe = document.querySelectorAll('.preferenciaCafe')
// const opcion1Cafe = document.querySelector('#opcion1')
// const opcion2Cafe = document.querySelector('#opcion2')
// const opcion3Cafe = document.querySelector('#opcion3')


// seleccionCafe.forEach(seleccion => seleccion.addEventListener('change', (e) => doTheTrick(e.target)))

// function doTheTrick(theClickedOne) {
//     if (opcion1Cafe.checked || opcion2Cafe.checked || opcion3Cafe.checked) {
//         if (opcion1Cafe === theClickedOne) {
//             opcion2Cafe.checked = false
//             opcion3Cafe.checked = false

//         }

//         if (opcion2Cafe === theClickedOne) {
//             opcion1Cafe.checked = false
//             opcion3Cafe.checked = false

//         }

//         if (opcion3Cafe === theClickedOne) {
//             opcion2Cafe.checked = false
//             opcion1Cafe.checked = false

//         }
//     }
// }


// const seleccionCafe = document.querySelectorAll('.seleccionCafe')
// const opcion1Cafe = document.querySelector('#opcion1')
// const opcion2Cafe = document.querySelector('#opcion2')
// const opcion3Cafe = document.querySelector('#opcion3')

// seleccionCafe.forEach(seleccion => seleccion.addEventListener('change', (e) => doTheTrick(e.target)))

// function doTheTrick(theClickedOne) {
//     if (good.checked || cheap.checked || fast.checked) {
//         if (good === theClickedOne) {
//             // good.checked = true
//             fast.checked = false
//             cheap.checked = false

//         }

//         if (cheap === theClickedOne) {
//             // cheap.checked = true
//             good.checked = false
//             fast.checked = false

//         }

//         if (fast === theClickedOne) {
//             // fast.checked = true
//             cheap.checked = false
//             good.checked = false

//         }
//     }
// }







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ACORDION

// const accordion = document.getElementsByClassName('contentBx');

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active')
//     })
// }

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if (good.checked || cheap.checked || fast.checked) {
        if (good === theClickedOne) {
            // good.checked = true
            fast.checked = false
            cheap.checked = false

        }

        if (cheap === theClickedOne) {
            // cheap.checked = true
            good.checked = false
            fast.checked = false

        }

        if (fast === theClickedOne) {
            // fast.checked = true
            cheap.checked = false
            good.checked = false

        }
    }
}





/* custom checkbox js */
// Not really needed, but here for learning!
// wouldn't work atm for multiple fieldsets in one window

const radios = document.querySelectorAll('.radio-item'); // returns node list
const inputs = document.querySelectorAll('.radio-item__input');

function selectRadios() {
    for (var i = 0, max = radios.length; i < max; i++) {

        radios[i].onclick = function () {
            const input = this.firstElementChild; // get input just clicked

            if (input.checked) { return; }

            // if not checked, check

            // remove checked from other inputs
            inputs.forEach(el => el.setAttribute("checked", false));

            // check clicked input
            input.setAttribute("checked", "true");
        };
    };
};
selectRadios();