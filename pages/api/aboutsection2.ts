import { mongooseConnection } from "@/lib/mongoose";
import { AboutSection2 } from "@/models/AboutSection2";
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
    res.json(await AboutSection2.find());
  }

  if (method === "POST") {
    const {
      headingEnglish,
      headingMacedonia,
      headingSerbian,
      descriptionEnglish,
      descriptionMacedonia,
      descriptionSerbian,
      titleEnglish,
      titleMacedonia,
      titleSerbian,
    } = req.body;
    const AboutSection2Doc = await AboutSection2.create({
      headingEnglish,
      headingMacedonia,
      headingSerbian,
      descriptionEnglish,
      descriptionMacedonia,
      descriptionSerbian,
      titleEnglish,
      titleMacedonia,
      titleSerbian,
    });

    res.json(AboutSection2Doc);
  }

  if (method === "DELETE") {
    const { aboutsection2Id } = req.query;
    if (!aboutsection2Id) {
      return res.status(400).json({ message: "Section 2 is required." });
    }

    try {
      const result = await AboutSection2.findByIdAndDelete(aboutsection2Id);

      if (!result) {
        return res.status(404).json({ message: "Section 2 not found." });
      }

      res.status(200).json({ message: "Section 2 deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
