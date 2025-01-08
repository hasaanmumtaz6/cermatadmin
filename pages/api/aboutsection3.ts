import { mongooseConnection } from "@/lib/mongoose";
import { AboutSection3 } from "@/models/AboutSection3";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1500mb",
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
    res.json(await AboutSection3.find());
  }

  if (method === "POST") {
    const {
      card1TitleEnglish,
      card1TitleMacedonia,
      card1TitleSerbian,
      card2TitleEnglish,
      card2TitleMacedonia,
      card2TitleSerbian,
      card1Description1English,
      card1Description1Macedonia,
      card1Description1Serbian,
      card1Description2English,
      card1Description2Macedonia,
      card1Description2Serbian,
      card2Description1English,
      card2Description1Macedonia,
      card2Description1Serbian,
      card2Description2English,
      card2Description2Macedonia,
      card2Description2Serbian,
      imageSrc1,
      imageSrc2,
    } = req.body;
    const AboutSection3Doc = await AboutSection3.create({
      card1TitleEnglish,
      card1TitleMacedonia,
      card1TitleSerbian,
      card2TitleEnglish,
      card2TitleMacedonia,
      card2TitleSerbian,
      card1Description1English,
      card1Description1Macedonia,
      card1Description1Serbian,
      card1Description2English,
      card1Description2Macedonia,
      card1Description2Serbian,
      card2Description1English,
      card2Description1Macedonia,
      card2Description1Serbian,
      card2Description2English,
      card2Description2Macedonia,
      card2Description2Serbian,
      imageSrc1,
      imageSrc2,
    });

    res.json(AboutSection3Doc);
  }

  if (method === "DELETE") {
    const { aboutsection3Id } = req.query;
    if (!aboutsection3Id) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    try {
      const result = await AboutSection3.findByIdAndDelete(aboutsection3Id);

      if (!result) {
        return res.status(404).json({ message: "Product not found." });
      }

      res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
