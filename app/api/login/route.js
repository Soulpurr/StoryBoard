import "../../../middleware/ConnectToMongo";
import users from "@/models/users";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
export async function POST(req, res) {
  let secret = "abhi";
  let { email, password } = await req.json();
  console.log(email);
  try {
    let success;
    let user = await users.findOne({ email: email });

    if (user) {
      let isPass = bcrypt.compareSync(password, user.password);
      if (isPass) {
        success = true;
        let token = await jwt.sign({ user: user }, secret, {
          expiresIn: "7d",
        });

        cookies().set("token", token);
        return Response.json({
          token,
          success,
          isAdmin: user.isAdmin,
        });
      }
      success = false;
      return Response.json({
        success: success,
        error: "Invalid credentials",
      });
    }
    return Response.json({ message: "User doesnt exist", success: false });
  } catch (error) {
    return Response.json({ error: error, success: false });
  }
}
