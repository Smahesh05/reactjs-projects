import { useNavigate, useParams } from "react-router-dom";
import PROFILES from "../utils/profiles.json";

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const findProfile = PROFILES.find((profile) => profile.id == id);

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <p className="back-btn" onClick={goBack}>
        back
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
