import { model, models, Schema } from "mongoose";

const AboutMatrixSchema = new Schema({
  headingEnglish: { type: String, required: true },
  headingMacedonia: { type: String, required: true },
  headingSerbian: { type: String, required: true },
  matrixNumber1: { type: String, required: true },
  matrixNumber2: { type: String, required: true },
  matrixNumber3: { type: String, required: true },
  description1English: { type: String, required: true },
  description1Macedonia: { type: String, required: true },
  description1Serbian: { type: String, required: true },
  description2English: { type: String, required: true },
  description2Macedonia: { type: String, required: true },
  description2Serbian: { type: String, required: true },
  description3English: { type: String, required: true },
  description3Macedonia: { type: String, required: true },
  description3Serbian: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const AboutMatrix =
  models.AboutMatrix || model("AboutMatrix", AboutMatrixSchema);
