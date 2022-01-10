

var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');


table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

//creamos las fila para el encabezado y creamos los th y le pasamos los valores.

let fila = document.createElement('tr');
let encabezado1 = document.createElement('th');
encabezado1.innerHTML = ' personID '


let encabezado2 = document.createElement('th');
encabezado2.innerHTML =' name ';

let encabezado3 = document.createElement('th');
encabezado3.innerHTML = ' city ';

let encabezado4 = document.createElement('th');
encabezado4.innerHTML = ' phoneNum ';

//agregamos la informacion a los encabezados utilizando las propiedaddes en este caso usamos erl innerHTML 

fila.appendChild(encabezado1);
fila.append(encabezado2);
fila.appendChild(encabezado3);
fila.appendChild(encabezado4);
//agregamos el contenido de nuestros th a la etiqueta thead del DOM 

thead.appendChild(fila);




//creamos una nueva fila con tr y  para insertar datos en cada celda de esa fila ahora lo haremos con el <td>


let fila2 = document.createElement('tr');
let fila2_dato1 = document.createElement('td');
fila2_dato1.innerHTML = '123';

let fila2_dato2 = document.createElement('td');
fila2_dato2.innerHTML = 'jhon';

let fila2_dato3 = document.createElement('td');
fila2_dato3.innerHTML = 'Melboure';

let fila2_dato4= document.createElement('td');
fila2_dato4.innerHTML = '123456';




fila2.appendChild(fila2_dato1);
fila2.appendChild(fila2_dato2);
fila2.appendChild(fila2_dato3);
fila2.appendChild(fila2_dato4);
//agregamos el contenido de la fila 2 al tbody que es el contenido de la tabla 
tbody.appendChild(fila2);




let fila3 = document.createElement('tr');
let fila3_dato1 = document.createElement('td');
fila3_dato1.innerHTML = '124';

let fila3_dato2 = document.createElement('td');
fila3_dato2.innerHTML = 'Amelia';

let fila3_dato3 = document.createElement('td');
fila3_dato3.innerHTML = 'Sydney';

let fila3_dato4 = document.createElement('td');
fila3_dato4.innerHTML ='1234567890';

fila3.appendChild(fila3_dato1);
fila3.appendChild(fila3_dato2);
fila3.appendChild(fila3_dato3);
fila3.appendChild(fila3_dato4);

tbody.appendChild(fila3);




let fila4 = document.createElement('tr');
let fila4_dato1 = document.createElement('td');
fila4_dato1.innerHTML = '125';


let fila4_dato2 = document.createElement('td');
fila4_dato2.innerHTML = 'Emily';

let fila4_dato3 = document.createElement('td');
fila4_dato3.innerHTML = 'perth';

let fila4_dato4 = document.createElement('td');
fila4_dato4.innerHTML = '1234567890';


fila4.appendChild(fila4_dato1);
fila4.appendChild(fila4_dato2);
fila4.appendChild(fila4_dato3);
fila4.appendChild(fila4_dato4);

tbody.appendChild(fila4);




let fila5 = document.createElement('tr');
let fila5_dato1 = document.createElement('td');
fila5_dato1.innerHTML = '126';


let fila5_dato2 = document.createElement('td');
fila5_dato2.innerHTML = 'Abraham';

let fila5_dato3 = document.createElement('td');
fila5_dato3.innerHTML = 'perth';

let fila5_dato4 = document.createElement('td');
fila5_dato4.innerHTML = '1234567890';





fila5.appendChild(fila5_dato1);
fila5.appendChild(fila5_dato2);
fila5.appendChild(fila5_dato3);
fila5.appendChild(fila5_dato4);

tbody.appendChild(fila5);


var tablaEstilo= document.getElementsByTagName(table);
table.className = 'borde';

var theadEstilo= document.getElementsByTagName(thead);
thead.className = 'borde2';










console.log(table);








