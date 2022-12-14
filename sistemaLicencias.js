let mayorEdad = true
let pago = true
let pagoExtra = false
//let acceso = pagoExtra || mayorEdad
//let puedeConseguirLicencia = (pagoExtra || mayorEdad) && pago
if (!pago) {
    console.log("El usuario no puede Conseguir su Licencia, porque no realizo el pago")
} else if (!mayorEdad) {
    // !pago == false -> pago == true
    if (pagoExtra) {
        console.log("El usuario puede conseguir la licencia, aunque sea menor de edad")
    } else {
        console.log("El usuario si pago, pero el usuario debe pagar extra por ser menor de edad")
    }
} else  {
    // !pago == falso -> pago == true
    // !mayorEdad == flase -> mayorEdad == true
    console.log("El usuario puede conseguir su licencia")
}