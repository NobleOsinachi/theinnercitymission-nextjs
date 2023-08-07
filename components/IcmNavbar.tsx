'use client';
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import IcmLogo from "./IcmLogo";

const dropDowns: IcmNavDropDown[] = [
    // Your dropDowns data here
];

interface IcmNavLink {
    label: string;
    url: string;
    //     icon?: string;
    //     isActive?: boolean;
}

const links: IcmNavLink[] = [
    { label: "Home", url: "/", },
    { label: "About Us", url: "/about" },
    // Add more objects as needed
];

export interface IcmNavDropDown {
    title: string;
    links: IcmNavLink[];

}

const IcmNavbar = () => {



    return (
        <>
            <nav className=" bg-icm-blue flex justify-left items-center h-25 p-4
             text-white sticky top-0">
                <span className="text-yellow-50 ml-5 font-semibold text-2xl m-5"><IcmLogo /></span>
            </nav>
        </>
    );
};

export default IcmNavbar;
