import axios from "axios";

const API_URL = "http://localhost:5000/api/urls/";

const createUrl = async (urlData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, urlData, config);
  console.log(res);

  return res.data;
};

const getUrls = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

const getSingleShorturl = async () => {
  const res = await axios.get(API_URL + "/shortUrl");
  return res.data;
};

const deleteUrl = async (urlId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + urlId, config);

  return response.data;
};

const shortUrlService = {
  createUrl,
  getUrls,
  getSingleShorturl,
  deleteUrl,
};

export default shortUrlService;
