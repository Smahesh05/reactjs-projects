import { useState } from "react";

import { Button } from "react-bootstrap";
import AddProfileForm from "../components/profile/AddProfileForm";
import ProfileTable from "../components/profile/ProfileTable";
import PROFILES from "../utils/profiles.json";

const AdminPanal = () => {
  const [profiles, setProfiles] = useState(PROFILES);
  const [showModal, setShowModal] = useState(false);

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const handleDelete = (profileId) => {
    const updatedProfiles = PROFILES.filter(
      (profile) => profile.id !== profileId
    );
    setProfiles(updatedProfiles);
    console.log(updatedProfiles);
  };

  const openAddProfileModal = () => {
    setShowModal(true);
  };

  const closeAddProfileModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        size="sm"
        className="float-right mb-2"
        onClick={openAddProfileModal}
      >
        Add New Profile
      </Button>
      <AddProfileForm
        show={showModal}
        onHide={closeAddProfileModal}
        onAdd={handleAddProfile}
      />
      <ProfileTable profiles={profiles} onDelete={handleDelete} />
    </>
  );
};

export default AdminPanal;
