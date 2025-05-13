const fs = require("fs");
const data = "Hello New File!\n";

fs.writeFile("write.txt", data, { flag: "a", encoding: "utf-8" }, (err) => {
  if (err) console.log(err);
  else {
    console.log("write in file done!");
  }
});

// flag: "a": not replacing previous code
fs.writeFileSync("write.txt", data, { flag: "a", encoding: "utf-8" }, (err) => {
  if (err) console.log(err);
  else {
    console.log("write in file done!");
  }
});
