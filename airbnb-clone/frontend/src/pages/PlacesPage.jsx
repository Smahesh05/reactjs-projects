import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PlacesPage = () => {
  const [userPlaces, setUserPlaces] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/places/user-places", {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      })

      .then((res) => setUserPlaces(res.data));
  }, [userInfo]);

  return (
    <div>
      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4">
        {userPlaces.map((uPlace) => (
          <Link to={"/account/places/" + uPlace._id} key={uPlace._id}>
            <div className="flex gap-4 bg-gray-100 p-4 rounded">
              <div className="w-32 h-32 bg-gray-300 shrink-0">
                <img
                  src={
                    "http://localhost:5000/backend/uploads/" + uPlace.photos[0]
                  }
                />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{uPlace.title}</h2>
                <p className="text-sm mt-2">{uPlace.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
