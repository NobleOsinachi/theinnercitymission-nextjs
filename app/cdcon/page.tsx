"use client";

import React, { useEffect, useState } from "react";
import kingsChatWebSdk from 'kingschat-web-sdk';
import { authenticationTokenResponseI, loginOptionsI } from "kingschat-web-sdk/dist/ts/interfaces";
import { useRouter } from "next/navigation";

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

const Cdcon: React.FC = () => {
    const router = useRouter();

    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);



    useEffect(() => {
        const loginOptions: loginOptionsI = {
            scopes: [
                "send_chat_message",
                // "conference_calls"
            ],
            clientId: "28b0b667-922f-4f15-8c61-a9a3622b3555"
        };

        // Function to fetch user profile
        const getUserProfile = async () => {
            try {
                const authenticationTokenResponse: authenticationTokenResponseI = await kingsChatWebSdk.login(loginOptions);

                // Replace this with your actual client ID and Access Token
                // const clientID = "28b0b667-922f-4f15-8c61-a9a3622b3555";
                const accessToken = authenticationTokenResponse.accessToken;

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
                setUserProfile(data.profile);
                console.log("User Profile:", userProfile);



            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        getUserProfile();



        useEffect(() => {
            if (userProfile) {
                const newData = {
                    kc_firstname: userProfile.name.split(" ")[0],
                    kc_lastname: userProfile.name.split(" ")[1],
                    kc_email: (userProfile.email === null) ? "" : userProfile.email,
                    kc_phone_number: userProfile.phone_number,
                    kc_avatarUrl: userProfile.avatar
                };

                const urlParams = new URLSearchParams(Object.entries(newData)).toString();

                // Use router.push here instead of in the previous useEffect
                router.push(
                    `http://localhost/icm4c/?page_id=15&openRegModal=true&${urlParams}`
                );
            }
        }, []);

    }, [userProfile, router]);




    return (<div> {/* {userDetails && ( <div> <p>Access Token: {userDetails?.accessToken}</p> <p>Expires In (ms): {userDetails?.expiresInMillis}</p> <p>Refresh Token: {userDetails?.refreshToken}</p> </div> )} */}
        <code className="w-100 m-auto">
            {/* {userProfile && JSON.stringify(userProfile)} */}
            {!userProfile && <i>Kindly enable Pop up...</i>}
            {userProfile && <i>Redirecting...</i>}
        </code>
    </div>
    );
};

export default Cdcon;

/*

https://healingstreams.tv/login.php
check their implementation
https://accounts.kingsch.at/?client_id=com.kingschat&scopes=%5B%22conference_calls%22%5D&post_redirect=true&redirect_uri=https://healingstreams.tv/kclogin.php

*/
