const path = require("path")


// console.log('result:', "file-system" + path.sep + "index.js" )
// console.log('result:', "file-system" + path.delimiter + "index.js" )
// console.log('result:', path.basename("/file-system/directory.js"))
// console.log('result:', path.dirname("/file-system/directory.js"))
// console.log('result:', path.extname("/file-system/directory.js"))

console.log(path.join("/","nodejs","file-system", "directory.js"))
console.log(path.isAbsolute(path.join("/","nodejs","file-system", "directory.js")))
console.log(path.parse(path.join("/","nodejs","file-system", "directory.js")))
console.log(path.normalize("/nodejs/file-system/directory.js"))

console.log(__dirname)
console.log(__filename)