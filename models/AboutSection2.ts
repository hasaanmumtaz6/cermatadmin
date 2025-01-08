import { model, models, Schema } from "mongoose";

const AboutSection2Schema = new Schema({
  headingEnglish: { type: String, required: true },
  headingMacedonia: { type: String, required: true },
  headingSerbian: { type: String, required: true },
  descriptionEnglish: { type: String, required: true },
  descriptionMacedonia: { type: String, required: true },
  descriptionSerbian: { type: String, required: true },
  titleEnglish: { type: String, required: true },
  titleMacedonia: { type: String, required: true },
  titleSerbian: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const AboutSection2 =
  models.AboutSection2 || model("AboutSection2", AboutSection2Schema);
