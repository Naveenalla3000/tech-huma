const express = require("express");
const {
  registerNewUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  updatePassword,
  updateAccessTokenForRefresh,
  sendForgotPasswordEmail,
  confirmOtp,
  resetPassword,
} = require("../../controllers/userController/user.controller.js");
const {
  isAutheticated,
} = require("../../middlewares/AuthMiddlewares/auth_user.middleware.js");
const userRouter = express.Router();

userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUser);
userRouter.get("/refresh", updateAccessTokenForRefresh);
userRouter.get("/me", updateAccessToken, isAutheticated, getUserInfo);
userRouter.post(
  "/update-password",
  updateAccessToken,
  isAutheticated,
  updatePassword
);
userRouter.get("/logout", updateAccessToken, isAutheticated, logoutUser);
userRouter.post("/forgot_password",sendForgotPasswordEmail);
userRouter.post("/confirm_otp", confirmOtp);
userRouter.post("/reset_password", resetPassword);

module.exports = {
  userRouter,
};