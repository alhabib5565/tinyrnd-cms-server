import { TContactMessage } from './contact.messages.interface';
import { ContactMessage } from './contact.messages.model';

const sendContactMessage = async (payload: TContactMessage) => {
  const result = await ContactMessage.create(payload);
  return result;
};

const getAllContactMessage = async () => {
  const result = await ContactMessage.find();
  return result;
};

export const ContactMessageService = {
  sendContactMessage,
  getAllContactMessage,
};
