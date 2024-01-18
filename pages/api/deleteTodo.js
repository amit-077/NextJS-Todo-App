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

    const deletedTodo = await Task.deleteOne({ _id: id });
    console.log(deletedTodo);
    if (deletedTodo) {
      res.status(200).send("Deleted successfully");
    } else {
      res.status(400).send("Error while deleting todo");
    }
  } catch (e) {
    console.log(e);
  }
};

export default handler;
