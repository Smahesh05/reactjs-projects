import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../components/AddressLink";
import BookingWidget from "../components/BookingWidget";

const PlaceDetailsPage = () => {
  const [place, setPlace] = useState({});
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  //

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`http://localhost:5000/api/places/` + id)
      .then((res) => setPlace(res.data));
  }, [id]);

  if (showAllPhotos) {
    return (
      <div className="absolute bg-black text-white inset-0 min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div className="">
            <h2 className="text-3xl">Photos of {place.title}</h2>
            <AddressLink>{place.address}</AddressLink>
            <button onClick={() => setShowAllPhotos(false)}>
              Close Photos
            </button>
          </div>
        </div>
        {place.photos?.length > 0 &&
          place.photos.map((photo) => (
            <div className="" key={photo}>
              <img src={"http://localhost:5000/uploads/" + photo} alt="" />
            </div>
          ))}
      </div>
    );
  }

  return (
    <>
      <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
        <h1 className="text-3xl">{place.title}</h1>
        <AddressLink>{place.address}</AddressLink>
        <div className="grid gap-2 grid-cols-[2fr_1fr]">
          <div>
            {place.photos?.[0] && (
              <div>
                <img
                  className="aspect-square object-cover"
                  src={"http://localhost:5000/uploads/" + place.photos?.[0]}
                />
              </div>
            )}
          </div>
          <div className="grid gap-2">
            {place.photos?.[1] && (
              <img
                className="aspect-square object-cover"
                src={"http://localhost:5000/uploads/" + place.photos?.[1]}
              />
            )}
          </div>
          {place.photos.length > 0 && (
            <button
              onClick={() => setShowAllPhotos(true)}
              className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow  shadow-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              Show more photos
            </button>
          )}
        </div>

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
          <BookingWidget place={place} />
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
    </>
  );
};

export default PlaceDetailsPage;
