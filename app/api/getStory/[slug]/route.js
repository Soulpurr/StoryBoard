import "../../../../middleware/ConnectToMongo";
import Story from "@/models/Story";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export async function GET(req, context) {
  let { slug } = context.params;
  try {
    let story =await Story.findById(slug)
    return Response.json(story)
  } catch (error) {
    return Response.json({ error: error, success: false });
  }
}
