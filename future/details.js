const cheerio = require("cheerio");
const axios = require("axios");

const {
  writeToFile,
  writeToFileLinks,
  writeToFileArray,
} = require("../file_write");

// const url = "https://theresanaiforthat.com/ai/talktotables/";
let array = [];

const url = [
  // "https://www.futurepedia.io/api/tools?page=2&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=3&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=4&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=5&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=6&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=7&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=8&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=9&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=10&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=11&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=12&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=13&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=14&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=15&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=16&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=17&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=18&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=19&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=20&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=21&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=22&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=23&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=24&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=25&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=26&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=27&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=28&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=29&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=30&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=31&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=32&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=33&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=34&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=35&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=36&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=37&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=38&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=39&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=40&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=41&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=42&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=43&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=44&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=45&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=46&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=47&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=48&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=49&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=50&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=51&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=52&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=53&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=54&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=55&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=56&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=57&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=58&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=59&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=60&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=61&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=62&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=63&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=64&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=65&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=66&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=67&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=68&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=69&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=70&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=71&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=72&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=73&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=74&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=75&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=76&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=77&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=78&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=79&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=80&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=81&sort=verified",
  // "https://www.futurepedia.io/api/tools?page=82&sort=verified",
  "https://www.futurepedia.io/api/tools?page=83&sort=verified",
  "https://www.futurepedia.io/api/tools?page=84&sort=verified",
  "https://www.futurepedia.io/api/tools?page=85&sort=verified",
  "https://www.futurepedia.io/api/tools?page=86&sort=verified",
  "https://www.futurepedia.io/api/tools?page=87&sort=verified",
  "https://www.futurepedia.io/api/tools?page=88&sort=verified",
  "https://www.futurepedia.io/api/tools?page=89&sort=verified",
  "https://www.futurepedia.io/api/tools?page=90&sort=verified",
  "https://www.futurepedia.io/api/tools?page=91&sort=verified",
  "https://www.futurepedia.io/api/tools?page=92&sort=verified",
  "https://www.futurepedia.io/api/tools?page=93&sort=verified",
  "https://www.futurepedia.io/api/tools?page=94&sort=verified",
  "https://www.futurepedia.io/api/tools?page=95&sort=verified",
  "https://www.futurepedia.io/api/tools?page=96&sort=verified",
  "https://www.futurepedia.io/api/tools?page=97&sort=verified",
  "https://www.futurepedia.io/api/tools?page=98&sort=verified",
  "https://www.futurepedia.io/api/tools?page=99&sort=verified",
];

async function getLinks() {
  let title, description, link, image, category, tags, payment, subtitle;
  for (let j = 0; j < url.length; j++) {
    const result = await axios
      .get(url[j])
      .then((response) => {
        for (let i = 0; i < 8; i++) {
          console.log(i, j);
          title = response.data[i].toolName;
          description = getDescription(
            response.data[i].toolRichTextDescription
          );
          category = getCategoryNames(response.data[i].toolCategories);
          payment = response.data[i].pricing[0].toLowerCase();
          const imgP = convertImageUrl(response.data[i].mainImage.asset._ref);
          image = `https://cdn.sanity.io/images/u0v1th4q/production/${imgP}`;
          subtitle = response.data[i].toolShortDescription;

          array.push({
            title,
            description,
            category,
            payment,
            image,
            subtitle,
            tags: category,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(array);

  writeToFileArray(array, "futurepedia70-90.txt");
}

getLinks();

function getDescription(data) {
  const description = [];

  data.forEach((item) => {
    if (item.children) {
      const text = item.children.map((child) => child.text).join("");
      description.push(text.trim());
    }
  });

  return description.join("\n\n");
}

function getCategoryNames(toolCategories) {
  return toolCategories.map((category) => category.categoryName);
}

function convertImageUrl(imageUrl) {
  // Remove "image-" from the beginning of the string
  const trimmedImageUrl = imageUrl.replace(/^image-/, "");

  // Extract the file format suffix (e.g., "-png", "-jpg") from the string
  const fileFormat = trimmedImageUrl.match(/-(\w+)$/)[1];

  let convertedImageUrl;
  if (fileFormat) {
    // Replace the file format suffix with ".${format}"
    convertedImageUrl = trimmedImageUrl.replace(/-\w+$/, `.${fileFormat}`);
  } else {
    convertedImageUrl = trimmedImageUrl;
  }

  return convertedImageUrl;
}
