const data = require("./allTools.json");
const {
  writeToFile,
  writeToFileLinks,
  writeToFileArray,
} = require("../file_write");

let array = [];
let temp = false;
console.log(data.length, "....");

const uniqueArray = [];
const titles = new Set();

for (let i = 0; i < data.length; i++) {
  const obj = data[i];
  if (!titles.has(obj.title)) {
    titles.add(obj.title);
    uniqueArray.push(obj);
  }
}
console.log(uniqueArray.length, ".........");

writeToFileArray(uniqueArray, "asdasd.txt");
