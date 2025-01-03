import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  productNameEng: { type: String, required: true },
  productNameMK: { type: String, required: true },
  productNameRS: { type: String, required: true },
  filter: { type: String },
  brandLabelFilter: { type: String },
  privateLabelFilter: { type: String },
  productDescriptionEng: { type: String, required: true },
  productDescriptionMK: { type: String, required: true },
  productDescriptionRS: { type: String, required: true },
  productBackground: { type: String, required: true },
  imageHeight: { type: Number, required: true },
  imageWidth: { type: Number, required: true },
  productImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Product = models.Product || model("Product", ProductSchema);
