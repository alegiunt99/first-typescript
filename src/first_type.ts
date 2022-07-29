let persone = ["Marco", "Luigi", "Luca", "Michele", "Alex"];

persone.forEach((persona) => {

    console.log(persona);
})

let saluto: string = 'ciaone';

console.log(saluto);

saluto = 'ciao';

console.log(saluto);

// ****************************** OGGETTI ***************************************

// METODO 1 
let ogetto: {id: number, name: string, isOnline: boolean} = {

    id: 1,

    name: 'Alessandro',

    isOnline: true
}


// METODO 2 

console.log(ogetto.id)

let ogetto2: object = {

    id: 1,

    name: 'Alessandro',

    isOnline: true
}

console.log('ogetto 2', ogetto2)


// *******************************************


let miaFunzione: () => void = () => {
    console.log('Attivo la funzione!!!');
}

function somma(num1: number, num2: number): number {
    
    const sum = num1 + num2;
    console.log(num1 +  " + " + num2 + ' = ' + sum)
    

    return sum;
}


miaFunzione();

somma(72, 237)