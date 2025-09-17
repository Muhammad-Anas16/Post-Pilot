// "use client";

// import { useState, useRef, useEffect } from "react";
// import { SendHorizontal, Search } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const DashboardProjects = () => {
//   const [projects, setProjects] = useState([
//     {
//       name: "Untitled project",
//       modified: "14 minutes ago by Post Pilot",
//     },
//   ]);

//   const [inputValue, setInputValue] = useState("");
//   const textareaRef = useRef(null);

//   // Auto expand textarea height when typing
//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   }, [inputValue]);

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-8 py-8">
//       {/* Heading */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//           Projects
//         </h1>
//         <div className="hidden sm:inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
//           Hello User
//         </div>
//       </div>

//       {/* Create Section */}
//       <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 mb-8">
//         {/* Desktop → input inline */}
//         <form className="hidden sm:flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
//           <input
//             type="text"
//             placeholder="What do you want to create today?"
//             className="flex-1 bg-transparent outline-none text-base placeholder-gray-400"
//           />
//           <button
//             type="button"
//             className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
//           >
//             <SendHorizontal className="w-4 h-4" />
//             <span>Generate</span>
//           </button>
//         </form>

//         {/* Mobile → stacked */}
//         <form className="flex flex-col sm:hidden gap-3">
//           <textarea
//             ref={textareaRef}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="What do you want to create today?"
//             className="w-full resize-none outline-none text-base placeholder-gray-400 min-h-[90px] rounded-lg border border-gray-200 p-3 focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="button"
//             className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
//           >
//             <SendHorizontal className="w-4 h-4" />
//             <span>Submit</span>
//           </button>
//         </form>
//       </div>

//       {/* Search + Actions */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//         <div className="relative w-full sm:w-72">
//           <input
//             type="text"
//             placeholder="Search projects..."
//             className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//           <Search
//             size={16}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />
//         </div>
//         <button className="sm:hidden px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
//           + New Project
//         </button>
//       </div>

//       {/* Projects Table */}
//       <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
//         <div className="hidden sm:grid sm:grid-cols-2 text-sm font-semibold border-b border-gray-200 px-6 py-3 bg-gray-50 text-gray-700">
//           <div>Name</div>
//           <div className="text-right">Last modified</div>
//         </div>

//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className="flex flex-col sm:grid sm:grid-cols-2 text-sm px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
//           >
//             <div className="font-medium text-gray-800">{p.name}</div>
//             <div className="text-gray-500 text-right">{p.modified}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DashboardProjects;

"use client";

import { useState, useRef, useEffect } from "react";
import { SendHorizontal, Search } from "lucide-react";

const DashboardProjects = ({ onSubmitPrompt }) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  // Auto expand textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSubmitPrompt(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 mb-8">
      {/* Desktop */}
      <form
        onSubmit={handleSubmit}
        className="hidden sm:flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What do you want to create today?"
          className="flex-1 bg-transparent outline-none text-base placeholder-gray-400"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          <SendHorizontal className="w-4 h-4" />
          <span>Generate</span>
        </button>
      </form>

      {/* Mobile */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:hidden gap-3">
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What do you want to create today?"
          className="w-full resize-none outline-none text-base placeholder-gray-400 min-h-[90px] rounded-lg border border-gray-200 p-3 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          <SendHorizontal className="w-4 h-4" />
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default DashboardProjects;