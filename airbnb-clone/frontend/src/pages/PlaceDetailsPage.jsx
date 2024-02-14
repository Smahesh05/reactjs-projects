import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlaceDetailsPage = () => {
  const [place, setPlace] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get("http://localhost:5000/api/places/" + id)
      .then((res) => setPlace(res.data));
  }, [id]);

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <a className="my-2 block font-semibold underline" target="_blank">
        {place.address}
      </a>
      <div className="grid gap-2 grid-cols-[2fr_1fr]">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                className="aspect-square object-cover"
                src={"http:localhost:5000/backend/uploads/" + place.photos?.[0]}
              />
            </div>
          )}
        </div>
        <div className="grid gap-2">
          {place.photos?.[1] && (
            <img
              className="aspect-square object-cover"
              src={"http:localhost:5000/backend/uploads/" + place.photos?.[1]}
            />
          )}
        </div>
      </div>
      {/* <PlaceGallery place={place} /> */}
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
          <br />
          Max number of guests: {place.maxGuests}
        </div>
        <div>{/* <BookingWidget place={place} /> */}</div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailsPage;
