
/**
 * Obiettivo: Fare una funzione da passare alla funzione
 *  compareNumbersInArrays senza modificare nulla di ciò
 *  che già esiste.
 *
 *  La funzione deve dare falso se incontra un nullo, o
 *  altrimenti verifica che l'elemento del primo array
 *  sia minore dell'elemento del secondo array
 *
 *
 * Esempio Output:
 *  - arr1 = [1, 2, 3, 4]
 *  - arr2 = [0 ,0, 10, 11, 12]
 *  - solution = [true, true, false, false, false]
 *
 *
 * Obiettivo Secondario: Risolvere l'esercizio mediante
 *  le anonymous functions
 *
 */


/**
 *
 * @param {Array<Number>} array1
 * @param {Array<Number>} array2
 * @param {*} compare_func
 */
function compareNumbersInArrays(array1, array2, compare_func) {

    let size = Math.max(array1.length, array2.length)
    let solution = []

    for (i = 0; i < size; i++) {

        let element1 = null
        let element2 = null

        if (array1[i] != undefined) {
            element1 = array1[i]
        }

        if (array2[i] != undefined) {
            element2 = array2[i]
        }

        solution.push(
            compare_func(array1[i])
        )

    }

    return solution

}

let myArr = [1, 3, 4, 6, 98]
let myArr2 = [23, 1, 0, 32]

// Scrivi la soluzione qui



// Fine Soluzione


let solution = compareNumbersInArrays(myArr, myArr2, /* soluzione */)

print(solution)



