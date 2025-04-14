<<<<<<< HEAD
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  uploadedImages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

userSchema.pre("save", async function (next) {
  // Only hash the password if it's modified or new
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
=======
// import mongoose, { mongo, Mongoose } from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     uploadedImages: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "List",
//       },
//     ],
//     lastLogin: {
//       type: Date,
//       default: Date.now,
//     },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//     resetPasswordToken: String,
//     resetPasswordExpiresAt: Date,
//     verificationToken: String,
//     verificationTokenExpiresAt: Date,
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    uploadedImages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
      },
    ],
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
>>>>>>> 646c1f5 (first commit)
