const jwt = require("jsonwebtoken");

const authUser = async (req) => {
  let cookie = req.headers.cookie;
  if (!cookie) {
    return null;
  }
  const arr = cookie.split(";");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Todo_Cookie")) {
      cookie = arr[i];
    }
  }
  cookie = cookie.split("=")[1];
  const { id } = jwt.verify(cookie, process.env.JWT_SECRET);
  console.log(id);

  return id;
};

module.exports = { authUser };
