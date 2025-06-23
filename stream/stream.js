const fs = require('fs')

const streamData = fs.createReadStream("./file.txt")
// const streamData = fs.createReadStream("./file.txt", 'utf-8')
let chunkCounter = 0;
let data = []

streamData.on("ready", () => {
    console.log("READY")
})

streamData.on("data", (chunk) => {
    chunkCounter ++;
    // console.log(`#${chunkCounter}th chunk: `, chunk.toString())
    console.log(`#${chunkCounter}th chunk: `, chunk)
    data.push(chunk)
})

streamData.on("error", (error) => {
    console.log("ERROR", error)
})

streamData.on("end", () => {
    setTimeout(() => {
        console.log("FINAL DATA", data.toString())
        console.log("ENDED")
    }, 5000)
})