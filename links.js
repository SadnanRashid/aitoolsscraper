const cheerio = require("cheerio");
const axios = require("axios");

const { writeToFile, writeToFileLinks } = require("./file_write");

const url = "https://theresanaiforthat.com/";

axios
  .get(url)
  .then((response) => {
    const data = cheerio.load(response.data);

    // console.log(data);

    const tasks = []; //to store names of tools
    const tags = []; //to store tags of tools
    const links = [];

    data(".tasks li").each(function () {
      const aiNameEle2 = data(this).find(".ai_link_wrap");
      const aiNameEle = aiNameEle2.find(".ai_link");
      const aiName = aiNameEle.attr("href");
      links.push(aiName);

      //   const aiTagEle = data(this).find(".task_label_wrap");
      //   const taskName = aiTagEle.find("a.task_label").text().trim();
      //   tags.push(taskName);
    });
    console.log(links);

    writeToFileLinks(links);

    // console.log(tags);
  })
  .catch((error) => {
    console.log(error);
  });
