// Documentacion completa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let arr = [43, 23, 46, 10]

// imprimir arr entera
console.log(arr)

// imprimir arr elemento por elemento
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// push recibe 2 arguments: arr, 17.
// Agregar un elemento al final de arr
arr.push(17)
console.log(arr)
// pop recibe 1 argumento: arr
// Elimina el ultimo elemento y lo devuelve
console.log(arr.pop())
console.log(arr)
// Crea una array con los elementos [1,3)
console.log(arr.slice(1,3))
// Busca por el indice del elemento con valor 10
console.log(arr.indexOf(10))
// combinar dos array
let arr2 = [20, 22]
arr = arr.concat(arr2)
console.log(arr)
// ordenar la array
console.log(arr.sort())
