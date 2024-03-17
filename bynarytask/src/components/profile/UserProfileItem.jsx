/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Card from "../Card";
import "./UserProfileItem.css";

const UserProfileItem = ({ profile, onSummaryClick }) => {
  const hadnleSummary = () => {
    onSummaryClick(profile);
  };

  return (
    <>
      <li className="user-item">
        <Card className="user-item__content">
          <div className="user-profile-card">
            <Link to={`/${profile.id}`}>
              <div className="user-info">
                <div className="user-item__image">
                  <Avatar image={profile.photo} alt={profile.name} />
                </div>
                <div className="user-item__info">
                  <h2>{profile.name}</h2>
                  <p>{profile.description.slice(0, 35)}</p>
                </div>
              </div>
            </Link>

            <button className="btn-summary" onClick={hadnleSummary}>
              Summary
            </button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default UserProfileItem;
