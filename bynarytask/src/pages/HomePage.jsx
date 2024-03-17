import { useState } from "react";

import LeafletMap from "../components/LeafletMap";
import SearchBar from "../components/SearchBar";
import UserProfileItem from "../components/profile/UserProfileItem";
import PROFILES from "../utils/profiles.json";

const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredProfiles = PROFILES.filter((profile) => {
    const matchName = profile.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchLocation =
      !locationFilter ||
      profile.location.toLowerCase().includes(locationFilter.toLowerCase());

    return matchName, matchLocation;
  });

  const isProfileFound = filteredProfiles.length > 0;

  const summaryHandler = (profile) => {
    setSelectedProfile(profile);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setShowModal(false);
  };

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        locationFilter={locationFilter}
        setSearchQuery={setSearchQuery}
        setLocationFilter={setLocationFilter}
      />
      {isProfileFound ? (
        <ul className="users-list">
          {filteredProfiles.map((profile) => (
            <UserProfileItem
              key={profile.id}
              profile={profile}
              onSummaryClick={summaryHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No profiles found. </p>
      )}

      {selectedProfile && (
        <LeafletMap
          profile={selectedProfile}
          showModal={showModal}
          onHide={handleCloseModal}
        />
      )}
    </>
  );
};

export default HomePage;
