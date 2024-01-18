const { errorHandler } = require("../../../middleware/error");
const { deleteCookie } = require("../../../utils/logoutUser");

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return errorHandler(res, 400, "Only get method is allowed");
  }
  deleteCookie(res);
};

export default handler;
