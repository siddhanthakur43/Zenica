import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-white flex justify-between px-2 md:px-20">
      <div className='md:w-1/6'>
        <img src="/zenica.jpeg"></img>
      </div>
      <div>
        <ul className="flex p-2 space-x-1 md:space-x-4">
          <li className="italic">
            <Link href="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </Link>
          </li>
          <li className="italic">
            <Link href="terms-condition" className="hover:text-blue-500">
              Terms & Condition
            </Link>
          </li>
          <li className="italic">
            <Link href="support" className="hover:text-blue-500">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer