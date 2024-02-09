import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ShortenURLForm from "../components/ShortenURLForm";
import UrlList from "../components/UrlList";
import { getUrls, reset } from "../features/shortenUrls/shortUrlSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { urls, isLoading, isError, message } = useSelector(
    (state) => state.urls
  );

  // console.log(urls);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getUrls());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <p>ShortenURLS Dashboard {user && user.name}</p>
      <ShortenURLForm />

      <UrlList urls={urls} />
    </>
  );
};

export default Dashboard;
