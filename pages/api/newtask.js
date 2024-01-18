import { errorHandler } from "../../middleware/error";
import { authUser } from "../../utils/authUser";
import { connectDB } from "../../utils/connectDB";
import { Task } from "../../models/task";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return errorHandler(res, 400, "Only POST requests are allowed");
    }

    const { taskTitle, taskDescription } = req.body;

    if (!taskTitle || !taskDescription) {
      return errorHandler(res, 400, "Fill all the fields");
    }

    await connectDB();

    const userId = await authUser(req);

    if (!userId) {
      return errorHandler(res, 402, "Login first");
    }

    const newTask = await Task.create({
      taskTitle,
      taskDescription,
      createdBy: userId,
    });

    if (newTask) {
      res.status(200).send("Task created Successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

export default handler;
