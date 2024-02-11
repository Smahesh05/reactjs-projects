import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            to={"/account/places/new"}
            className="bg-primary py-2 px-4 text-white"
          >
            + Add New Place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div className="max-w-screen-lg mt-0 mx-auto">
          <form>
            <>
              <h2 className="text-2xl mt-4">Title</h2>
              <p className="text-gray-500 text-sm">Title for your place</p>
              <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </>
            <>
              <h2 className="text-2xl mt-4">Address</h2>
              <p className="text-gray-500 text-sm">Address to this place</p>
              <input
                type="text"
                placeholder="title"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </>
            <>
              <h2 className="text-2xl mt-4">Photos</h2>
              <p className="text-gray-500 text-sm">more = better</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="add photo using link..."
                  value={photoLink}
                  onChange={(e) => setPhotoLink(e.target.value)}
                />
                <button className="bg-gray-200 px-4 rounded-lg">
                  Add&nbsp;photo
                </button>
              </div>
              <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <button className="border bg-transparent rounded-xl p-3">
                  +
                </button>
              </div>
            </>
            <>
              <h2 className="text-2xl mt-4">Description</h2>
              <p className="text-gray-500 text-sm">descript for your places</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </>
            <>
              <h2 className="text-2xl mt-4">Perks</h2>
              <p className="text-gray-500 text-sm">Select all the perks</p>
              <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <label className="border p-4 flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" />
                  <span>Wifi</span>
                </label>
                <label className="border p-4 flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" />
                  <span>TV</span>
                </label>
                <label className="border p-4 flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" />
                  <span>Free&nbsp;Parking&nbsp;spot</span>
                </label>
                <label className="border p-4 flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" />
                  <span>private&nbsp;Enterence</span>
                </label>
                <label className="border p-4 flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" />
                  <span>pets</span>
                </label>
                <label className="border p-4 flex gap-2 items-center cursor-pointer">
                  <input type="checkbox" />
                  <span>Radio</span>
                </label>
              </div>
            </>
            <>
              <h2 className="text-2xl mt-4">Extra Info</h2>
              <p className="text-gray-500 text-sm">house rules, etc</p>
              <textarea
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
              />
            </>
            <>
              <h2 className="text-2xl mt-4">Check in&out times</h2>
              <p className="text-gray-500 text-sm">add check in and checkout</p>
            </>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="">
                <h3 className="mt-2 -mb-1">Check in</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="">
                <h3 className="mt-2 -mb-1">Check out</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="">
                <h3 className="mt-2 -mb-1">Maximum guests</h3>
                <input
                  type="text"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </div>
            </div>
            <button className="primary my-4 ">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
