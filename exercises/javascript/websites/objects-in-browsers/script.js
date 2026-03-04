/**
 * Obiettivo: Cambiare valore di un oggetto in JavaScript
 *  e stamparlo sulla console
 */

let persona = {
    name: "giacomo",
    surname: "merola"
}

function greetPerson(person) {
    if (person.name !== "mario") {
        return `Ciao ${person.name} ${person.surname} e benvenuto sulla console`
    }

    return `Benvenuto ${person.name} nella stanza segreta >:DDDD`
}

console.log("Ciao, prova a cambiare il nome di questa persona da giacomo ad antonio")
console.log("Poi esegui la funzione greetPerson")
