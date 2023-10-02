import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

export default function EditBook() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
    genre: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  // const { title, author, publishYear, genre } = formData;

  const onChangeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .put(`http://localhost:5000/api/book/${id}`, formData)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/book/${id}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : null}
      <div className="flex flex-col border-2 bordder-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <form onSubmit={onSubmitHandler}>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              className="border-2 border-gray-500px-4 px-2 py-2 w-full"
              name="title"
              value={formData.title}
              onChange={onChangeHandler}
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              className="border-2 border-gray-500px-4 px-2 py-2 w-full"
              name="author"
              value={formData.author}
              onChange={onChangeHandler}
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              className="border-2 border-gray-500px-4 py-2 px-2 w-full"
              name="publishYear"
              value={formData.publishYear}
              onChange={onChangeHandler}
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Genre</label>
            <input
              type="text"
              className="border-2 border-gray-500px-4 px-2 py-2 w-full"
              name="genre"
              value={formData.genre}
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" className="p-2 w-100 bg-sky-300 my-8">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
