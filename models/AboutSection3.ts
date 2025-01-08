import { model, models, Schema } from "mongoose";

const AboutSection3Schema = new Schema({
  card1TitleEnglish: { type: String, required: true },
  card1TitleMacedonia: { type: String, required: true },
  card1TitleSerbian: { type: String, required: true },
  card2TitleEnglish: { type: String, required: true },
  card2TitleMacedonia: { type: String, required: true },
  card2TitleSerbian: { type: String, required: true },
  card1Description1English: { type: String, required: true },
  card1Description1Macedonia: { type: String, required: true },
  card1Description1Serbian: { type: String, required: true },
  card1Description2English: { type: String, required: true },
  card1Description2Macedonia: { type: String, required: true },
  card1Description2Serbian: { type: String, required: true },
  card2Description1English: { type: String, required: true },
  card2Description1Macedonia: { type: String, required: true },
  card2Description1Serbian: { type: String, required: true },
  card2Description2English: { type: String, required: true },
  card2Description2Macedonia: { type: String, required: true },
  card2Description2Serbian: { type: String, required: true },
  imageSrc1: { type: String, required: true },
  imageSrc2: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const AboutSection3 =
  models.AboutSection3 || model("AboutSection3", AboutSection3Schema);
