import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [places, setPlaces] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/places/get", {
        // headers: {
        //   Authorization: "Bearer " + userInfo.token,
        // },
      })

      .then((data) => setPlaces(data.data));
  }, []);

  return (
    <div className="grid gap-6 gap-y-8 mt-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.map((place) => (
        <Link to={"/place/" + place._id} key={place._id}>
          <div>
            <div className=" flex rounded-2xl bg-gray-500">
              {place.photos?.[0] && (
                <img
                  className="object-cover aspect-square rounded-2xl"
                  src={
                    "http://localhost:5000/backend/uploads/" + place.photos?.[0]
                  }
                />
              )}
            </div>
            <h2 className="text-sm truncate">{place.title}</h2>
            <h3 className="font-bold truncate">{place.address}</h3>
            <div className="mt-1">
              <span className="font-bold">$120</span> Per Night
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
