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
    const links: IcmNavLink[] = [{ label: "Home", url: "/" }, { label: "About Us", url: "/about" },];

    const dropDowns: IcmNavDropDown[] = [
        {
            title: "What We Do",
            links: [
                { label: "Education Program", url: "/" },
                { label: "Feeding Program", url: "/" },
                { label: "Familiy Strengthening & Livelihood", url: "/" },
                { label: "Shelter Program", url: "/" },
                { label: "Humanitarian Response", url: "/" },
                { label: "Health & Nutrition Program", url: "/" },
                { label: "Child Safety & Advocacy Program", url: "/" },
                { label: "Faith & Development", url: "/" },
            ],
        }, {

            title: "Special Highlights",
            links: [
                { label: "North East Nigeria", url: "/" },
                { label: "Hunger Action Month", url: "/" },
                { label: "Colouring Dreams Conference 2023", url: "/" },
                { label: "360 Virtual Tours", url: "/" },
                { label: "Video Livestreams", url: "/" },
            ]
        },

        {
            title: "How to Support",
            links: [
                { label: "Make a Donation", url: "/" },
                { label: "Partner With Us", url: "/" },
                { label: "Volunteer", url: "/" },
                { label: "Corporate Partnership", url: "/" },
                { label: "Join the Prayer Network", url: "/" },
                { label: "Online Fundraising", url: "/" },
            ]
        }, {
            title: "Reports",
            links: [
                { label: "Impact News Blog", url: "/" },
                { label: "Global Mission Newsletter", url: "/" },
            ]
        },];

















    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleMouseEnter = (category: string) => {
        setActiveDropdown(category);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };
















    return (
        <>





            <nav className="bg-gray-800 flex justify-left items-center h-20 p-4">

                <span className="text-yellow-50 ml-5 font-semibold text-2xl m-5"><IcmLogo /></span>


                <ul className="flex gap-2 list-none text-gray-200 font-semibold">

                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                className="hover:bg-slate-600 m-0 p-2 hover:rounded-md active:bg-purple-600 focus:ring focus:outline-none focus:ring-green-700 focus:rounded-md"
                                href={link.url}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li className="flex gap-2">

                        {dropDowns.map(dropdown => (

                            <Dropdown key={dropdown.title} title={dropdown.title} links={dropdown.links} />

                        ))}
                    </li>
                </ul>





                {/* <ul className="absolute bg-white text-black p-2 mt-2 rounded-md shadow-lg">
                    {dropDowns.map((dropdown, index) => (
                        <React.Fragment key={index}>
                            {Object.keys(dropdown).map((category, categoryIndex) => (
                                <React.Fragment key={categoryIndex}>
                                    <li
                                        className="font-semibold"
                                        onMouseEnter={() => handleMouseEnter(category)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {category}
                                    </li>
                                    {activeDropdown === category &&
                                        dropdown[category].map((item, itemIndex) => (
                                            <li key={itemIndex} className="hover:bg-gray-100 p-2">
                                                <a className="block" href={Object.values(item)[0].toLowerCase()}>
                                                    {Object.keys(item)[0]}
                                                </a>
                                            </li>
                                        ))}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </ul> */}




            </nav>

        </>
    );
};

export default IcmNavbar;













