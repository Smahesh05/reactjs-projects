import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination} className="bg-sky-800  py-1 rounded-lg w-fit">
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
