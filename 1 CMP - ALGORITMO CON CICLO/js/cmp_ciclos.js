alert("Bienvenido a nuestra tiendita de cafe!\nPor favor seleccione las opciones en base a la numeracion")
let respuesta = prompt("Quieres suscribirte a nuestra entrega de cafe? \nSI o NO")

while(respuesta.toLowerCase() == "si"){
    let preferencia =()=> {
        let preferencia = prompt("Como te gusta tu cafe?\n1.CAPSULA \n2.FILTRO \n3.ESPRESSO");
        if(preferencia == 1){
            let preferencia = "Capsula"
            console.log(preferencia);
        }else if(preferencia == 2){
            let preferencia = "Filtro"
            console.log(preferencia);
        }
        else if(preferencia == 3){
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
    alert(`TU CARRITO A SIDO ACTUALIZADO \nPreferencia de cafe= ${preferencia()}\nEl tipo de cafe que te gusta= ${tipoCafe()}\nY el grano de preferencia= ${grano()}`);



    respuesta = prompt("Quieres agregar mas cafe a tu suscribcion? \nSI o NO")

}

preferencia()
tipoCafe()
grano()
