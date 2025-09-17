// import ContentSetting from "@/component/ContentSetting"
// import DashboardProjects from "@/component/DashboardProjects"
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// export default function DashboardPage() {
//     return (
//         <div>
//             {/* <DashboardProjects /> */}
//             <ContentSetting />
//         </div>
//     )
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardProjects from "@/component/DashboardProjects";
import ContentSetting from "@/component/ContentSetting";
import PostGenerator from "@/component/PostGenerator";

export default function DashboardPage() {
  // const [userPrompt, setUserPrompt] = useState("");
  // const [showContentForm, setShowContentForm] = useState(false);

  // const handlePromptSubmit = (prompt) => {
  //   setUserPrompt(prompt);
  //   setShowContentForm(true);
  // };

  // const handleContentSubmit = (data) => {
  //   console.log("Final Form Data:", data);
  // };

  return (
    // <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-8 py-8">
    //   <motion.h1
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="text-3xl font-extrabold text-gray-800 mb-6"
    //   >
    //     Dashboard
    //   </motion.h1>

    //   <AnimatePresence mode="wait">
    //     {!showContentForm ? (
    //       <motion.div
    //         key="projects"
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -30 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <DashboardProjects onSubmitPrompt={handlePromptSubmit} />
    //       </motion.div>
    //     ) : (
    //       <motion.div
    //         key="content"
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -30 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <ContentSetting userPrompt={userPrompt} onSubmitContent={handleContentSubmit} />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>

    <PostGenerator />
  );
}