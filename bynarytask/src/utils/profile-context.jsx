/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import profilesData from "./profiles.json";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(profilesData);

  // Function to add a profile
  const addProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  // Function to edit a profile
  const editProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
  };

  // Function to delete a profile
  const deleteProfile = (profileId) => {
    const updatedProfiles = profiles.filter(
      (profile) => profile.id !== profileId
    );
    setProfiles(updatedProfiles);
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, addProfile, editProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
