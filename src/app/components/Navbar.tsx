"use client"
import Link from 'next/link';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { CardContext } from '@/context/CardContext';

const Navbar = () => {
  const pathname = usePathname()
    const {readCards,list} = useContext(CardContext);

  

    return (
         <div className="container mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link href="/" className={pathname === "/" ? "border-0 bg-[#1A2312] rounded-4xl text-[#C2F800]" : ""}>Workouts</Link></li>
                            <li><Link href="/plans" className={pathname === "/plans" ? "border-0 bg-[#1A2312] rounded-4xl text-[#C2F800]" : ""}>My Plans</Link></li>


                    </ul>
                </div>
                <Image src={logo} alt='logo'/>
                <a className="btn btn-ghost text-xl">FITLOG</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                                                    <li><Link href="/" className={pathname === "/" ? "border-0 bg-[#1A2312] rounded-4xl text-[#C2F800]" : ""}>Workouts</Link></li>

                            <li><Link href="/plans" className={pathname === "/plans" ? "border-0 bg-[#1A2312] rounded-4xl text-[#C2F800]" : ""}>My Plans</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">Plans{readCards.length}</button>
                <button className="btn btn-ghost">Saved{list.length}</button>
            </div>
        </div>
      
    );
};

export default Navbar;