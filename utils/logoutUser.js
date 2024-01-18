const cookie = require("cookie");

const deleteCookie = (res) => {
  res
    .setHeader(
      "Set-Cookie",
      cookie.serialize("Todo_Cookie", null, {
        httpOnly: true,
        maxAge: 0,
      })
    )
    .status(200)
    .send("Cookie deleted successfully");
};

module.exports = { deleteCookie };
