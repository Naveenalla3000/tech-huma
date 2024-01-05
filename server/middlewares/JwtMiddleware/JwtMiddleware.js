require("dotenv").config();
const jwt = require("jsonwebtoken");
const otpGenerator = require('otp-generator')
const bcrypt = require("bcrypt");

const refreshTokenExpire = parseInt(
  process.env.EXPRESS_REFRESH_TOKEN_EXPIRES_IN
);
const accessTokenExpire = parseInt(
  process.env.EXPRESS_ACCESS_TOKEN_EXPIRES_IN
);

const signAccessToken = (_id) => {
  return jwt.sign({ _id }, process.env.EXPRESS_ACCESS_TOKEN, {
    expiresIn: parseInt(process.env.EXPRESS_ACCESS_TOKEN_EXPIRES_IN * 60 * 1000),
  });
};

const signRefreshToken = (_id) => {
  return jwt.sign({ _id }, process.env.EXPRESS_REFRESH_TOKEN, {
    expiresIn: parseInt(process.env.EXPRESS_REFRESH_TOKEN_EXPIRES_IN * 60 * 60),
  });
};

const refreshTokenOptions = {
  expires: new Date(Date.now() + refreshTokenExpire * 60 * 60 * 1000),
  maxAge: refreshTokenExpire * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};
const forgotPasswordTokenOptions = {
  expires: new Date(Date.now() + 5 * 60 * 1000),
  maxAge: 5 * 60 * 1000,
  httpOnly: false,
  sameSite: "lax",
}
const resetPasswordTokenOptions = {
  expires: new Date(Date.now() + 5 * 60 * 1000),
  maxAge: 5 * 60 * 1000,
  httpOnly: false,
  sameSite: "lax",
}
const accessTokenOptions = {
  expires: new Date(Date.now() + accessTokenExpire * 60 * 1000),
  maxAge: accessTokenExpire * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

const setToken = (user, statusCode, res) => {
  const accessToken = signAccessToken(user._id);
  const refreshToken = signRefreshToken(user._id);
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);
  res.cookie("access_token", accessToken, accessTokenOptions);
  if (process.env.EXPRESS_NODE_ENV === "production") {
    accessTokenOptions.secure = true;
  }
  res.status(statusCode).json({
    success: true,
    user,
    access_token: accessToken,
  });
};

// to verify otp
const generateForgotPasswordToken = async (_id) => {
  const forgotPasswordActivationCode = Math.floor(
    otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false
    })
  ).toString();

  // console.log("code : " + forgotPasswordActivationCode);

  const hash = await bcrypt.hash(forgotPasswordActivationCode, 10);
  // console.log("hash " + hash);

  const token = jwt.sign(
    { hash, _id },
    process.env.EXPRESS_FORGOT_PASSWORD_TOKEN,
    {
      expiresIn: '5m'
    }
  );
  // console.log("token " + token);

  return { token, forgotPasswordActivationCode };
}


// to set new password
const generateResetPasswordToken = (_id) => {
  return jwt.sign(
    { _id },
    process.env.EXPRESS_RESET_PASSWORD_TOKEN.toString(),
    {
      expiresIn: '5m'
    });
}
module.exports = {
  setToken,
  accessTokenOptions,
  refreshTokenOptions,
  generateForgotPasswordToken,
  forgotPasswordTokenOptions,
  generateResetPasswordToken,
  resetPasswordTokenOptions
};