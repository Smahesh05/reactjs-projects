const imageDownloader = require("image-downloader");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const PlaceModel = require("../Model/placeModel");
const User = require("../Model/userModel");
const Booking = require("../Model/bookingModel");

const uploadPhotoByLink = async (req, res) => {
  const { link } = req.body;

  const newName = "photo" + Date.now() + ".jpg";

  const parentDir = path.join(__dirname, "../");

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

// get all Places

const getAllPlaces = async (req, res) => {
  res.json(await PlaceModel.find());
};

//get places by user ID

const getMyPlaces = async (req, res) => {
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

// get place by place ID
const getPlaceById = async (req, res) => {
  const { id } = req.params;
  const place = await PlaceModel.findById(id);
  res.json(place);
};

const bookPlaceByPlaceId = async (req, res) => {
  const { name, phone, place, checkIn, checkOut, price, numberOfguests } =
    req.body;
  const bookPlace = await Booking.create({
    name,
    phone,
    place,
    checkIn,
    checkOut,
    numberOfguests,
    price,
  });
  res.status(201).json(bookPlace);
};

//module exports
module.exports = {
  uploadPhotoByLink,
  uploadPhotoByDevice,
  addPlaces,
  getAllPlaces,
  getMyPlaces,
  getPlaceById,
  bookPlaceByPlaceId,
};
