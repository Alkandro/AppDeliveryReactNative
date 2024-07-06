import { UserLocalRepositoryimpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { getUser } = new UserLocalRepositoryimpl();

export const GetUserLocalUseCase = async () => {
  return await getUser();
};
