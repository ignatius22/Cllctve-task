const UserService = require("../services/userService");

exports.create_user = async (req, res) => {
  let userService = new UserService();
  let userData = req.body;
  try {
    let user = await userService.registerUser(userData);
    res
      .status(200)
      .json({ success: true, user, message: "Registration successful" });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
