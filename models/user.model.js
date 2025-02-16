import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: [2, "User name must be at least 3 characters long"],
      maxLength: [50, "User name must be at most 50 characters long"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "User password is required"], // 密码是必填字段
      minLength: [6, "User password must be at least 6 characters long"], // 密码最少6个字符
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
