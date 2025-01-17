import { model, models, Schema } from "mongoose";

const NewsSchema = new Schema({
  newsTitleEng: { type: String, required: true },
  newsTitleMK: { type: String, required: true },
  newsTitleRS: { type: String, required: true },
  newsCategoryEng: { type: String, required: true },
  newsCategoryMK: { type: String, required: true },
  newsCategoryRS: { type: String, required: true },
  newsDescriptionEng: { type: String, required: true },
  newsDescriptionMK: { type: String, required: true },
  newsDescriptionRS: { type: String, required: true },
  newsDescription2Eng: { type: String },
  newsDescription2MK: { type: String },
  newsDescription2RS: { type: String },
  newsDescription3Eng: { type: String },
  newsDescription3MK: { type: String },
  newsDescription3RS: { type: String },
  newsDescription4Eng: { type: String },
  newsDescription4MK: { type: String },
  newsDescription4RS: { type: String },
  newsDescription5Eng: { type: String },
  newsDescription5MK: { type: String },
  newsDescription5RS: { type: String },
  newsDescription6Eng: { type: String },
  newsDescription6MK: { type: String },
  newsDescription6RS: { type: String },
  imageSrc: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const News = models.News || model("News", NewsSchema);
