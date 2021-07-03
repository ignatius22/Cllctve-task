const User = require("../models/user");

function UserService() {}

UserService.prototype.registerUser = async function (userObj) {
  const { firstName } = userObj;
  if (firstName == undefined) throw "firstName is not defined";

  const user = await User.findOne({ firstName });
  if (user !== null) throw "firstName not available";
  const newUser = new User({
    firstName,
  });

  let savedUser = await newUser.save();
  return savedUser;
};

module.exports = UserService;
