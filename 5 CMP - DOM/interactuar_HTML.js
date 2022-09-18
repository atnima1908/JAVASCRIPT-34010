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
    constructor(id, titulo, info) {
        //propiedades o atributos de nuestra clase
        this.id = id,
            this.titulo = titulo,
            this.info = info
    }

    mostrarData() {
        console.log(`La preferencia del cafe es ${this.id}.
        INFORMACION:
        ${this.info}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const preferencia1 = new CafePreferencia("preferencia", "Capsula", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

const preferencia2 = new CafePreferencia("preferencia", "Filter", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

const preferencia3 = new CafePreferencia("preferencia", "Espresso", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")


//inicializar el array:
const suscripcionPreferenciaCafe = []
suscripcionPreferenciaCafe.push(preferencia1, preferencia2, preferencia3)
console.log(suscripcionPreferenciaCafe)



// let divPreferencia = document.getElementById("preferencia-suscripcion")
// suscripcionPreferenciaCafe.forEach((preferencia) => {
//     let nuevoProducto = document.createElement("div")
//     nuevoProducto.innerHTML = `<div id="${preferencia.id}" class="card" style="width: 18rem;">
//                                         <div class="card-body">
//                                         <h4 class="card-title">${preferencia.titulo}</h4>
//                                         <p class="">Info: ${preferencia.info}</p>
//                                     </div>
//                             </div>`
//     divPreferencia.append(nuevoProducto)
// })


let divPreferencia = document.getElementById("preferencia-suscripcion")
suscripcionPreferenciaCafe.forEach((preferencia) => {
    let suscripcion = document.createElement("div")
    suscripcion.innerHTML = `<div id="${preferencia.id}" class="card" style="width: 18rem;">
                                        <div class="card-body">
                                        <h4 class="card-title">${preferencia.titulo}</h4>
                                        <p class="">Info: ${preferencia.info}</p>
                                    </div>
                            </div>`


    // suscripcion.innerHTML = ` <div id="${preferencia.id}" class="container px-4">
    //                                 <div class="row row-cols-3">
    //                                     <div  class="card col-4 p-3">
    //                                         <h4 class="card-title">${preferencia.titulo}</h4>
    //                                         <p class="">Info: ${preferencia.info}</p>
    //                                     </div>
    //                                 </div>
    //                             </div>`
    divPreferencia.append(suscripcion)
})




