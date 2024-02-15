import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Perks from "../components/Perks";

const PlacesFormPage = () => {
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

  //   const { action } = useParams();
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
        // console.log(fileNames);
        setAddedPhotos((prev) => {
          return [...prev, ...fileNames];
        });
      });
  };

  // aad photo to favorites

  const addPhotoToFavorite = (e, fileName) => {
    e.preventDefault();
    const addedPhotoWithoutSelect = addedPhotos.filter(
      (photo) => photo !== fileName
    );
    const newAddedPhoto = [fileName, ...addedPhotoWithoutSelect];
    setAddedPhotos(newAddedPhoto);
  };

  const removePhoto = (e, fileName) => {
    e.preventDefault();
    const deletPhoto = addedPhotos.filter((photo) => photo !== fileName);
    setAddedPhotos(deletPhoto);
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
          <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {addedPhotos.map((photo) => (
              <div className="h-32 flex relative" key={photo}>
                <img
                  className="rounded-2xl w-full object-cover"
                  src={"http://localhost:5000/uploads/" + photo}
                  alt=""
                />
                <button
                  onClick={(e) => removePhoto(e, photo)}
                  className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
                >
                  X
                </button>
                <button
                  className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
                  onClick={(e) => addPhotoToFavorite(e, photo)}
                >
                  {photo === addedPhotos[0] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            ))}
            <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
              <input
                type="file"
                className="hidden"
                multiple
                onChange={uploadPhoto}
              />
              +UploadPhoto
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
  );
};

export default PlacesFormPage;
