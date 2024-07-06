import React from "react";
import { RemoveUserLocalUseCase } from "../../../../Domain/useCase/userLocal/RemoveUserLocal";

const ProfileIfoViewModel = () => {
  const removeSession = async () => {
    await  RemoveUserLocalUseCase();
  };
  return {
    removeSession
  };
};

export default ProfileIfoViewModel;
