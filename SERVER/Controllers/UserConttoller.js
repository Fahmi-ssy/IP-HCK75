const { User } = require("../models");
const { comparePassword } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({
        username: username,
        email: email,
        password: password,
      });
      res.status(201).json({
        message: "Register Success",
        user,
      });
    } catch (error) {
      console.log("....", error);
      res.status(500).json({
        message: "Internal Server Error",
        error,
      });
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        res.status(404).json({
          message: "Email not found",
        });
      }
      if (!password) {
        res.status(404).json({
          message: "Password not found",
        });
      }
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        res.status(404).json({
          message: "Email not found",
        });
      }
      const validPassword = comparePassword(password, user.password);
      if (!validPassword) {
        res.status(404).json({
          message: "Password not found",
        });
      }
      const payload = {
        id: user.id,
        email: user.email,
      };
      const access_token = createToken(payload);
      res.json({ access_token });
    } catch (error) {
      next(error);
    }
  }
  static async googleLogin(req, res, next) {
    const { googleToken } = req.body;

    try {
      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        // we use our client_id from the Google console
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
          provider: "google",
          // We can type any password as a placeholder.
          // In future development, you should implement a feature to update the user's password.
          password: "google_id",
        },
        // Required to set hooks: false
        hooks: false,
      });
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      // We conditionally respond with the status because the client needs to know
      // whether it is a new user or an existing user.
      res.status(created ? 201 : 200).json({ access_token: token });
    } catch (error) {
        next(error);
    }
  }
}
module.exports = UserController;
