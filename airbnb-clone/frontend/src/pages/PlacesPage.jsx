import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Perks from "../components/Perks";

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
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const addPhotoBylinkHandler = async (e) => {
    e.preventDefault();
    const { data: fileName } = await axios.post(
      "http://localhost:5000/api/places/upload-by-link",
      {
        link: photoLink,
      }
    );

    setAddedPhotos((prev) => {
      return [...prev, fileName];
    });
    setPhotoLink("");
  };

  const uploadPhoto = async (e) => {
    const files = e.target.files;

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("http://localhost:5000/api/places/upload-photo", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { data: fileNames } = response;
        console.log(fileNames);
        setAddedPhotos((prev) => {
          return [...prev, ...fileNames];
        });
      });
  };

  const addNewPlace = async (e) => {
    e.preventDefault();

    const data = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      checkIn,
      checkOut,
      extraInfo,
      maxGuests,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/places/add",
        data,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      console.log(data, res);
      navigate("/account/places");
    } catch (error) {
      console.error("Error adding new place:", error);
    }
  };

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
      <div className="mt-4">
        <Link to={"/account/places/id"}>
          <div className="flex gap-4 bg-gray-100 p-4 rounded">
            <div className="w-32 h-32 bg-gray-300 shrink-0"></div>
            <div className="grow-0 shrink">
              <h2 className="text-xl">title</h2>
              <p className="text-sm mt-2">Description</p>
            </div>
          </div>
        </Link>
      </div>
      {action === "new" && (
        <div className="max-w-screen-lg mt-0 mx-auto">
          <form onSubmit={addNewPlace}>
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

                <button
                  className="bg-gray-200 px-4 rounded-lg"
                  onClick={addPhotoBylinkHandler}
                >
                  Add&nbsp;photo
                </button>
              </div>
              <div className="mt-2 grid items-center gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="h-32 flex">
                  {addedPhotos.map((photo) => (
                    <img
                      className="rounded-2xl w-full object-cover"
                      key={photo}
                      src={"http://localhost:5000/uploads/" + photo}
                      alt=""
                    />
                  ))}
                </div>
                <label className="border bg-transparent rounded-xl p-3">
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={uploadPhoto}
                  />
                  + Upload Photo
                </label>
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
              <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <Perks selected={perks} onChange={setPerks} />
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
