import { mongooseConnection } from "@/lib/mongoose";
import { AboutBanner } from "@/models/AboutBanner";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1000mb",
    },
  },
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await AboutBanner.find());
  }

  if (method === "POST") {
    const {
      bannerTitleEnglish,
      bannerTitleMacedonia,
      bannerTitleSerbian,
      bannerDescription1English,
      bannerDescription1Macedonia,
      bannerDescription1Serbian,
      bannerDescription2English,
      bannerDescription2Macedonia,
      bannerDescription2Serbian,
      bannerImage,
    } = req.body;
    const AboutBannerDoc = await AboutBanner.create({
      bannerTitleEnglish,
      bannerTitleMacedonia,
      bannerTitleSerbian,
      bannerDescription1English,
      bannerDescription1Macedonia,
      bannerDescription1Serbian,
      bannerDescription2English,
      bannerDescription2Macedonia,
      bannerDescription2Serbian,
      bannerImage,
    });

    res.json(AboutBannerDoc);
  }

  if (method === "DELETE") {
    const { aboutbannerId } = req.query;
    if (!aboutbannerId) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    try {
      const result = await AboutBanner.findByIdAndDelete(aboutbannerId);

      if (!result) {
        return res.status(404).json({ message: "Product not found." });
      }

      res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
