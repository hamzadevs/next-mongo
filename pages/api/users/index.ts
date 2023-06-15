import { UserModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/database/connect";
interface CreateUserBody {
  name: string;
  avatar: string;
  email: string;
  salary: number;
  date: Date;
  status: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // first connect to the database
  await dbConnect();
  if (req.method === "GET") {
    // for retrieving todos list
    const todos = await UserModel.find({}).limit(10).lean();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    // creating a single todo
    const body = req.body as CreateUserBody;
    const todo = new UserModel({
      name: body.name,
      email: body.email,
      avatar: body.avatar,
      salary: body.salary,
      date: body.date,
      status: body.status,
    });
    await todo.save();

    res.status(200).json(todo.toJSON());
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}