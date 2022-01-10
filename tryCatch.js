function errores(){
 try{
     funcion_que_no_existe();

 } catch(ex){

    console.log('error detectado : ' + ex.description);
 }
console.log("continua con la funcion despues del error");

}

errores();


;