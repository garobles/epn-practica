//Input: numero integer
// Output:
// - si el numero es divisible para 3, foo
// - si el numero es divisible para 5, bar
// - si el numero es divisible para 3 y 5, foobar
// - si el numero no es divisible ni para 3 ni 5,
//     imprimir el numero
function foobar(num) {
    if (((num % 3) == 0) && ((num % 5) == 0)) {
        console.log("foobar")
    } else if ((num % 3) == 0) {
    // no es divisible para 3 o no es divisible para 5
        console.log("foo")
    } else if ((num % 5) == 0) {
    // no es disible para 3 o no es divisible para 5
    // no es disible para 3
        console.log("bar")
    } else {
    // no es divisible para 3 o no es divisible para 5
    // no es divisible para 3
    // no es divisible para 5
        console.log(num)
    }
}
// Test
for (let i = 0; i <= 30; i++) {
    foobar(i)
}

