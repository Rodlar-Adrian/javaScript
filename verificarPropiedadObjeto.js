var miObjeto = {
    color:'verde',
    tamaño :10,
    tipó: 'bloque'
    
    }



function verificarPropiedad(miObjeto,propiedad){
if(miObjeto.hasOwnProperty(propiedad)){
 return("propiedad :" + miObjeto[propiedad]);
}else{

    console.log('el objeto no tiene esa propiedad ')
}

}
console.log(verificarPropiedad(miObjeto,'no es otra propiedad'));
