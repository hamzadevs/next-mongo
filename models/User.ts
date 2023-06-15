import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class User {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  name: string;

  @prop()
  avatar: string;

  @prop()
  email: string;

  @prop()
  salary: string;

  @prop({ default: () => new Date().toISOString() })
  date: string;

  @prop({ default: false })
  status: boolean;

}