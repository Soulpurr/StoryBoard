import "../../../../middleware/ConnectToMongo";
import Story from "@/models/Story";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
import { headers } from "next/headers";
import users from "@/models/users";
export async function POST(req, context) {
  try {
    let { slug } = context.params;
    const headerlist = headers();
    const token = headerlist.get("auth");
    if (token) {
      var decrypted = await jwt.verify(token, "abhi");
      console.log(decrypted);
      if (decrypted) {
        req.user = decrypted.user;

        let updatedVotes = await Story.findByIdAndUpdate(
          { _id: slug },
          { $push: { upvotes: req.user._id } },
          { upsert: true, new: true }
        );

        //this endpoint is for user who is liking the story i.e id of this story will be saved in its liked section
        let Liked = await users.findByIdAndUpdate(
          { _id: req.user._id },
          { $push: { liked: slug } },
          { upsert: true, new: true }
        );

        return Response.json({ message: "Liked Successfully", success: true });
      }
      return Response.json({ message: "err", success: false });
    }
    return Response.json({ message: "Invalid", success: false });
  } catch (err) {
    return Response.json(err);
  }
}
