import { errorHandler } from "../../../middleware/error";
import { User } from "../../../models/user";
import { connectDB } from "../../../utils/connectDB";
import { jwtToken } from "../../../utils/createToken";
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const handler = async (req, res) => {
  console.log(req.body);
  try {
    if (req.method !== "POST") {
      return errorHandler(res, 400, "Only post requests are allowed");
    }
    const { email, password } = req.body;

    if (!email || !password) {
      return errorHandler(res, 401, "Fill all the fields");
    }

    await connectDB();

    const userExists = await User.findOne({ email }).select("+password");

    if (!userExists) {
      return errorHandler(res, 402, "User does not exists");
    }

    if (userExists.password === password) {
      let token = jwtToken(userExists._id);
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
        .send(userExists);
      console.log(token);
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (e) {
    console.log(e);
  }
};

export default handler;
