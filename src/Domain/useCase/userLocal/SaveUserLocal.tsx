import { UserLocalRepositoryimpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { save } = new UserLocalRepositoryimpl();

export const SaveUserLocalUseCase = async (user: User) => {
  return await save(user);
};
