const { errorHandler } = require("../../middleware/error");
const { Task } = require("../../models/task");
const { connectDB } = require("../../utils/connectDB");

const handler = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(req.body);

    if (!id) {
      return errorHandler(res, 400, "Fill all the fields");
    }

    await connectDB();

    const updatedTodo = await Task.findOne({ _id: id });
    updatedTodo.completed = !updatedTodo.completed;
    const saved = await updatedTodo.save();

    console.log(saved);
    if (saved) {
      res.status(200).send("Updated successfully");
    } else {
      res.status(400).send("Error while updating todo");
    }
  } catch (e) {
    console.log(e);
  }
};

export default handler;
