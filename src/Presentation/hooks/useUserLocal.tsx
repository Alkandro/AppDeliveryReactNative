import React, { useEffect, useState } from "react";
import { User } from "../../Domain/entities/User";
import { GetUserLocalUseCase } from "../../Domain/useCase/userLocal/GetUserLocal";

export const useUserLocal = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  return { 
    user,
    getUserSession
   };
};


