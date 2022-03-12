import React, {useState} from 'react';
import {BiMenu} from "react-icons/bi";

const SignUp = () => {
    return(
      <div>hello</div>
    )
}

const NavbarSm = () => {
    const [showMenuItems, setshowMenuItems] = useState(false);
    return (
        <>
            <div className='flex justify-between font-serif p-3 bg-[#2D31FA] text-white'>
                <h1 className='text-2xl font-bold'>Daily Reminder</h1>
                <a href="#" className='hover:shadow-lg rounded-md' onClick="() => setshowMenuItems(!showMenuItems)"><BiMenu className="h-10 w-10"/>
                </a>
            </div>
            <div className='menu-items hidden'>
                <ul className=' pl-3'>
                    <li className="hover:bg-gray-300"><a href='#'><span>SignUp</span></a></li>
                    <li> <a href='#'> <span>Dashboard</span> </a> </li>
                    <li> <a href='#'><span> Reminders</span></a> </li>
                </ul>
                </div>
        </>
    );
};

const NavbarLg = () => {
    return (
        <>
        <div className='flex justify-between gap-10 w-full bg-[#2D31FA] text-white'>
        <div className='flex font-serif p-2 ml-4'>
                <h1 className='flex text-2xl font-bold'>Daily Reminder</h1>           
        </div>
        <div>
        <ul className='flex flex-end gap-7 p-2 mr-4'>
                    <li className="hover:shadow-lg delay-200 rounded-md px-2"><a href='#' onClick={SignUp}>SignUp</a></li>
                    <li className="hover:shadow-lg delay-200 rounded-md px-2"> <a href='#'> Dashboard </a> </li>
                    <li className="hover:shadow-lg delay-200 rounded-md px-2"> <a href='#'> Reminders</a> </li>
                </ul> 
        </div>
        </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='lg:hidden'>
                    <NavbarSm />
                </div>
                <div className='hidden lg:flex'>
                    <NavbarLg />
                </div>
            </nav>
        </>
    );
};

export default Navbar;