import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import  SidebarMenu  from '../Navbar/SidebarMenu';
import './NavbarCss.css';

const NavbarSm = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


    return (

        <>
            <div className='flex w-full justify-between font-serif p-3 bg-[#2D31FA] text-white'>
                <div className="flex gap-2">
                <img className="h-7 w-7 mt-2 " src="https://cdn-icons.flaticon.com/png/128/1886/premium/1886830.png?token=exp=1647098723~hmac=d58f7943f5a4c546f52c7579df44e912" />
                <h1 className='text-xl font-bold text-white pt-2'>Daily Reminder</h1>
                </div>
                <button href="#" className='menu-bars hover:shadow-lg rounded-md'><BiIcons.BiMenu onClick={showSidebar} className='h-10 w-10' />
                </button>
            </div>
            <div className={sidebar ? 'nav-menu active flex' : 'nav-menu'}>
                <ul className="nav-menu-items flex flex-col gap-5" onClick={showSidebar}>
                    <li className='navbar-toggle flex justify-center text-white'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose className='menu-bars hover:shadow-lg rounded-md'/>
                        </Link>
                    </li>
                    {SidebarMenu.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

const NavbarLg = () => {
    let history = useHistory();

    return (
        <>
            <div className='flex justify-between gap-10 w-full bg-[#2D31FA] text-white'>
                <div className='flex font-serif p-2 ml-4 gap-3'>
                    <img className="h-7 w-7 ml-9" src="https://cdn-icons.flaticon.com/png/128/1886/premium/1886830.png?token=exp=1647098723~hmac=d58f7943f5a4c546f52c7579df44e912" />
                    <h1 className='flex text-2xl font-bold text-white'>Daily Reminder</h1>
                </div>
                <div>
                    <ul className='flex flex-end gap-7 p-2 mr-4'>
                        <li className="hover:shadow-lg delay-200 rounded-md px-2 text-xl"><a href="" onClick={() => { history.push("/") }}>Home</a></li>
                        <li className="hover:shadow-lg delay-200 rounded-md px-2 text-xl"><a href="" onClick={() => { history.push("/signup") }}>SignUp</a></li>
                        <li className="hover:shadow-lg delay-200 rounded-md px-2 text-xl"> <a href='' onClick={() => { history.push("/reminder") }}> Reminders</a> </li>
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