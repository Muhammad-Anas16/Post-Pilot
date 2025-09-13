"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BiMessageDetail } from "react-icons/bi";
import { FaPenFancy, FaBullhorn } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useUser } from "@clerk/nextjs";

const HeroSection = () => {
  const { isSignedIn } = useUser();
  return (
    <section className="px-4 md:px-20 py-14 bg-white">
      <div className="flex flex-col items-center text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl"
        >
          AI Powered Post Generator for <br className="hidden sm:block" />
          Agents & Marketers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            // href="/start"
            href={isSignedIn ? "/start" : "/sign-in"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium transition"
          >
            Start Free
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {/* Post Generator */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="mb-4 text-blue-600 text-4xl flex justify-center">
            <FaPenFancy />
          </div>
          <h3 className="font-semibold text-lg mb-2">Post Generator</h3>
          <p className="text-gray-600 text-sm">
            Generate social media posts for Facebook and Instagram
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="mb-4 text-blue-600 text-4xl flex justify-center">
            <FaBullhorn />
          </div>
          <h3 className="font-semibold text-lg mb-2">Ad Generator</h3>
          <p className="text-gray-600 text-sm">
            Create ad text and captions for your campaigns
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="mb-4 text-blue-600 text-4xl flex justify-center">
            <BiMessageDetail />
          </div>
          <h3 className="font-semibold text-lg mb-2">Script Generator</h3>
          <p className="text-gray-600 text-sm">
            Generate call and DM scripts for lead generation
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="mb-4 text-blue-600 text-4xl flex justify-center">
            <AiOutlineMenu />
          </div>
          <h3 className="font-semibold text-lg mb-2">Instructions</h3>
          <p className="text-gray-600 text-sm">
            Step-by-step guides on how to post and engage
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;