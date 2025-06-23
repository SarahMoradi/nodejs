const fs = require('fs')

// const streamData = fs.createReadStream("./file.txt", 'utf-8')
const readStreamData = fs.createReadStream("./read.txt")
const writeStreamData = fs.createWriteStream("./write.txt")

let chunkCounter = 0;
let data = []

readStreamData.on("ready", () => {
    console.log("READY")
})

readStreamData.on("data", (chunk) => {
    chunkCounter ++;
    // console.log(`#${chunkCounter}th chunk: `, chunk.toString())
    console.log(`#${chunkCounter}th chunk: `, chunk)
    writeStreamData.write(chunk)
    data.push(chunk)
})

readStreamData.on("error", (error) => {
    console.log("ERROR", error)
})

// readStreamData.on("end", () => {
//     setTimeout(() => {
//         console.log("FINAL DATA", data.toString())
//         console.log("ENDED")
//     }, 5000)
// })

readStreamData.on("end", () => {
    // console.log("FINAL DATA", data.toString())
    console.log("ENDED")
   
})

writeStreamData.on("finish", () => {
    console.log("FINISHED WRITE STREAM")
})