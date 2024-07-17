'use client'

import { toggleSideBar } from '@/redux/features/sidebarSlice';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleSideBar());
  }
  return (
    <div>
      <nav className="bg-white h-24 py-3 px-2 md:px-20 flex justify-between items-center">
        <div className='md:hidden'>
        <img
          onClick={() => toggleMenuHandler()}
          className="h-11 cursor-pointer"
          alt="hamburger-menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAMFBMVEXz9fQxMTH2+PdeXl4uLi46Ojrf4eCqq6vNz84PDg/Hycjw8vF/f383Nzf7/fyNjo3ma+WYAAAAmUlEQVRoge3YWQrDMAwFQNdNmzhLc//bNmcQIipl5t88bISF1BoAAAAAAP+kty3gOpaTPj9D5pT8vowpZCwZ+X0dj5Cxplx/249XwLFvGelXCb1Dsmqv9ZCkcIC7fWK/3icp/pwiDW86U8Kvfh9suDn9vja++PHLSw/gbrFfLyu8dsiqHTGLB+zi9ULxcqV6tQQAAAAAwI/4Apb7ESEHwA8iAAAAAElFTkSuQmCC"
        />
        </div>
        <a className="font-medium" href="/">
          <img src="/zenica.jpeg" width="200px" height="200px" />
        </a>
        <div>
          <ul className="hidden md:flex md:flex-row space-x-5">
            <li>
              <Link href={"/"} className="hover:text-blue-500">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-500">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-blue-500">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="flex items-center px-0 md:px-20">
          <hr className="flex-1 border-white md:border-black" />
          <div className="px-4 text-sm md:text-lg">
            <p>Good Health And Quality of Life is our Mission</p>
          </div>
          <hr className="flex-1 border-white md:border-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar