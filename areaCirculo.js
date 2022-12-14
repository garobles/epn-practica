function areaCirculo(r) {
    return Math.PI * (r ** 2)
}

let r = parseFloat(process.argv[2])
let result = areaCirculo(3)

console.log(result)
