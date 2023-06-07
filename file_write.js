const fs = require("fs");

function writeToFile(tasks, tags) {
  let index = 0;
  const fileContent = tasks
    .map((task, i) => {
      index++;
      return `${index}. Name: ${task}, Tag: ${tags[i]}`;
    })
    .join("\n");

  fs.appendFile("aiToolNamesAndTags.txt", fileContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data written to file");
    }
  });
}

function writeToFileLinks(links) {
  const fileContent = links
    .map((link, i) => {
      return `"${link}",`;
    })
    .join("\n");

  fs.appendFile("aitoolslinks.txt", fileContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data written to file");
    }
  });
}

function writeToFileArray(array, filename) {
  const data = JSON.stringify(array, null, 2); // Convert array to JSON string with 2-space indentation

  fs.writeFile(filename, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }

    console.log("Array written to file successfully!");
  });
}

module.exports = { writeToFile, writeToFileLinks, writeToFileArray };
