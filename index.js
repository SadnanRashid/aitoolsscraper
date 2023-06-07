const cheerio = require("cheerio");
const axios = require("axios");

const { writeToFile } = require("./file_write");

const url = "https://theresanaiforthat.com/";

axios
  .get(url)
  .then((response) => {
    const data = cheerio.load(response.data);

    // console.log(data);

    const tasks = []; //to store names of tools
    const tags = []; //to store tags of tools

    data(".tasks li").each(function () {
      const aiNameEle = data(this).find(".ai_link_wrap");
      const aiName = aiNameEle.text().trim();
      tasks.push(aiName);

      const aiTagEle = data(this).find(".task_label_wrap");
      const taskName = aiTagEle.find("a.task_label").text().trim();
      tags.push(taskName);
    });
    // console.log(tasks);

    writeToFile(tasks, tags);

    // console.log(tags);
  })
  .catch((error) => {
    console.log(error);
  });
