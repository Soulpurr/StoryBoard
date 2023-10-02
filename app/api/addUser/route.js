import "../../../middleware/ConnectToMongo";
import users from "@/models/users";
var bcrypt = require("bcryptjs");

export async function POST(req, res) {
  let { username, email, password } = await req.json();
  try {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);

    let user = new users({
      username: username,
      email: email,
      password: hash,
    });
    await user.save();
    return Response.json({
      message: "User successfully created",
      success: true,
    });
  } catch (error) {
    Response.json({ error: error, success: false });
  }
}
