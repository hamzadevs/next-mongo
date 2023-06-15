// pages/api/users/[id].ts
import { UserModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/database/connect";
import { User } from "@/models/User";
type UpdateUserBody = Partial<User>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // first connect to the database
  await dbConnect();
  const id = req.query.id as string;
  if (req.method === "GET") {
    // for retrieving a single user
    const user = await UserModel.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
    }
  } else if (req.method === "PUT") {
    // updating a single user
    const body = req.body as UpdateUserBody;
    const user = await UserModel.findById(id);
    if (user) {
      user.set({ ...body });
      await user.save();
      res.status(200).json(user.toJSON());
    } else {
      res.status(404);
    }
  } else if (req.method === "DELETE") {
    // deleting a single user
    const user = await UserModel.findByIdAndRemove(id);
    if (user) {
      res.status(200).json(user.toJSON());
    } else {
      res.status(404);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
