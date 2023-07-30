// components/Dropdown.tsx

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IcmNavDropDown } from './IcmNavbar';
import { link } from 'fs';


const Dropdown = (props: IcmNavDropDown) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button className="flex items-center text-white hover:text-gray-300" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {props.title}

                <i className="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>

                </i>
            </button>
            {isDropdownOpen && (
                <div className="absolute mb-10 top-10 right-0 bg-white w-auto p-5 rounded-lg shadow-md
                
                  text-black mt-2 
                
                " ref={dropdownRef}>
                    {props.links.map((link) =>

                        <Link key={link.label} className="w-72" href={link.url}>{link.label}</Link>)
                    }

                </div>
            )}
        </div >
    );
};

export default Dropdown;
