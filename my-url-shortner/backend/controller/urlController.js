const ShortUrl = require("../model/shortUrlModel");
const User = require("../model/userModel");
const express = require("express");

const getAllUrls = async (req, res) => {
  const shortUrls = await ShortUrl.find({ user: req.user.id });
  res.status(200).json(shortUrls);
};

const createUrl = async (req, res) => {
  if (!req.body.full) {
    res.status(400);
    throw new Error("Please add a url field");
  }

  const url = await ShortUrl.create({
    full: req.body.full,
    user: req.user.id,
  });
  res.status(201).json(url);
  // res.redirect("/");
};

const getSingleUrl = async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
};

const updateShortUrl = async (req, res) => {
  const shortUrl = await ShortUrl.findById(req.params.id);

  if (!shortUrl) {
    res.status(400);
    throw new Error("url not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  const updatedUrl = await ShortUrl.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUrl);
};

const deleteShortUrl = async (req, res) => {
  const shortUrl = await ShortUrl.findById(req.params.id);

  if (!shortUrl) {
    res.status(400);
    throw new Error("url not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (shortUrl.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await shortUrl.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAllUrls,
  createUrl,
  getSingleUrl,
  deleteShortUrl,
  updateShortUrl,
};
