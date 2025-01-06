import { model, models, Schema } from "mongoose";

const CareersSchema = new Schema({
  careersTitleEnglish: { type: String, required: true },
  careersTitleMacedonian: { type: String, required: true },
  careersTitleSerbian: { type: String, required: true },
  careersCategoryEnglish: { type: String, required: true },
  careersCategoryMacedonian: { type: String, required: true },
  careersCategorySerbian: { type: String, required: true },
  careersDescriptionEnglish: { type: String, required: true },
  careersDescriptionMacedonian: { type: String, required: true },
  careersDescriptionSerbian: { type: String, required: true },
  careersImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Careers = models.Careers || model("Careers", CareersSchema);
