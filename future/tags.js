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
const tags = new Set();

for (let i = 0; i < data.length; i++) {
  const obj = data[i];
  for (let j = 0; j < obj.tags.length; j++) {
    if (!tags.has(obj.tags[j])) {
      tags.add(obj.tags[j]);
      uniqueArray.push(obj.tags[j]);
    }
  }
}
console.log(tags, ".........");

writeToFileArray(uniqueArray, "tags.txt");
