// let buffer = Buffer.alloc(256)
let buffer = Buffer.from("Thing")

buffer.write("Captain")
buffer[1] = 111

// console.log("C".codePointAt(0))
// console.log("C".charCodeAt(0))
// console.log("C".charCodeAt(0).toString(16))


// console.log(buffer)
// console.log(buffer.toString())

const buff2 = Buffer.from("Sarah");
console.log(buff2.toJSON())
console.log(typeof buff2)
const buff3 = Buffer.from([83, 97, 114, 97, 104], 'hex')
console.log(buff3.toString('utf-8'))

