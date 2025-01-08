import { mongooseConnection } from "@/lib/mongoose";
import { AboutSection1 } from "@/models/AboutSection1";
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
    res.json(await AboutSection1.find());
  }

  if (method === "POST") {
    const {
      titleEnglish,
      titleMacedonia,
      titleSerbian,
      descriptionEnglish,
      descriptionMacedonia,
      descriptionSerbian,
      imageSrc,
    } = req.body;
    const AboutSection1Doc = await AboutSection1.create({
      titleEnglish,
      titleMacedonia,
      titleSerbian,
      descriptionEnglish,
      descriptionMacedonia,
      descriptionSerbian,
      imageSrc,
    });

    res.json(AboutSection1Doc);
  }

  if (method === "DELETE") {
    const { aboutsection1Id } = req.query;
    if (!aboutsection1Id) {
      return res.status(400).json({ message: "Section 1 ID is required." });
    }

    try {
      const result = await AboutSection1.findByIdAndDelete(aboutsection1Id);

      if (!result) {
        return res.status(404).json({ message: "Section 1 not found." });
      }

      res.status(200).json({ message: "Section 1 deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
