import { mongooseConnection } from "@/lib/mongoose";
import { News } from "@/models/News";
import { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1000mb',
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
    res.json(await News.find());
  }

  if (method === "POST") {
    const {
      newsTitleEng,
      newsTitleMK,
      newsTitleRS,
      newsCategoryEng,
      newsCategoryMK,
      newsCategoryRS,
      newsDescriptionEng,
      newsDescriptionMK,
      newsDescriptionRS,
      newsDescription2Eng,
      newsDescription2MK,
      newsDescription2RS,
      newsDescription3Eng,
      newsDescription3MK,
      newsDescription3RS,
      newsDescription4Eng,
      newsDescription4MK,
      newsDescription4RS,
      newsDescription5Eng,
      newsDescription5MK,
      newsDescription5RS,
      newsDescription6Eng,
      newsDescription6MK,
      newsDescription6RS,
      imageSrc,
    } = req.body;
    const productListerDoc = await News.create({
      newsTitleEng,
      newsTitleMK,
      newsTitleRS,
      newsCategoryEng,
      newsCategoryMK,
      newsCategoryRS,
      newsDescriptionEng,
      newsDescriptionMK,
      newsDescriptionRS,
      newsDescription2Eng,
      newsDescription2MK,
      newsDescription2RS,
      newsDescription3Eng,
      newsDescription3MK,
      newsDescription3RS,
      newsDescription4Eng,
      newsDescription4MK,
      newsDescription4RS,
      newsDescription5Eng,
      newsDescription5MK,
      newsDescription5RS,
      newsDescription6Eng,
      newsDescription6MK,
      newsDescription6RS,
      imageSrc,
    });

    res.json(productListerDoc);
  }

  if (method === "DELETE") {
    const { newsId } = req.query;
    if (!newsId) {
      return res.status(400).json({ message: "News ID is required." });
    }

    try {
      const result = await News.findByIdAndDelete(newsId);

      if (!result) {
        return res.status(404).json({ message: "News not found." });
      }

      res.status(200).json({ message: "News deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
