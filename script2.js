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
    let a = []
    for(i = 0; i < n; i++){
        a.push(Math.floor(Math.random()*x +1));
    }
    return a;
}

 //1 step test = funziona
// console.log(computerNumeri(4, 100))
 
// 2 step = creazione array generata col prompt 
function richiestaNumeri(n){
    let b = []
    for (q = 0; q < n; q++) {
        b.push(Number(prompt(`Inserisci il ${q +1}° numero`)))
    }
    
    return b;
}
// 2 step test = funziona

//let rty = richiestaNumeri(4)
//console.log(rty)

//3 step = confronto due array
function confronto(l1, l2, n){
    let lt = []
    for(p = 0; p < n; p++){
        if(l1[p] == l2[p]){
            lt.push(`${l1[p]}`)
        } else {
            lt.push(`X`)
        }
    }
    return lt;
}

//3.5 step = contatore elementi corrispondenti

function contatore(lista, n) {
    let contatoreGiuste = 0
    for (kj = 0; kj < n; kj++) {
        if (lista[kj] == "X" ) {

        } else {
            contatoreGiuste = contatoreGiuste + 1;
        }
    }
    return contatoreGiuste;
}
 //test step 3 e 3.5 = funziona
//  let yu1 = [8, 9, 1, 15, 7, 1, 8]
//   let yu2 = [8, 3, 4, 15, 3, 3, 8]
//   let yu3 = []
//   let t = confronto(yu1, yu2, 7)
//  let qrt = contatore(t, 7)
//  console.log(t)
//   console.log(qrt)




// algoritmo punteggio 
function punteggio(range, azzeccati) {
    let fattoreRange = range*0.0005 +1;
    let grandezza = 10;
    let fattoreLunghezza = Math.pow(4, azzeccati)
    let fattoreMix = (Math.sqrt(range * azzeccati))* 0.002 +1;
    let point = Math.round(((fattoreLunghezza*fattoreRange) /10)*fattoreMix)
    return point;
}
//test = funziona
// let ght = punteggio(1000000, 1)
// console.log(ght)



function finale(n, l1, range){
  

  let numeriUtente =  richiestaNumeri(n);
  let listaRisposte = confronto(l1, numeriUtente, n);
  let numeroGiuste = contatore(listaRisposte, n);
  let punteggioFinale = punteggio(range, numeroGiuste)

    for (rq = 0; rq < n; rq++) {
        document.getElementById("riquadro").innerHTML += `<span>${l1[rq]}</span>`
    }
    for (rq = 0; rq < n; rq++) {
        document.getElementById("riquadro-risposte").innerHTML += `<span>${listaRisposte[rq]}</span>`
    }
    alert(`numeri azzecati: ${numeroGiuste}| punti: ${punteggioFinale}`)
    document.getElementById("risultati-ciclo").innerHTML += `<p>Range numeri: ${range}</p><p>${numeroGiuste} numeri azzecati su ${n}</p><p>${punteggioFinale} punti</p><p>------</p>`
    

}

function pulizia(){
    return document.getElementById("riquadro").innerHTML = ``
}

let bottone = document.getElementById("invia")

bottone.addEventListener("click",
function(){

    //ripuliamo i valori a schermo
    document.getElementById("riquadro").innerHTML = ``
    document.getElementById("riquadro-risposte").innerHTML = ``

    //attiviamo il timer
    document.getElementById("tempo").innerHTML = `<div class="timer" ></div>`

    //estraiamo il range
    let rangeNumeri = Number(document.getElementById("numero-x").value);

    //estraiamo quanti numeri
    let quantiNumeri = Number(document.getElementById("numero-n").value);
    
    //con i valori estratti generiamo la lista numeri del pc
    let numeriPc = computerNumeri(quantiNumeri, rangeNumeri)
    
    


    // test = tutto ok;
    console.log(quantiNumeri)
    console.log(rangeNumeri)
    console.log(numeriPc)

    //stampiamo la lista pc su schermo
    for(rq = 0; rq < quantiNumeri; rq++){
        document.getElementById("riquadro").innerHTML += `<span>${numeriPc[rq]}</span>`
    }

    setTimeout(pulizia, 29900)
    setTimeout(finale, 30000, quantiNumeri, numeriPc, rangeNumeri)
    

    

    
}
)