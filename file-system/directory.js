const fs = require("fs");

const folderAddress = "new-directory";

const checkExist = fs.existsSync(folderAddress);

if (checkExist) {
  console.log("this folder already exist");
} else {
  fs.mkdir("new-directory", (err) => {
    if (err) console.log(err);
  });
}

fs.mkdir("new-directory", { recursive: true }, (err) => {
  if (err) console.log(err);
});

fs.mkdirSync("new-directory", {recursive: true}, err => console.log(err))

// --------------------------------------------------

// file manager projects
fs.readdir('./', (error, files) => console.log(files))

fs.rmdirSync("new-directory", {maxRetries: 3})
fs.rm("new-directory", err => console.log(err))