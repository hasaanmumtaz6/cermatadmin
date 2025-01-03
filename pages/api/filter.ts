import { mongooseConnection } from "@/lib/mongoose";
import { Filter } from "@/models/Filter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await Filter.find());
  }

  if (method === "POST") {
    const { filter, filterCategory, subfilterCategory } = req.body;
    const filterDoc = await Filter.create({
      filter,
      filterCategory,
      subfilterCategory,
    });

    res.json(filterDoc);
  }

  if (method === "DELETE") {
    const { filterId } = req.query;
    if (!filterId) {
      return res.status(400).json({ message: "Filter ID is required." });
    }

    try {
      const result = await Filter.findByIdAndDelete(filterId);

      if (!result) {
        return res.status(404).json({ message: "Filter not found." });
      }

      res.status(200).json({ message: "Filter deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: `Internal server error ${error}` });
    }
  }
}
