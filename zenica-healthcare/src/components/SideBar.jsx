'use client'

import { toggleSideBar } from '@/redux/features/sidebarSlice';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SideBar = () => {
    const isSideBar = useSelector(store => store.sideBar.isSideBar);
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleSideBar());
      }
    if (!isSideBar) return;
    return (
        <div className='absolute z-300 bg-white w-11/12 h-full'>
            <div className='flex justify-center items-center my-10'>
                <a className="font-medium" href="/">
                    <img alt="logo" src="/zenica.jpeg" width="200px" height="200px" />
                </a>
                <div className='w-10'>
                <img alt="logo" onClick={()=> toggleMenuHandler()} src='https://logowik.com/content/uploads/images/t_close1437.jpg'></img>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <ul>
                    <li>
                        <Link href={"/"} onClick={()=> toggleMenuHandler()} className="hover:text-blue-500">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us" onClick={()=> toggleMenuHandler()} className="hover:text-blue-500">
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" onClick={()=> toggleMenuHandler()} className="hover:text-blue-500">
                            PRODUCTS
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us" onClick={()=> toggleMenuHandler()} className="hover:text-blue-500">
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;