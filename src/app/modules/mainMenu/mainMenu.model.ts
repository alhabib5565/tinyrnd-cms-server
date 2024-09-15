import { model, Schema } from 'mongoose';
import { TMainMenu } from './mainMenu.interface';

const dropdownItemSchema = new Schema({
  label: { type: String, required: true },
  URL: { type: String, required: true },
  order: { type: Number, required: true },
  //   dropdown: { type: [Object], required: false },
});

const mainMenuSchema = new Schema<TMainMenu>({
  label: { type: String, required: true },
  URL: { type: String, required: true },
  order: { type: Number, required: true },
  dropdown: { type: [dropdownItemSchema], required: false },
});

export const MainMenu = model('MainMenu', mainMenuSchema);
