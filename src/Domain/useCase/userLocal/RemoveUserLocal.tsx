import { UserLocalRepositoryimpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { remove } = new UserLocalRepositoryimpl();

export const RemoveUserLocalUseCase = async () => {
  return await remove();
};
