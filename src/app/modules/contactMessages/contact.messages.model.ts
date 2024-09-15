import { model, Schema } from 'mongoose';
import { TContactMessage } from './contact.messages.interface';

const ContactMessageSchema = new Schema<TContactMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    contactNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 11,
    },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const ContactMessage = model('ContactMessage', ContactMessageSchema);
