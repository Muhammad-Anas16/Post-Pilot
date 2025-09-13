// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";

// const HeroSection = () => {
//   return (
//     <section className="px-4 md:px-20 py-14 bg-white">
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="w-full md:w-3/5 text-center md:text-left space-y-6"
//         >
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//             AI Assistant for <br className="hidden sm:block" />
//             Agents & Marketers
//           </h1>

//           <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
//             We help your team work smarter, handle customers better, and get more done — all in one simple tool.
//           </p>

//           <div className="flex justify-center md:justify-start">
//             <Link
//               href="/start"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium transition"
//             >
//               Start Free
//             </Link>
//           </div>

//           {/* <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//           </motion.div> */}
//         </motion.div>

//         {/* Right Video */}
//         <div className="hidden md:flex w-full md:w-2/5 justify-center mt-10 md:mt-0">
//           <div className="w-[180px] sm:w-[220px] lg:w-[250px] rounded-lg overflow-hidden shadow-md">
//             <video
//               src="/intro.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
//         className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
//       >
//         {/* Feature Card */}
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <div className="mb-4 text-blue-600 text-4xl">
//             {/* Icon: Post Generator */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="inline-block w-10 h-10"
//               viewBox="0 0 24 24"
//             >
//               <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
//             </svg>
//           </div>
//           <h3 className="font-semibold text-lg mb-2">Post Generator</h3>
//           <p className="text-gray-600 text-sm">
//             Generate social media posts for Facebook and Instagram
//           </p>
//         </div>

//         {/* Feature Card */}
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <div className="mb-4 text-blue-600 text-4xl">
//             {/* Icon: Ad Generator */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="inline-block w-10 h-10"
//               viewBox="0 0 24 24"
//             >
//               <path d="M3 12l18-6v12l-18-6z" />
//             </svg>
//           </div>
//           <h3 className="font-semibold text-lg mb-2">Ad Generator</h3>
//           <p className="text-gray-600 text-sm">
//             Create ad text and captions for your campaigns
//           </p>
//         </div>

//         {/* Feature Card */}
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <div className="mb-4 text-blue-600 text-4xl">
//             {/* Icon: Script Generator */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="inline-block w-10 h-10"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
//             </svg>
//           </div>
//           <h3 className="font-semibold text-lg mb-2">Script Generator</h3>
//           <p className="text-gray-600 text-sm">
//             Generate call and DM scripts for lead generation
//           </p>
//         </div>

//         {/* Feature Card */}
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <div className="mb-4 text-blue-600 text-4xl">
//             {/* Icon: Instructions */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="inline-block w-10 h-10"
//               viewBox="0 0 24 24"
//             >
//               <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
//             </svg>
//           </div>
//           <h3 className="font-semibold text-lg mb-2">Instructions</h3>
//           <p className="text-gray-600 text-sm">
//             Step-by-step guides on how to post and engage
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import Link from "next/link";
import { motion } from "motion/react";

// Import React Icons
import { FaPenFancy, FaBullhorn } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section className="px-4 md:px-20 py-14 bg-white">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl"
        >
          AI Powered Post Generator for <br className="hidden sm:block" />
          Agents & Marketers
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/start"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium transition"
          >
            Start Free
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
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

        {/* Ad Generator */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="mb-4 text-blue-600 text-4xl flex justify-center">
            <FaBullhorn />
          </div>
          <h3 className="font-semibold text-lg mb-2">Ad Generator</h3>
          <p className="text-gray-600 text-sm">
            Create ad text and captions for your campaigns
          </p>
        </div>

        {/* Script Generator */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="mb-4 text-blue-600 text-4xl flex justify-center">
            <BiMessageDetail />
          </div>
          <h3 className="font-semibold text-lg mb-2">Script Generator</h3>
          <p className="text-gray-600 text-sm">
            Generate call and DM scripts for lead generation
          </p>
        </div>

        {/* Instructions */}
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