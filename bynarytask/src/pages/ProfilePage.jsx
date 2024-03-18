import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../utils/profile-context";

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles } = useContext(ProfileContext);

  const findProfile = profiles.find((profile) => profile.id === parseInt(id));

  function goBack() {
    navigate(-1);
  }

  if (!findProfile) {
    return <p>Profile not found</p>;
  }

  return (
    <>
      <p className="back-btn" onClick={goBack}>
        Back
      </p>
      <div className="profile-details-container">
        <div className="profile-photo">
          <img src={findProfile.photo} alt={findProfile.name} />
        </div>
        <div className="profile-info">
          <h2>{findProfile.name}</h2>
          <div className="profile-details__item">
            <strong>Location:</strong> {findProfile.location}
          </div>
          <div className="profile-details__item">
            <strong>Contact:</strong> {findProfile.contact}
          </div>
          <div className="profile-details__item">
            <strong>Interests:</strong> {findProfile.interests.join(", ")}
          </div>
          <div className="profile-details__item">
            <strong>Description:</strong> {findProfile.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
