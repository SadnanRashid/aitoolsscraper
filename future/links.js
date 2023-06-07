const cheerio = require("cheerio");
const axios = require("axios");

const { writeToFile, writeToFileLinks } = require("../file_write");

const url = [
  "https://aivalley.ai/page/1/",
  "https://aivalley.ai/page/2/",
  "https://aivalley.ai/page/3/",
  "https://aivalley.ai/page/4/",
  "https://aivalley.ai/page/5/",
  "https://aivalley.ai/page/6/",
  "https://aivalley.ai/page/7/",
  "https://aivalley.ai/page/8/",
  "https://aivalley.ai/page/9/",
  "https://aivalley.ai/page/10/",
  "https://aivalley.ai/page/11/",
  "https://aivalley.ai/page/12/",
  "https://aivalley.ai/page/13/",
  "https://aivalley.ai/page/14/",
  "https://aivalley.ai/page/15/",
  "https://aivalley.ai/page/16/",
  "https://aivalley.ai/page/17/",
  "https://aivalley.ai/page/18/",
  "https://aivalley.ai/page/19/",
  "https://aivalley.ai/page/20/",
  "https://aivalley.ai/page/21/",
  "https://aivalley.ai/page/22/",
  "https://aivalley.ai/page/23/",
  "https://aivalley.ai/page/24/",
  "https://aivalley.ai/page/25/",
  "https://aivalley.ai/page/26/",
  "https://aivalley.ai/page/27/",
  "https://aivalley.ai/page/28/",
  "https://aivalley.ai/page/29/",
  "https://aivalley.ai/page/30/",
  "https://aivalley.ai/page/31/",
  "https://aivalley.ai/page/32/",
  "https://aivalley.ai/page/33/",
  "https://aivalley.ai/page/34/",
  "https://aivalley.ai/page/35/",
  "https://aivalley.ai/page/36/",
  "https://aivalley.ai/page/37/",
  "https://aivalley.ai/page/38/",
  "https://aivalley.ai/page/39/",
  "https://aivalley.ai/page/40/",
  "https://aivalley.ai/page/41/",
  "https://aivalley.ai/page/42/",
  "https://aivalley.ai/page/43/",
  "https://aivalley.ai/page/44/",
  "https://aivalley.ai/page/45/",
  "https://aivalley.ai/page/46/",
  "https://aivalley.ai/page/47/",
  "https://aivalley.ai/page/48/",
  "https://aivalley.ai/page/49/",
  "https://aivalley.ai/page/50/",
  "https://aivalley.ai/page/51/",
  "https://aivalley.ai/page/52/",
  "https://aivalley.ai/page/53/",
  "https://aivalley.ai/page/54/",
  "https://aivalley.ai/page/55/",
  "https://aivalley.ai/page/56/",
  "https://aivalley.ai/page/57/",
  "https://aivalley.ai/page/58/",
  "https://aivalley.ai/page/59/",
  "https://aivalley.ai/page/60/",
  "https://aivalley.ai/page/61/",
  "https://aivalley.ai/page/62/",
  "https://aivalley.ai/page/63/",
  "https://aivalley.ai/page/64/",
  "https://aivalley.ai/page/65/",
  "https://aivalley.ai/page/66/",
  "https://aivalley.ai/page/67/",
  "https://aivalley.ai/page/68/",
  "https://aivalley.ai/page/69/",
  "https://aivalley.ai/page/70/",
  "https://aivalley.ai/page/71/",
  "https://aivalley.ai/page/72/",
  "https://aivalley.ai/page/73/",
  "https://aivalley.ai/page/74/",
  "https://aivalley.ai/page/75/",
  "https://aivalley.ai/page/76/",
  "https://aivalley.ai/page/77/",
  "https://aivalley.ai/page/78/",
  "https://aivalley.ai/page/79/",
  "https://aivalley.ai/page/80/",
  "https://aivalley.ai/page/81/",
  "https://aivalley.ai/page/82/",
  "https://aivalley.ai/page/83/",
  "https://aivalley.ai/page/84/",
  "https://aivalley.ai/page/85/",
  "https://aivalley.ai/page/86/",
  "https://aivalley.ai/page/87/",
  "https://aivalley.ai/page/88/",
  "https://aivalley.ai/page/89/",
  "https://aivalley.ai/page/90/",
  "https://aivalley.ai/page/91/",
  "https://aivalley.ai/page/92/",
  "https://aivalley.ai/page/93/",
  "https://aivalley.ai/page/94/",
  "https://aivalley.ai/page/95/",
  "https://aivalley.ai/page/96/",
  "https://aivalley.ai/page/97/",
  "https://aivalley.ai/page/98/",
  "https://aivalley.ai/page/99/",
  "https://aivalley.ai/page/100/",
];

const tasks = [];

async function getLinks() {
  for (let i = 0; i < url.length; i++) {
    const result = await await axios
      .get(url[i])
      .then((response) => {
        const data = cheerio.load(response.data);

        // console.log(data);

        data(".elementor-post").each(function () {
          const aiNameEle = data(this).find(".elementor-post__card");
          const aiNameEle2 = data(this).find(
            ".elementor-post__thumbnail__link"
          );
          //   get link from a
          const aiName = aiNameEle2.attr("href").trim();
          tasks.push(aiName);
        });
        // console.log(tasks);

        writeToFileLinks(tasks);

        // console.log(tags);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

getLinks();
