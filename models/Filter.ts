import { model, models, Schema } from "mongoose";

const FilterSchema = new Schema({
  filter: { type: String, required: true },
  filterCategory: { type: String },
  subfilterCategory: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Filter = models.Filter || model("Filter", FilterSchema);
