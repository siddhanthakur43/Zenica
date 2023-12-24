import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    // <div>
    <nav className="bg-white h-24 py-3 px-20 flex justify-between items-center">
      <a className="font-medium" href="/">
        <img src="/zenicalogo.jpg" width="200px" height="200px" />
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
            <Link href="/contact-us" className="hover:text-blue-500">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link href="/career" className="hover:text-blue-500">
              CAREER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    //   <div className="content-center">
    //     <h5>Welcome to Zenica Healthcare | Quality Of Life Is Our Mission</h5>
    //   </div>
    // </div>
  );
}

export default Navbar