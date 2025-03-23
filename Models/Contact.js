import mongoose from "mongoose";

const contactSchema = new mongoose.SchemaTypeOptions({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  type: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
