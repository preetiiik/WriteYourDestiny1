import { handleContact } from "../contactHandler.js";

export default async function handler(req, res) {
  return handleContact(req, res);
}
