import { mongooseConnection } from "@/lib/mongoose";
import { AboutMatrix } from "@/models/AboutMatrix";
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
    res.json(await AboutMatrix.find());
  }

  if (method === "POST") {
    const {
      headingEnglish,
      headingMacedonia,
      headingSerbian,
      matrixNumber1,
      matrixNumber2,
      matrixNumber3,
      description1English,
      description1Macedonia,
      description1Serbian,
      description2English,
      description2Macedonia,
      description2Serbian,
      description3English,
      description3Macedonia,
      description3Serbian,
    } = req.body;
    const AboutMatrixDoc = await AboutMatrix.create({
      headingEnglish,
      headingMacedonia,
      headingSerbian,
      matrixNumber1,
      matrixNumber2,
      matrixNumber3,
      description1English,
      description1Macedonia,
      description1Serbian,
      description2English,
      description2Macedonia,
      description2Serbian,
      description3English,
      description3Macedonia,
      description3Serbian,
    });

    res.json(AboutMatrixDoc);
  }

  if (method === "DELETE") {
    const { aboutmatrixId } = req.query;
    if (!aboutmatrixId) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    try {
      const result = await AboutMatrix.findByIdAndDelete(aboutmatrixId);

      if (!result) {
        return res.status(404).json({ message: "Product not found." });
      }

      res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
