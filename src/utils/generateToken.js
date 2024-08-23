import {User} from "../models/user.model.js";
import  {ApiError}  from "../utils/apiError.js";



const generateAccessAndRefereshTokens = async (userId) => {
  try {
    
    const user = await User.findById(userId);
    console.log("data",user);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    console.log("accessToken",accessToken);
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};
export {generateAccessAndRefereshTokens};