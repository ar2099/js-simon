// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.

// 1 step: creiamo una funzione per generare un numero casuale tra 1 e X

function casuale(x) {
    let numeroCasuale = Math.floor(Math.random()*x) +1;
    return numeroCasuale;
}

// 2 step: creiamo funzione per creare un array di N numeri casuali e stamparli
function numeriSchermo(n, x){
    let arrayN = []
    for(i = 0; i < n; i++){
        
        arrayN.push(casuale(x))
        document.getElementById("riquadro").innerHTML += `<span>${casuale(x)}</span>`
    }
    return arrayN;
}


//test step 1 e 2
// console.log(numeriSchermo(5, 10))

//step 3 = creiamo una funzione per richiedere un N 
// numeri all'utente e formare un array con essi

function richiesta(n){
    let arrayU = []
    for(i = 0; i < n; i++){
    numeroRichiesto = prompt(`Inserisci il ${i +1}° numero`) ;
    arrayU.push(Number(numeroRichiesto))}
    return arrayU
}

// test step 3
// console.log(richiesta(3)) (funziona, disattivo per noia)

//step 4 = confronto due array. Creiamo
//una funzione che confronta due array, e
//dove si sono elementi uguali mette quel valore
// e dove non coincidono emette sbagliato

function confronto(n){
   let utenteLista = richiesta(n);
   let confrontoArray = [];
   for(i = 0; i < n; i++){
       if(utenteLista[i] == computerLista[i]){
           confrontoArray.push(utenteLista[i])
           document.getElementById("riquadro-risposte").innerHTML += `<span class="green">${utenteLista[i]
}</span>`
       } else {
           confrontoArray.push("sbagliato")
           document.getElementById("riquadro-risposte").innerHTML += `<span class="red">X</span>`
       }
   }
   return confrontoArray;
}

// test step 4 =  disattivo per evitare il prompt

let computerLista = numeriSchermo(5, 100);
setTimeout(confronto(5), 3000);

// test fallito e non capisco perchè