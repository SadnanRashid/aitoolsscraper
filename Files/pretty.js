const data = require("../Files/AiValley.json");
const {
  writeToFile,
  writeToFileLinks,
  writeToFileArray,
} = require("../file_write");

for (let i = 0; i < data.length; i++) {
  if (data[i].tags[0] === "free") {
    data[i].payment = "free";
  } else if (data[i].tags[0] === "paid") {
    data[i].payment = "paid";
  } else if (data[i].tags[0] === "freemium") {
    data[i].payment = "freemium";
  } else {
    data[i].payment = "freemium";
  }
}

writeToFile(data, "AiValleyPretty.json");
