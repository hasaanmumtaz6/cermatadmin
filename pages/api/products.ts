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

}
