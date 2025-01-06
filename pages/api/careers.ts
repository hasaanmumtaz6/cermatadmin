import { mongooseConnection } from "@/lib/mongoose";
import { Careers } from "@/models/Careers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await Careers.find());
  }

  if (method === "POST") {
    const {
      careersTitleEnglish,
      careersTitleMacedonian,
      careersTitleSerbian,
      careersCategoryEnglish,
      careersCategoryMacedonian,
      careersCategorySerbian,
      careersDescriptionEnglish,
      careersDescriptionMacedonian,
      careersDescriptionSerbian,
      careersImage,
    } = req.body;
    const careersDoc = await Careers.create({
      careersTitleEnglish,
      careersTitleMacedonian,
      careersTitleSerbian,
      careersCategoryEnglish,
      careersCategoryMacedonian,
      careersCategorySerbian,
      careersDescriptionEnglish,
      careersDescriptionMacedonian,
      careersDescriptionSerbian,
      careersImage,
    });

    res.json(careersDoc);
  }

  if (method === "DELETE") {
    const { careersId } = req.query;
    if (!careersId) {
      return res.status(400).json({ message: "Careers ID is required." });
    }

    try {
      const result = await Careers.findByIdAndDelete(careersId);

      if (!result) {
        return res.status(404).json({ message: "Careers not found." });
      }

      res.status(200).json({ message: "Careers deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
