import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const editUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
  editUser,
  deleteUser,
};
