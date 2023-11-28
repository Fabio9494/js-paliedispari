let scelta_utente;
while(scelta_utente!="pari" && scelta_utente!="dispari"){
    scelta_utente = prompt("pari o dispari?").toLowerCase();
    console.log(controllo_scelta(scelta_utente));
}
let numero_utente;
do{
    numero_utente = parseInt(prompt("scegli un numero da 1 a 5"));
    console.log(controllo_scelta_numero(numero_utente));
}while(numero_utente>5 || numero_utente<1);

let numero_computer = random();
console.log("numero computer: " + numero_computer);

console.log("La somma è: " + sommaPariDisapri(numero_utente,numero_computer));

if(sommaPariDisapri(numero_utente,numero_computer)==scelta_utente){
    console.log("HAI VINTO");
}
else{
    console.log("HAI PERSO");
}



//FUNZIONI
function random(){
    return Math.floor(Math.random()*(6 - 1) + 1); 
}

function sommaPariDisapri(a,b){
    let c=a+b;
    if(c%2==0){
        return "pari";
    }
    return "dispari"
}

function controllo_scelta(scelta){
    if(scelta!="pari" && scelta_utente!="dispari"){
        return ("Scelta errata")
    }
    return "Hai scelto: " + scelta;
    
}

function controllo_scelta_numero(numero){
    if(numero>5 || numero<1){
        return "Scelta numero errata"
    }
    return "numero utente: " + numero_utente;
}

