const cheerio = require("cheerio");

function getPhotoByName(name) {
  return axios
    .get(
      `https://www.google.com/search?hl=en&ie=utf-8&q=${name}&filter=0&tbm=isch`
    )
    .then(
      (res) => {
        const images = [];
        if (res.status === 200) {
          const html = res.data;
          const $ = cheerio.load(html);

          $("img").each((index, image) => {
            const img = $(image).attr("src");
            images.push(img);
          });
          return images;
        }
      },
      (err) => console.log(err)
    );
}
module.exports = getPhotoByName;
