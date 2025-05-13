const fs = require("fs");

fs.appendFile("write.txt", "\nnew data appended", "utf-8", (err) =>
  console.log(err)
);

fs.appendFileSync("write.txt", "\nnew data appended with sync", "utf-8");

//delete file
fs.unlink("write.txt", (err) => console.log(err));

const checkExist = fs.existsSync("write.txt");
if (checkExist) {
  fs.unlinkSync("write.txt");
} else {
  console.log("not found!");
}
