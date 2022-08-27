alert("Bienvenido a nuestra tiendita de cafe!\nPor favor seleccione las opciones en base a la numeracion")
let respuesta = prompt("Quieres suscribirte a nuestra entrega de cafe? \nSI o NO")
//////////////////////////////////////////////////////////////////////////////////////////

// while(respuesta.toLowerCase() == "si"){
//     let autor = prompt("Ingrese el autor")
//     let titulo = prompt("Ingrese el titulo")

//     alert(`El autor es  ${autor} y el titulo es ${titulo}`);
//     respuesta = prompt("Quieres agregar mas cafe a tu suscribcion? \nSI o NO")

// }


while(respuesta.toLowerCase() == "si"){
    let preferencia =()=> {
        let preferenc = prompt("Como te gusta tu cafe?\n1.CAPSULA \n2.FILTRO \n3.ESPRESSO");
        if(preferenc == 1){
            let preferencia = "Capsula"
            console.log(preferencia);
        }else if(preferenc == 2){
            let preferencia = "Filtro"
            console.log(preferencia);
        }
        else if(preferenc == 3){
            let preferencia = "Espresso"
            console.log(preferencia);
        }
        else{
            alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
        }
    }
    let tipoCafe=()=> {
        let tipoCaf = prompt("Que tipo de cafe prefieres?\n1.ORIGINAL \n2.DESCAFEINADO \n3.MEZCLA")
        if(tipoCaf == 1){
            let tipo = "Original"
            console.log(tipo);
        }else if(tipoCaf == 2){
            let tipoCafe = "Descafeinado"
            console.log(tipoCafe);
        }
        else if(tipoCaf == 3){
            let tipoCafe = "Mezcla"
            console.log(tipoCafe);
        }
        else{
            alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
        }
    }
    let grano=()=>{
        let granoCaf = prompt("Que tipo de grano prefieres? \n1.Entero \n2.Filtrado \n3.Molido")
        if(granoCaf == 1){
            let grano = "Entero"        
            console.log(grano);
        }else if(granoCaf == 2){
            let grano = "Filtrado"
            console.log(grano);
        }
        else if(granoCaf == 3){
            let grano = "Molido"
            console.log(grano);
        }
        else{
            alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
        }
    }
    console.log();(`TU CARRITO A SIDO ACTUALIZADO \nPreferencia de cafe= ${preferencia()}
    \nEl tipo de cafe que te gusta= ${tipoCafe()}\nY el grano de preferencia= ${grano()}`);



    respuesta = prompt("Quieres agregar mas cafe a tu suscribcion? \nSI o NO")

}
//////////////////////////////////////////////////////////////////////////////////////////
//DESDE ACA TODO BIEN
// function preferencia() {
//     let preferenc = prompt("Como te gusta tu cafe?\n1.CAPSULA \n2.FILTRO \n3.ESPRESSO")
//     if(preferenc == 1){
//         let preferencia = "Capsula"
//         console.log(preferencia);
//     }else if(preferenc == 2){
//         let preferencia = "Filtro"
//         console.log(preferencia);
//     }
//     else if(preferenc == 3){
//         let preferencia = "Espresso"
//         console.log(preferencia);
//     }
//     else{
//         alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
//     }
// }

// function tipoCafe() {
//     let tipoCaf = prompt("Que tipo de cafe prefieres?\n1.ORIGINAL \n2.DESCAFEINADO \n3.MEZCLA")
//     if(tipoCaf == 1){
//         let tipoCafe = "Original"
//         console.log(tipoCafe);
//     }else if(tipoCaf == 2){
//         let tipoCafe = "Descafeinado"
//         console.log(tipoCafe);
//     }
//     else if(tipoCaf == 3){
//         let tipoCafe = "Mezcla"
//         console.log(tipoCafe);
//     }
//     else{
//         alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
//     }
// }
// function grano() {
//     let granoCaf = prompt("Que tipo de grano prefieres? \n1.Entero \n2.Filtrado \n3.Molido")
//     if(granoCaf == 1){
//         let grano = "Entero"        
//         console.log(grano);
//     }else if(granoCaf == 2){
//         let grano = "Filtrado"
//         console.log(grano);
//     }
//     else if(granoCaf == 3){
//         let grano = "Molido"
//         console.log(grano);
//     }
//     else{
//         alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
//     }
// }

//HASTA ACA TODO BIEN
//////////////////////////////////////////////////////////////////////////////////////////
//INTENTO PARA EL PRECIO DE LA SUSCRIPCION
// userOption=0
// function pesoCafe() {
//     let pesoCaf = prompt("Cuanto quieres de cafe?\n1.250g \n2.500g \n3.1000g")
//     if(pesoCaf == 1){
//         let pesoCafe = "250g"
        
//         function frecuencia() {
//         frecuenc = prompt("Cada cuanto quieres que te llegue tu cafe?\n1.SEMANAL \n2.BISEMANAL \n3.MENSUAL")
//         const frecuenc = Number(userOption);
//         switch (frecuenc) {
//             case 1:
//                 return (7.20)
//                 break;
//             case 2:
//                 return (9.60)
//                 break;
//             case 3:
//                 return (12)
//                 break;
//             default:
//                 console.log(`Necesitas seleccionar una opcion valida`);
//             }
//             console.log(frecuenc);
//         }



//         console.log(pesoCafe);
//     }else if(pesoCaf == 2){
//         let pesoCafe = "500g"
//         console.log(pesoCafe);
//     }
//     else if(pesoCaf == 3){
//         let pesoCafe = "1000g"
//         console.log(pesoCafe);
//     }
//     else{
//         alert(`Necesitas seleccionar una opcion valida, por favor vuelve a intentarlo`);
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////


///estoy perdida

// console.log(preferencia);
preferencia()
tipoCafe()
grano()
// pesoCafe()
// frecuencia()