import { model, models, Schema } from "mongoose";

const AboutSection1Schema = new Schema({
  titleEnglish: { type: String, required: true },
  titleMacedonia: { type: String, required: true },
  titleSerbian: { type: String, required: true },
  descriptionEnglish: { type: String, required: true },
  descriptionMacedonia: { type: String, required: true },
  descriptionSerbian: { type: String, required: true },
  imageSrc: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const AboutSection1 =
  models.AboutSection1 || model("AboutSection1", AboutSection1Schema);
