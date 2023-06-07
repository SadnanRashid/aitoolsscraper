const cheerio = require("cheerio");
const axios = require("axios");

const { writeToFile, writeToFileLinks } = require("./file_write");

const url = "https://theresanaiforthat.com/ai/talktotables/";
let array = [];

const arrayToScrape = [
  "https://theresanaiforthat.com/ai/ai-voice-assistant/",
  "https://theresanaiforthat.com/ai/pitches-ai/",
  "https://theresanaiforthat.com/ai/clonemyvoice/",
  "https://theresanaiforthat.com/ai/rasa-io/",
  "https://theresanaiforthat.com/ai/openlibre/",
  "https://theresanaiforthat.com/ai/dynaboard-ai/",
  "https://theresanaiforthat.com/ai/talktotables/",
  "https://theresanaiforthat.com/ai/ai-why/",
  "https://theresanaiforthat.com/ai/auger/",
  "https://theresanaiforthat.com/ai/18now/",
  "https://theresanaiforthat.com/ai/summarizethis/",
  "https://theresanaiforthat.com/ai/helphub/",
  "https://theresanaiforthat.com/ai/classpoint-ai/",
  "https://theresanaiforthat.com/ai/azure-content-safety/",
  "https://theresanaiforthat.com/ai/meatgpt/",
  "https://theresanaiforthat.com/ai/windows-copilot/",
  "https://theresanaiforthat.com/ai/seanceai/",
  "https://theresanaiforthat.com/ai/ai-domain-genius/",
  "https://theresanaiforthat.com/ai/besthotel/",
  "https://theresanaiforthat.com/ai/write-homes/",
];

arrayToScrape.forEach((url) => {
  axios
    .get(url)
    .then((response) => {
      const data = cheerio.load(response.data);

      // console.log(data);
      let title,
        description,
        category,
        tags = [],
        image;

      // get title
      let getName = data("#main").find(".title_wrap");
      title = getName.find("span").text().trim();

      // get description
      let getDescription = data("#main").find(".description");
      description = getDescription.find("p").text().trim();

      // get tags
      data("div.tags a").each((index, element) => {
        const tagText = data(element).text().trim();
        tags.push(tagText);
      });

      // get category
      let getCategory = data("#main").find("#rank");
      category = getCategory.find("a .rank_task_name").text().trim();

      // get image
      let getImage = data("#main").find("#image_ai_link");
      image = getImage.find("img").attr("src");

      array.push({
        title,
        description,
        category,
        tags,
        image,
      });

      console.log(array);

      // console.log(tags);
    })
    .catch((error) => {
      console.log(error);
    });
});
