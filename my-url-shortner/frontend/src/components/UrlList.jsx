/* eslint-disable react/prop-types */

import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteUrl } from "../features/shortenUrls/shortUrlSlice";

const UrlList = ({ urls }) => {
  const dispatch = useDispatch();

  const handleUrlClick = async (shortUrl) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/urls/${shortUrl}`
      );
      window.location.href = response.request.responseURL;
    } catch (error) {
      toast.error("Error updating click count:", error);
    }
  };

  return (
    <section>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((shortUrl) => (
            <tr key={shortUrl._id}>
              <td>
                <a href={shortUrl.full}> {shortUrl.full} </a>
              </td>
              <td>
                <a
                  href={shortUrl.full}
                  onClick={() => handleUrlClick(shortUrl.short)}
                >
                  {" "}
                  {shortUrl.short}{" "}
                </a>
              </td>
              <td>{shortUrl.clicks}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteUrl(shortUrl._id))}
                  className="close"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UrlList;
