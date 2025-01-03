import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await Product.find());
  }

  if (method === "POST") {
    const {
      productNameEng,
      productNameMK,
      productNameRS,
      productDescriptionEng,
      productDescriptionMK,
      productDescriptionRS,
      productBackground,
      imageHeight,
      imageWidth,
      productImage,
    } = req.body;
    const productListerDoc = await Product.create({
      productNameEng,
      productNameMK,
      productNameRS,
      productDescriptionEng,
      productDescriptionMK,
      productDescriptionRS,
      productBackground,
      imageHeight,
      imageWidth,
      productImage,
    });

    res.json(productListerDoc);
  }

  if (method === "DELETE") {
    const { productId } = req.query; 
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    try {
      const result = await Product.findByIdAndDelete(productId);

      if (!result) {
        return res.status(404).json({ message: "Product not found." });
      }

      res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
