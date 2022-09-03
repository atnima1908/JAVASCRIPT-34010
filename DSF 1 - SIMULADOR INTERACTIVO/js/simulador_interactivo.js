alert("Bienvenido a nuestra tiendita de cafe!\nPor favor seleccione las opciones en base a la numeracion")

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

let pesoCafe = peso()
let frecuenciaPedido = frecuencia()
let precioMembresia = precio(pesoCafe, frecuenciaPedido)


alert(`Su preferencia es ${gustoCafe()}, 
te gusta el tipo de cafe ${tipoCafe()} , 
prefieres el grano de cafe ${grano()}, 
recibiras ${pesoCafe} de cafe 
y lo recibiras de manera ${frecuenciaPedido}\n\n
La membresia es $${precioMembresia}`);