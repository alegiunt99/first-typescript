var persone = ["Marco", "Luigi", "Luca", "Michele", "Alex"];
persone.forEach(function (persona) {
    console.log(persona);
});
var saluto = 'ciaone';
console.log(saluto);
saluto = 'ciao';
console.log(saluto);
// ****************************** OGGETTI ***************************************
// METODO 1 
var ogetto = {
    id: 1,
    name: 'Alessandro',
    isOnline: true
};
// METODO 2 
console.log(ogetto.id);
var ogetto2 = {
    id: 1,
    name: 'Alessandro',
    isOnline: true
};
console.log('ogetto 2', ogetto2);
// *******************************************
var miaFunzione = function () {
    console.log('Attivo la funzione!!!');
};
function somma(num1, num2) {
    var sum = num1 + num2;
    console.log(num1 + " + " + num2 + ' = ' + sum);
    return sum;
}
miaFunzione();
somma(72, 237);
