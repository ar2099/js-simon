// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.



// 1 step = creazione array numeri casuale computer

function computerNumeri(n, x){
    let stringaComputer = []
    for(i = 0; i < n; i++){
        stringaComputer.push(Math.floor(Math.random()*x +1));
    }
    return stringaComputer;
}

// 1 step test = funziona
//  console.log(computerNumeri(4, 100))

// 2 step = creazione array generata col prompt 
function richiestaNumeri(n){
    document.getElementById("riquadro").classList.add("none")
    let stringaUtente = []
    for (q = 0; q < n; q++) {
        stringaUtente.push(Number(prompt(`Inserisci il ${q +1}° numero`)))
    }
    
    return stringaUtente;
}
// 2 step test = funziona
// console.log(richiestaNumeri(4))

//3 step = confronto due array
function confronto(l1, l2, n){
    let stringaConfronto = []
    for(p = 0; p < n; p++){
        if(l1[p] == l2[p]){
            stringaConfronto.push(`${l1[p]}`)
        } else {
            stringaConfronto.push(`X`)
        }
    }
    return stringaConfronto;
}


let bottone = document.getElementById("invia")

bottone.addEventListener("click",
function(){

    //ripuliamo i valori a schermo
    document.getElementById("riquadro").innerHTML = ``
    document.getElementById("riquadro-risposte").innerHTML = ``

    //attiviamo il timer
    document.getElementById("riempimento").classList.add("timer")

    //estraiamo il range
    let rangeNumeri = Number(document.getElementById("numero-x").value);

    //estraiamo quanti numeri
    let quantiNumeri = Number(document.getElementById("numero-n").value);
    
    //con i valori estratti generiamo la lista numeri del pc
    let numeriPc = computerNumeri(quantiNumeri, rangeNumeri)


    //test = tutto ok;
    console.log(quantiNumeri)
    console.log(rangeNumeri)
    console.log(numeriPc)

    //stampiamo la lista pc su schermo
    for(rq = 0; rq < quantiNumeri; rq++){
        document.getElementById("riquadro").innerHTML += `<span>${numeriPc[rq]}</span>`
    }
    
    
    setTimeout(richiestaNumeri, 5000, quantiNumeri)
    
}
)