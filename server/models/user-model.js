const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//secure the password with the bcrypt
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (e) {
    next(e);
  }
});

//json web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this._email,
        isAdmin: this._isAdmin,
      },
      process.env.JWT_Security_Key,
      {
        expiresIn: "30d",
      }
    );
  } catch (e) {
    console.error(e);
  }
};

// define the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
