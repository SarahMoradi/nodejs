const fs = require("fs");

//put in a thread poll and then comeback to run it.
fs.readFile("package.json", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//do it as it goes through, no delay no poll.
fs.readFileSync("file.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
