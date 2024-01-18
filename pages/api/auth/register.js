import { errorHandler } from "../../../middleware/error";
import { User } from "../../../models/user";
import { connectDB } from "../../../utils/connectDB";
import { jwtToken } from "../../../utils/createToken";
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return errorHandler(res, 400, "Only post requests are allowed");
    }
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return errorHandler(res, 401, "Fill all the fields");
    }

    await connectDB();

    const userExists = await User.findOne({ email });
    console.log(userExists);

    if (userExists) {
      return errorHandler(res, 402, "User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      let token = jwtToken(user._id);
      res
        .setHeader(
          "Set-Cookie",
          cookie.serialize("Todo_Cookie", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 15, // 15 days
            path: "/",
          })
        )
        .status(200)
        .send("Registered successfully");
      console.log(token);
    }
  } catch (e) {
    console.log(e);
  }
};

export default handler;
