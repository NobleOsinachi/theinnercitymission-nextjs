"use client";

import React, { useEffect, useState } from "react";
import kingsChatWebSdk from 'kingschat-web-sdk';
import { authenticationTokenResponseI, loginOptionsI } from "kingschat-web-sdk/dist/ts/interfaces";
import { useRouter, useSearchParams } from "next/navigation";

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

function clean(link: string) {
    // Remove trailing slashes from the link
    link = link.replace(/\/+$/, "");

    // Check if the link contains a question mark "?"
    const hasQuery = link.includes("%2F%3F");

    // Add the appropriate separator based on whether the link has a query string or not
    link += hasQuery ? "&" : "/?";

    return link;
}

const Cdcon: React.FC = () => {

    const searchParams = useSearchParams();

    // Get the value of the `name` query parameter
    const returnUrl = searchParams.get('returnUrl') || "";

    const router = useRouter();

    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    const clientId: string = process.env.NEXT_PUBLIC_KINGSCHAT_WEB_API || "8d59b433-446f-434b-891f-ddf90f8db105";

    // Function to fetch user profile
    const getUserProfile = async (): Promise<boolean> => {
        try {
            const loginOptions: loginOptionsI = {
                clientId: clientId,
                scopes: []
            };

            const authenticationTokenResponse: authenticationTokenResponseI = await kingsChatWebSdk.login(loginOptions);

            // Replace this with your actual client ID and Access Token

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

            return true;
        } catch (error) {
            console.error("Error fetching user profile:", error);
            return false;
        }
    };

    // Call the function to fetch user profile immediately
    useEffect(() => {
        getUserProfile();
    }, []);
    // });


    // Redirect to the desired URL after fetching the user profile
    useEffect(() => {
        if (userProfile) {
            const kc_data = {
                kc_avatarUrl: userProfile.avatar,
                kc_username: userProfile.username,
                kc_firstname: userProfile.name.split(" ")[0],
                kc_lastname: userProfile.name.split(" ")[1],
                kc_email: (userProfile.email === null) ? "" : userProfile.email,
                kc_phone_number: userProfile.phone_number,
                kc_openRegModal: 'true'
            };

            const urlParams = new URLSearchParams(Object.entries(kc_data)).toString();


            router.push(
                `${clean(returnUrl)}${urlParams}`
                // `http://theinnercitymission.ngo/noble/?openRegModal=true&${urlParams}`
            );
        }
    }, [userProfile, router, returnUrl]);

    return (
        <div>
            <code className="w-100 m-auto">
                {!userProfile && <b>Kindly allow pop-up permissions</b>}
                {userProfile && <i>Redirecting...</i>}
            </code>
        </div>
    );
};

export default Cdcon;
