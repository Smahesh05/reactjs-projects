const imageDownloader = require("image-downloader");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const PlaceModel = require("../Model/placeModel");
const User = require("../Model/userModel");
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

//upload photos
const photoMiddleware = multer({ dest: "uploads/" });
const uploadPhotoByDevice = (req, res) => {
  photoMiddleware.array("photos", 100)(req, res, (err) => {
    const uploadFiles = [];
    req.files.forEach((file) => {
      const { path, originalname } = file;
      const fileExtension = originalname.split(".").pop();
      const newPath = path + "." + fileExtension;
      fs.renameSync(path, newPath);
      uploadFiles.push(newPath.replace("uploads/", ""));
    });

    res.json(uploadFiles);
  });
};

//get places

const getPlaces = async (req, res) => {
  const places = await PlaceModel.find({ user: req.user.id });
  res.status(200).json(places);
};

//add placess
const addPlaces = async (req, res) => {
  const {
    title,
    address,
    photos,
    description,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body;

  // Assuming you have an authentication middleware that sets the user ID in the request object

  const place = await PlaceModel.create({
    user: req.user.id,
    title,
    address,
    photos,
    description,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  });
  res.status(201).json(place);
};

// get single place
const getPlaceById = (req, res) => {
  const { id } = req.params.id;
  const place = PlaceModel.findById(id);
  res.json(place);
};

//module exports
module.exports = {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,
  getPlaces,
  getPlaceById,
};
