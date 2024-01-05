require("dotenv").config();
const jwt = require("jsonwebtoken");
const {
  CatchAsyncError,
} = require("../../middlewares/AsyncMiddleware/CatchAsyncErrors");
const bcrypt = require("bcrypt");
const {
  ErrorHandler,
} = require("../../middlewares/ErrorMiddleware/ErrorHandler");
const {
  setToken,
  refreshTokenOptions,
  accessTokenOptions,
  forgotPasswordTokenOptions,
  generateResetPasswordToken,
  resetPasswordTokenOptions,
  generateForgotPasswordToken,
} = require("../../middlewares/JwtMiddleware/JwtMiddleware");
const { UserModel } = require("../../models/UserModel/user.model");
const sendMail = require("../../services/sendMail");

const registerNewUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new ErrorHandler("Please Enter All Fields", 400));
    }

    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist) {
      return next(new ErrorHandler("Email Already Exists", 400));
    }

    const newUser = await UserModel.create({
      name,
      email,
      password,
    });
    password.password = undefined;

    return res.status(201).json({
      status: true,
      newUser,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const loginUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter All Fields", 400));
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Incorrect Password", 400));
    }
    user.password = undefined;
    setToken(user, 200, res);
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const updateAccessToken = CatchAsyncError(async (req, res, next) => {
  try {
    const refresh_token = req.cookies?.refresh_token;
    if (!refresh_token) {
      return next(new ErrorHandler("Please Login First", 400));
    }
    const decoded = jwt.verify(
      refresh_token,
      process.env.EXPRESS_REFRESH_TOKEN.toString()
    );
    if (!decoded) {
      return next(new ErrorHandler("Invalid Refresh Token, Please login", 400));
    }
    const user = await UserModel.findById(decoded._id).select("-password");
    if (!user) {
      return next(
        new ErrorHandler("Please Login to access this resource", 400)
      );
    }
    const accessToken = jwt.sign(
      { _id: user._id },
      process.env.EXPRESS_ACCESS_TOKEN,
      {
        expiresIn: parseInt(
          process.env.EXPRESS_ACCESS_TOKEN_EXPIRES_IN * 60 * 1000
        ),
      }
    );
    const refreshToken = jwt.sign(
      { _id: user._id },
      process.env.EXPRESS_REFRESH_TOKEN,
      {
        expiresIn: parseInt(
          process.env.EXPRESS_REFRESH_TOKEN_EXPIRES_IN * 60 * 60
        ),
      }
    );
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);
    res.cookie("access_token", accessToken, accessTokenOptions);
    res.user = user;
    next();
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const updateAccessTokenForRefresh = CatchAsyncError(async (req, res, next) => {
  try {
    const refresh_token = req.cookies?.refresh_token;
    if (!refresh_token) {
      return next(new ErrorHandler("Please Login First", 400));
    }
    const decoded = jwt.verify(
      refresh_token,
      process.env.EXPRESS_REFRESH_TOKEN.toString()
    );
    if (!decoded) {
      return next(new ErrorHandler("Invalid Refresh Token, Please login", 400));
    }
    const user = await UserModel.findById(decoded._id).select("-password");
    if (!user) {
      return next(
        new ErrorHandler("Please Login to access this resource", 400)
      );
    }
    const accessToken = jwt.sign(
      { _id: user._id },
      process.env.EXPRESS_ACCESS_TOKEN,
      {
        expiresIn: parseInt(
          process.env.EXPRESS_ACCESS_TOKEN_EXPIRES_IN * 60 * 1000
        ),
      }
    );
    const refreshToken = jwt.sign(
      { _id: user._id },
      process.env.EXPRESS_REFRESH_TOKEN,
      {
        expiresIn: parseInt(
          process.env.EXPRESS_REFRESH_TOKEN_EXPIRES_IN * 60 * 60
        ),
      }
    );
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);
    res.cookie("access_token", accessToken, accessTokenOptions);
    res.user = user;
    res.status(200).json({
      success: true,
      message: "Token Updated Successfully",
      user,
      access_token: accessToken,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const logoutUser = CatchAsyncError(async (req, res, next) => {
  try {
    res.cookie("refresh_token", "", { maxAge: 1 });
    res.cookie("access_token", "", { maxAge: 1 });
    res.user = null;
    res.status(200).json({
      success: true,
      message: "Logged Out Successfully",
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const getUserInfo = CatchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user?._id || "";
    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }
    res.status(200).json({
      success: true,
      message: "User Info Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const updatePassword = CatchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user?._id || "";
    const { newPassword, confirmNewPassword } = req.body;

    if (!newPassword || !confirmNewPassword) {
      return next(new ErrorHandler("Please Enter All Fields", 400));
    }
    if (newPassword !== confirmNewPassword) {
      return next(
        new ErrorHandler("Password and Confirm Password does not match", 400)
      );
    }
    const user = await UserModel.findById(userId);

    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }
    user.password = newPassword;
    await user.save();
    user.password = undefined;
    res.status(200).json({
      success: true,
      message: "Password Updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const sendForgotPasswordEmail = CatchAsyncError(async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return next(new ErrorHandler("Please Enter Email", 400));
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }
    const { token, forgotPasswordActivationCode } =  await generateForgotPasswordToken(user._id);
    // console.log(token)
    const data = {
      user: {
        name: user.name,
      },
      activationCode: forgotPasswordActivationCode,
    };

    //send email to associated user
    try {
      await sendMail({ email, subject: "Reset your password", template: "ForgotPassword.ejs", data });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 400));
    }
    // console.log(token);
    // console.log("Sending token   "+token)
    res.cookie("forgot_password_token", token, forgotPasswordTokenOptions);
    // token.forgotPasswordActivationCode = undefined;
    res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
      forgot_password_token: token,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const confirmOtp = CatchAsyncError(async (req, res, next) => {
  try {
    const { otp } = req.body;
    if (!otp) {
      return next(new ErrorHandler("Please Enter OTP", 400));
    }
    const forgotPasswordToken = req.cookies?.forgot_password_token;

    if (!forgotPasswordToken) {
      return next(new ErrorHandler("Forgot password token missing", 400));
    }
    // console.log("Forgot password token "+forgotPasswordToken)
    const decoded = jwt.verify(
      forgotPasswordToken,
      process.env.EXPRESS_FORGOT_PASSWORD_TOKEN.toString()
    );
    // console.log("Decoded     "+decoded);
    const hash = (decoded.hash)
    // console.log(hash)
    const forgotPasswordOtp = await bcrypt.compare(otp.toString(), hash);
    if(!forgotPasswordOtp){
      return next(new ErrorHandler("Invalid OTP", 400));
    }
    // console.log("True or false "+forgotPasswordOtp)
    if (!decoded) {
      return next(new ErrorHandler("Invalid forgot password token", 400));
    }
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }
    // console.log(user.forgotPasswordActivationCode);
    // console.log(forgotPasswordOtp)
    // if (forgotPasswordOtp.toString().trim()  !== otp.toString().trim()) {
    //   return next(new ErrorHandler("Invalid OTP", 400));
    // }
    res.cookie("forgot_password_token", "", { maxAge: 1 });
    const token = generateResetPasswordToken(user?._id);
    res.cookie("reset_password_token", token, resetPasswordTokenOptions);
    res.status(200).json({
      success: true,
      message: "OTP Verified Successfully",
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

const resetPassword = CatchAsyncError(async (req, res, next) => {
  try {
    const {newPassword, confirmNewPassword} = req.body;
    if (!newPassword || !confirmNewPassword) {
      return next(new ErrorHandler("Please Enter All Fields", 400));
    }
    if (newPassword !== confirmNewPassword) {
      return next(
        new ErrorHandler("Password and Confirm Password does not match", 400)
      );
    }
    const resetPasswordToken = req.cookies?.reset_password_token
    // console.log(resetPasswordToken);
    if (!resetPasswordToken) {
      return next(new ErrorHandler("Reset password token missing", 400));
    }
    const decoded = jwt.verify(
      resetPasswordToken,
      process.env.EXPRESS_RESET_PASSWORD_TOKEN.toString()
    );
    if (!decoded) {
      return next(new ErrorHandler("Invalid reset password token", 400));
    }
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }
    user.password = newPassword;
    await user.save();
    // user.password = undefined;
    res.cookie("reset_password_token", "", { maxAge: 1 });
    res.status(200).json({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

module.exports = {
  registerNewUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  updateAccessTokenForRefresh,
  getUserInfo,
  updatePassword,
  sendForgotPasswordEmail,
  confirmOtp,
  resetPassword,
};