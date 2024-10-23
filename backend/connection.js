const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://falgunsunita26:saturday26@vectrofy.22azk.mongodb.net/"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
