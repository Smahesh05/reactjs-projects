import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

export default function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/api/book/${id}`)
      .then(() => {
        setLoading(false);
        navigate(`/`);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h2 className="text-2xl">Are you sure want to delete?</h2>
          <button
            onClick={handleDeleteBook}
            className="bg-red-600 p-4 text-white rounded-md  m-8 w-full"
          >
            Yes, Delete it
          </button>
        </div>
      )}
    </div>
  );
}
