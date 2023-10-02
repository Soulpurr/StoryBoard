import "../../../middleware/ConnectToMongo";
import Story from "@/models/Story";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export async function GET(req, res) {
  
  try {
    let stories =await Story.find()
    return Response.json(stories)
  } catch (error) {
    return Response.json({ error: error, success: false });
  }
}
