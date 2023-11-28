let parola = prompt("INSERISCI PAROLA").toLowerCase();
console.log(palindroma(parola));

//FUNZIONI
function palindroma(word){
    let new_word;
    new_word = word.split("").reverse("").join("");
    if (word==new_word){
        return "LA PAROLA INSERITA E' PALINDROMA"
    }
    return "LA PAROLA INSERITA NON E' PALINDROMA"
}

