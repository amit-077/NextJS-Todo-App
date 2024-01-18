const jwt = require("jsonwebtoken");

const jwtToken = (userId) => {
  const token = jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET
  );

  return token;
};

module.exports = { jwtToken };
