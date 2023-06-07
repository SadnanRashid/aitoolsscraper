const data = require("../Files/AiValley.json");
const {
  writeToFile,
  writeToFileLinks,
  writeToFileArray,
} = require("../file_write");

for (let i = 0; i < data.length; i++) {
  const arr = [];
  arr.push(data[i].category.toLowerCase());
  data[i].category = arr;
}

// for (let i = 0; i < data.length; i++) {
//   data[i].tags.push(data[i].category.toLowerCase());
// }

// for (let i = 0; i < data.length; i++) {
//   if (data[i].tags[0] === "free") {
//     data[i].payment = "free";
//   } else if (data[i].tags[0] === "paid") {
//     data[i].payment = "paid";
//   } else if (data[i].tags[0] === "freemium") {
//     data[i].payment = "freemium";
//   } else {
//     data[i].payment = "freemium";
//   }
// }

writeToFileArray(data, "AiValleyPretty.json");
