import { model, models, Schema } from "mongoose";

const AboutBannerSchema = new Schema({
  bannerTitleEnglish: { type: String, required: true },
  bannerTitleMacedonia: { type: String, required: true },
  bannerTitleSerbian: { type: String, required: true },
  bannerDescription1English: { type: String, required: true },
  bannerDescription1Macedonia: { type: String, required: true },
  bannerDescription1Serbian: { type: String, required: true },
  bannerDescription2English: { type: String, required: true },
  bannerDescription2Macedonia: { type: String, required: true },
  bannerDescription2Serbian: { type: String, required: true },
  bannerImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const AboutBanner =
  models.AboutBanner || model("AboutBanner", AboutBannerSchema);
