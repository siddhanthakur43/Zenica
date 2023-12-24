import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className=" bg-white flex justify-between px-20">
      <a href="/">
        <img src="/zenicalogo.jpg" width="70px" height="70px"></img>
      </a>
      <div>
        <ul className="flex space-x-4">
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