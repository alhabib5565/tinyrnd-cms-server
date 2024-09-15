import { TMainMenu } from './mainMenu.interface';
import { MainMenu } from './mainMenu.model';

const createMainMenu = async (payload: TMainMenu) => {
  const menuCount = await MainMenu.estimatedDocumentCount();
  payload.order = menuCount + 1 || 1;
  payload.URL = payload.URL.split(' ').join('-').toLowerCase();

  const result = await MainMenu.create(payload);
  return result;
};

const getAllMainMenu = async () => {
  const result = await MainMenu.find().sort({ order: 1 });
  return result;
};

const getSingleMainMenu = async (id: string) => {
  const result = await MainMenu.findById(id);
  return result;
};

const editMainMenu = async (id: string, payload: Partial<TMainMenu>) => {
  const result = await MainMenu.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteMainMenu = async (id: string) => {
  const result = await MainMenu.findByIdAndDelete(id);
  return result;
};

const deleteDropdownItem = async (
  mainMenuItemId: string,
  dropdownItemId: string,
) => {
  const result = await MainMenu.findByIdAndUpdate(
    mainMenuItemId,
    { $pull: { dropdown: { _id: dropdownItemId } } },
    { new: true },
  );
  return result;
};

const rearrangeMainMenuItem = async (payload: TMainMenu[]) => {
  for (let i = 0; i < payload.length; i++) {
    const item = payload[i];
    await MainMenu.findByIdAndUpdate(item._id, {
      order: i + 1,
    });
  }

  return null;
};

export const MainMenuService = {
  createMainMenu,
  getAllMainMenu,
  getSingleMainMenu,
  editMainMenu,
  deleteMainMenu,
  deleteDropdownItem,
  rearrangeMainMenuItem,
};
