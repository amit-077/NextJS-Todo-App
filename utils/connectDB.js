const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);

    if (connection) {
      console.log("Database connected");
    } else {
      console.log("Error while connecting database");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
