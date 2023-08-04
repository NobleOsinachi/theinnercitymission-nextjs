import { NextResponse } from "next/server";
import kingsChatWebSdk from 'kingschat-web-sdk';
import { authenticationTokenResponseI, loginOptionsI } from "kingschat-web-sdk/dist/ts/interfaces";

interface UserProfile {
  id: string;
  email: string;
  name: string;
  username: string;
  phone_number: string;
  gender: string;
  birth_date_millis: number;
  avatar: string;
}
type Nullable<T> = T | null;

let userDetails: Nullable<authenticationTokenResponseI> = null;
let userProfile: Nullable<UserProfile> | string = "not yet initialized";

const loginOptions: loginOptionsI = {
  scopes: ["send_chat_message"],
  clientId: "28b0b667-922f-4f15-8c61-a9a3622b3555"
};

const getUserData = async () => {
  try {
    const authenticationTokenResponse = await kingsChatWebSdk.login(loginOptions);
    userDetails = authenticationTokenResponse;

    // Replace this with your actual client ID and Access Token

    const accessToken = userDetails?.accessToken;

    // Endpoint URL for getting user profile
    const profileURL = "https://connect.kingsch.at/developer/api/profile";

    // Header with Authorization Bearer token
    const headers = {
      authorization: `Bearer ${accessToken}`,
    };

    const response = await fetch(profileURL, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    userProfile = data.profile;
    console.log("User Profile:", userProfile);
  } catch (error) {

    // userProfile = JSON.stringify(error);
    // userProfile = "error block";

    console.error("Error fetching user profile:", error);
  }
  return userProfile;
};



export const GET = async (req: Request) => {

  console.log({ name: "noble" });

  let data = getUserData();

  // const data = await getUserData();
  // console.log(data);
  // return NextResponse.json(data);

  return NextResponse.json(data);
};
