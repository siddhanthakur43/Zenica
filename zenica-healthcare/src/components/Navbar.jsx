import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white h-24 py-3 px-20 flex justify-between items-center">
        <a className="font-medium" href="/">
          <img src="/zenica.jpeg" width="200px" height="200px" />
        </a>
        <div>
          <ul className="flex space-x-5">
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
        <div className="flex items-center px-20">
          <hr className="flex-1 border-black" />
          <div className="px-4">
            <p>Good Health And Quality of Life is our Mission.</p>
          </div>
          <hr className="flex-1 border-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar