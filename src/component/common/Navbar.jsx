"use client";

import { FaCommentDots } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo / Branding */}
      <div className="flex items-center space-x-2">
        <FaCommentDots className="text-blue-600 text-xl" />
        <span className="font-semibold text-lg text-black">PostPilot</span>
      </div>

      {/* Auth Buttons */}
      <div className="space-x-6 flex items-center">
        {/* Show these if user is signed out */}
        <SignedOut>
            <Link href={"/sign-in"} className="text-sm font-medium text-gray-800 hover:underline">
              sign-in
            </Link>
        </SignedOut>

        {/* Show this if user is signed in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;