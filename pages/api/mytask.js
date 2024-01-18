import { parse } from "cookie";
import { errorHandler } from "../../middleware/error";
import { authUser } from "../../utils/authUser";
import { connectDB } from "../../utils/connectDB";
import { Task } from "../../models/task";

const handler = async (req, res) => {
  try {
    if (req.method !== "GET") {
      return errorHandler(res, 400, "Only GET requests are allowed");
    }

    await connectDB();

    const userId = await authUser(req);

    if (!userId) {
      return errorHandler(res, 402, "Login first");
    }

    const tasks = await Task.find({ createdBy: userId });

    res.status(200).send(tasks);
  } catch (e) {
    console.log(e);
  }
};

export default handler;
