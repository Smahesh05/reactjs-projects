import { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import AddProfileForm from "../components/profile/AddProfileForm";
import EditProfileForm from "../components/profile/EditProfileForm";
import ProfileTable from "../components/profile/ProfileTable";
import { ProfileContext } from "../utils/profile-context";

const AdminPanal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const { profiles, addProfile, editProfile, deleteProfile } =
    useContext(ProfileContext);

  const handleAddProfile = (newProfile) => {
    addProfile(newProfile);
  };

  const handleEditProfile = (updatedProfile) => {
    editProfile(updatedProfile);
    setShowModal(false);
  };

  const handleDelete = (profileId) => {
    deleteProfile(profileId);
  };

  const handleOpenModal = (profile = null, editMode = false) => {
    setSelectedProfile(editMode ? profile : null);
    setIsEditMode(editMode);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setIsEditMode(false);
    setShowModal(false);
  };

  return (
    <>
      <Button size="sm" className="float-right mb-2" onClick={handleOpenModal}>
        Add New Profile
      </Button>
      {showModal && (
        <div>
          {isEditMode ? (
            <EditProfileForm
              showModal={showModal}
              profile={selectedProfile}
              onUpdate={handleEditProfile}
              onClose={handleCloseModal}
            />
          ) : (
            <AddProfileForm
              show={showModal}
              onAdd={handleAddProfile}
              onClose={handleCloseModal}
            />
          )}
        </div>
      )}

      <ProfileTable
        profiles={profiles}
        onDelete={handleDelete}
        onEdit={handleOpenModal}
      />
    </>
  );
};

export default AdminPanal;
