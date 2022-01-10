var a = 1;
console.log(a);

function x() {
    console.log(a); 
   var a = 5;
console.log(a);
console.log(window.a);

}
x();
console.log(a);
