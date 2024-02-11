const imageDownloader = require("image-downloader");
const path = require("path");
// console.log({ __dirname });

const uploadPhotoByLink = async (req, res) => {
  const { link } = req.body;

  const newName = "photo" + Date.now() + ".jpg";

  const parentDir = path.join(__dirname, "..");

  const uploadFolderPath = path.join(parentDir, "uploads");

  await imageDownloader.image({
    url: link,
    dest: path.join(uploadFolderPath, newName),
  });

  res.json(newName);
};

//module exports
module.exports = {
  uploadPhotoByLink,
};
