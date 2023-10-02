import { headers } from "next/headers";
import "../../../middleware/ConnectToMongo";
import Story from "@/models/Story";
var jwt = require("jsonwebtoken");

export async function POST(req) {
  const headerlist = headers();
  const token = headerlist.get("auth");
  try {
    // verifying users jwt
    let { title, description, story } = await req.json();
    
    if (token) {
      var decrypted = await jwt.verify(token, "abhi");
      if (decrypted) {
        req.user = decrypted.user;

        let story1 = new Story({
          title: title,
          description: description,
          story: story,

          user: req.user._id,
        });
        await story1.save();
        return Response.json({ message: "Story created", success: true });
      }
      return Response.json({ message: "Invalid", success: false });
    }
    return Response.json({ message: "No user", success: false });
  } catch (error) {
    console.log(token)
    return Response.json({ error, success: false });
  }
}
