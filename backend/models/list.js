<<<<<<< HEAD
const mongoose = require("mongoose");
=======
import mongoose from "mongoose";
>>>>>>> 646c1f5 (first commit)

const listSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    rangeVal: {
      type: Number,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
module.exports = mongoose.model("List", listSchema);
=======
export const List = mongoose.model("List", listSchema);
// export default List;
>>>>>>> 646c1f5 (first commit)
