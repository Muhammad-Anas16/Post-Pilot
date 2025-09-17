// "use client";

// import { useState } from "react";
// import { SendHorizontal } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const tones = ["Natural", "Friendly", "Professional", "Persuasive", "Conversational"];
// const audiences = [
//     "Wide Audience",
//     "Community Members",
//     "Friends & Family",
//     "Professional Network",
//     "Local Neighbourhood",
//     "Online Followers",
// ];

// const ContentSetting = () => {
//     const [language, setLanguage] = useState("");
//     const [country, setCountry] = useState("");
//     const [contentLength, setContentLength] = useState("ai");
//     const [tone, setTone] = useState(tones[0]);
//     const [audience, setAudience] = useState(audiences[0]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { language, country, contentLength, tone, audience };
//         console.log("Form submitted:", formData);
//         // Send to API / AI request here
//     };

//     return (
//         <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-8 py-8">
//             {/* Heading */}
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//                     Create Content
//                 </h1>
//                 <div className="hidden sm:inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
//                     Hello User
//                 </div>
//             </div>

//             {/* Form Card */}
//             <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//                     {/* Language Input */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Generate in (Language)
//                         </label>
//                         <input
//                             type="text"
//                             value={language}
//                             onChange={(e) => setLanguage(e.target.value)}
//                             placeholder="Enter language..."
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                         />
//                     </div>

//                     {/* Country Input */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             For Which Country
//                         </label>
//                         <input
//                             type="text"
//                             value={country}
//                             onChange={(e) => setCountry(e.target.value)}
//                             placeholder="Enter country..."
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                         />
//                     </div>

//                     {/* Content Length Options */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-3">
//                             Content Length
//                         </label>
//                         <div className="flex flex-wrap gap-4">
//                             <label className="flex items-center gap-2 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="length"
//                                     value="ai"
//                                     checked={contentLength === "ai"}
//                                     onChange={() => setContentLength("ai")}
//                                     className="text-blue-600 focus:ring-blue-500"
//                                 />
//                                 Let AI decide
//                             </label>
//                             <label className="flex items-center gap-2 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="length"
//                                     value="large"
//                                     checked={contentLength === "large"}
//                                     onChange={() => setContentLength("large")}
//                                     className="text-blue-600 focus:ring-blue-500"
//                                 />
//                                 Large post
//                             </label>
//                             <label className="flex items-center gap-2 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name="length"
//                                     value="small"
//                                     checked={contentLength === "small"}
//                                     onChange={() => setContentLength("small")}
//                                     className="text-blue-600 focus:ring-blue-500"
//                                 />
//                                 Smaller post
//                             </label>
//                         </div>
//                     </div>

//                     {/* Tone of Voice */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Tone of Voice
//                         </label>
//                         <select
//                             value={tone}
//                             onChange={(e) => setTone(e.target.value)}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                         >
//                             {tones.map((t, i) => (
//                                 <option key={i} value={t}>
//                                     {t}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Target Audience */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Target Audience
//                         </label>
//                         <select
//                             value={audience}
//                             onChange={(e) => setAudience(e.target.value)}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                         >
//                             {audiences.map((a, i) => (
//                                 <option key={i} value={a}>
//                                     {a}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
//                     >
//                         <SendHorizontal className="w-4 h-4" />
//                         <span>Generate Post</span>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ContentSetting;

"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

const tones = ["Natural", "Friendly", "Professional", "Persuasive", "Conversational"];
const audiences = [
  "Wide Audience",
  "Community Members",
  "Friends & Family",
  "Professional Network",
  "Local Neighbourhood",
  "Online Followers",
];

const ContentSetting = ({ userPrompt, onSubmitContent }) => {
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [contentLength, setContentLength] = useState("ai");
  const [tone, setTone] = useState(tones[0]);
  const [audience, setAudience] = useState(audiences[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { userPrompt, language, country, contentLength, tone, audience };
    onSubmitContent(formData);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Show user prompt */}
        {userPrompt && (
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm">
            <span className="font-semibold">Your Prompt:</span> {userPrompt}
          </div>
        )}

        {/* Language Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Generate in (Language)
          </label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter language..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Country Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            For Which Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Length */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Content Length</label>
          <div className="flex flex-wrap gap-4">
            {["ai", "large", "small"].map((len) => (
              <label key={len} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="length"
                  value={len}
                  checked={contentLength === len}
                  onChange={() => setContentLength(len)}
                />
                {len === "ai" ? "Let AI decide" : len === "large" ? "Large post" : "Smaller post"}
              </label>
            ))}
          </div>
        </div>

        {/* Tone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tone of Voice</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {tones.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Audience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {audiences.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          <SendHorizontal className="w-4 h-4" />
          <span>Generate Post</span>
        </button>
      </form>
    </div>
  );
};

export default ContentSetting;