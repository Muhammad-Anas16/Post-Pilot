// "use client";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { motion } from "motion/react";
// import { SendHorizontal } from "lucide-react";
// import axios from "axios";
// import { useState } from "react";

// // ✅ Validation schema
// const schema = yup.object().shape({
//   prompt: yup.string().required("Prompt is required"),
//   country: yup.string().required("Country is required"),
//   socialmediaPlatform: yup.string().required("Platform is required"),
//   contentLength: yup.string().required("Please select content length"),
//   tone: yup.string().required("Please select a tone"),
//   audience: yup.string().required("Please select an audience"),
// });

// // ✅ Options
// const tones = ["Natural", "Friendly", "Professional", "Persuasive", "Conversational"];
// const audiences = [
//   "Wide Audience",
//   "Community Members",
//   "Friends & Family",
//   "Professional Network",
//   "Local Neighbourhood",
//   "Online Followers",
// ];
// const contentLengths = ["Let AI decide", "Large post", "Smaller post"];
// const platforms = ["Instagram", "Facebook", "LinkedIn", "Twitter/X", "TikTok"];

// const PostGenerator = () => {
//   const [loading, setLoading] = useState(false);
//   const [generatedPost, setGeneratedPost] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       prompt: "",
//       country: "",
//       socialmediaPlatform: platforms[0],
//       contentLength: contentLengths[0],
//       tone: tones[0],
//       audience: audiences[0],
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       setGeneratedPost("");
//       const res = await axios.post("/api/generatePost", data);
//       setGeneratedPost(res.data?.text || "No content generated.");
//       console.log("✅ Generated Post:", generatedPost);
//     } catch (err) {
//       console.error("❌ Error generating post:", err);
//       setGeneratedPost("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-3 sm:px-6 py-8 sm:py-10">
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 sm:mb-8 text-center drop-shadow-sm"
//       >
//         Create Your Content
//       </motion.h1>

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-2xl sm:max-w-3xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-5 sm:p-7 md:p-9"
//       >
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 sm:gap-6">
//           {/* Prompt */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Your Prompt
//             </label>
//             <textarea
//               {...register("prompt")}
//               placeholder="What do you want to create today?"
//               className="w-full border border-gray-300 rounded-xl px-3 py-2 min-h-[100px] text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
//             />
//             {errors.prompt && (
//               <p className="text-red-500 text-sm mt-1">{errors.prompt.message}</p>
//             )}
//           </div>

//           {/* Country */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               For Which Country
//             </label>
//             <input
//               type="text"
//               {...register("country")}
//               placeholder="Enter country..."
//               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
//             />
//             {errors.country && (
//               <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
//             )}
//           </div>

//           {/* Social Media Platform */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Platform
//             </label>
//             <select
//               {...register("socialmediaPlatform")}
//               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
//             >
//               {platforms.map((p, i) => (
//                 <option key={i} value={p}>
//                   {p}
//                 </option>
//               ))}
//             </select>
//             {errors.socialmediaPlatform && (
//               <p className="text-red-500 text-sm mt-1">{errors.socialmediaPlatform.message}</p>
//             )}
//           </div>

//           {/* Content Length */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Content Length
//             </label>
//             <select
//               {...register("contentLength")}
//               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
//             >
//               {contentLengths.map((len, i) => (
//                 <option key={i} value={len}>
//                   {len}
//                 </option>
//               ))}
//             </select>
//             {errors.contentLength && (
//               <p className="text-red-500 text-sm mt-1">{errors.contentLength.message}</p>
//             )}
//           </div>

//           {/* Tone */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Tone of Voice
//             </label>
//             <select
//               {...register("tone")}
//               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
//             >
//               {tones.map((t, i) => (
//                 <option key={i} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//             {errors.tone && (
//               <p className="text-red-500 text-sm mt-1">{errors.tone.message}</p>
//             )}
//           </div>

//           {/* Audience */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Target Audience
//             </label>
//             <select
//               {...register("audience")}
//               className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
//             >
//               {audiences.map((a, i) => (
//                 <option key={i} value={a}>
//                   {a}
//                 </option>
//               ))}
//             </select>
//             {errors.audience && (
//               <p className="text-red-500 text-sm mt-1">{errors.audience.message}</p>
//             )}
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileHover={!loading ? { scale: 1.05, backgroundColor: "#2563eb" } : {}}
//             whileTap={!loading ? { scale: 0.95 } : {}}
//             type="submit"
//             disabled={loading}
//             className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-white text-sm sm:text-base font-medium shadow-md transition-all duration-200 ${
//               loading
//                 ? "bg-blue-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg"
//             }`}
//           >
//             {loading ? (
//               <div role="status" className="flex items-center gap-2">
//                 <svg
//                   aria-hidden="true"
//                   className="inline w-4 h-4 text-white animate-spin fill-gray-200"
//                   viewBox="0 0 100 101"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M100 50.5908C100 78.2051 77.6142 
//                     100.591 50 100.591C22.3858 100.591 0 
//                     78.2051 0 50.5908C0 22.9766 22.3858 
//                     0.59082 50 0.59082C77.6142 0.59082 
//                     100 22.9766 100 50.5908ZM9.08144 
//                     50.5908C9.08144 73.1895 27.4013 
//                     91.5094 50 91.5094C72.5987 91.5094 
//                     90.9186 73.1895 90.9186 50.5908C90.9186 
//                     27.9921 72.5987 9.67226 50 9.67226C27.4013 
//                     9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M93.9676 39.0409C96.393 38.4038 
//                     97.8624 35.9116 97.0079 33.5539C95.2932 
//                     28.8227 92.871 24.3692 89.8167 
//                     20.348C85.8452 15.1192 80.8826 
//                     10.7238 75.2124 7.41289C69.5422 
//                     4.10194 63.2754 1.94025 56.7698 
//                     1.05124C51.7666 0.367541 46.6976 
//                     0.446843 41.7345 1.27873C39.2613 
//                     1.69328 37.813 4.19778 38.4501 
//                     6.62326C39.0873 9.04874 41.5694 
//                     10.4717 44.0505 10.1071C47.8511 
//                     9.54855 51.7191 9.52689 55.5402 
//                     10.0491C60.8642 10.7766 65.9928 
//                     12.5457 70.6331 15.2552C75.2735 
//                     17.9648 79.3347 21.5619 82.5849 
//                     25.841C84.9175 28.9121 86.7997 
//                     32.2913 88.1811 35.8758C89.083 
//                     38.2158 91.5421 39.6781 93.9676 
//                     39.0409Z"
//                     fill="currentFill"
//                   />
//                 </svg>
//                 <span>Generating...</span>
//               </div>
//             ) : (
//               <>
//                 <SendHorizontal className="w-5 h-5" />
//                 <span>Generate Content</span>
//               </>
//             )}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default PostGenerator;

"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "motion/react";
import { SendHorizontal } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ added

// ✅ Validation schema
const schema = yup.object().shape({
  prompt: yup.string().required("Prompt is required"),
  country: yup.string().required("Country is required"),
  socialmediaPlatform: yup.string().required("Platform is required"),
  contentLength: yup.string().required("Please select content length"),
  tone: yup.string().required("Please select a tone"),
  audience: yup.string().required("Please select an audience"),
});

// ✅ Options
const tones = ["Natural", "Friendly", "Professional", "Persuasive", "Conversational"];
const audiences = [
  "Wide Audience",
  "Community Members",
  "Friends & Family",
  "Professional Network",
  "Local Neighbourhood",
  "Online Followers",
];
const contentLengths = ["Let AI decide", "Large post", "Smaller post"];
const platforms = ["Instagram", "Facebook", "LinkedIn", "Twitter/X", "TikTok"];

const PostGenerator = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // ✅ router init

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      prompt: "",
      country: "",
      socialmediaPlatform: platforms[0],
      contentLength: contentLengths[0],
      tone: tones[0],
      audience: audiences[0],
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/generatePost", data);

      if (res.data?.text) {
        // ✅ navigate to generated-result page with content
        router.push(`/dashboard/generated-result?content=${encodeURIComponent(res.data.text)}`);
      }
    } catch (err) {
      console.error("❌ Error generating post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-3 sm:px-6 py-8 sm:py-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 sm:mb-8 text-center drop-shadow-sm"
      >
        Create Your Content
      </motion.h1>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl sm:max-w-3xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-5 sm:p-7 md:p-9"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 sm:gap-6">
          {/* Prompt */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Prompt
            </label>
            <textarea
              {...register("prompt")}
              placeholder="What do you want to create today?"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 min-h-[100px] text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
            />
            {errors.prompt && (
              <p className="text-red-500 text-sm mt-1">{errors.prompt.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              For Which Country
            </label>
            <input
              type="text"
              {...register("country")}
              placeholder="Enter country..."
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm"
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>

          {/* Social Media Platform */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Platform
            </label>
            <select
              {...register("socialmediaPlatform")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
            >
              {platforms.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {errors.socialmediaPlatform && (
              <p className="text-red-500 text-sm mt-1">{errors.socialmediaPlatform.message}</p>
            )}
          </div>

          {/* Content Length */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Content Length
            </label>
            <select
              {...register("contentLength")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
            >
              {contentLengths.map((len, i) => (
                <option key={i} value={len}>
                  {len}
                </option>
              ))}
            </select>
            {errors.contentLength && (
              <p className="text-red-500 text-sm mt-1">{errors.contentLength.message}</p>
            )}
          </div>

          {/* Tone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tone of Voice
            </label>
            <select
              {...register("tone")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
            >
              {tones.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.tone && (
              <p className="text-red-500 text-sm mt-1">{errors.tone.message}</p>
            )}
          </div>

          {/* Audience */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Target Audience
            </label>
            <select
              {...register("audience")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
            >
              {audiences.map((a, i) => (
                <option key={i} value={a}>
                  {a}
                </option>
              ))}
            </select>
            {errors.audience && (
              <p className="text-red-500 text-sm mt-1">{errors.audience.message}</p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={!loading ? { scale: 1.05, backgroundColor: "#2563eb" } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-white text-sm sm:text-base font-medium shadow-md transition-all duration-200 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg"
            }`}
          >
            {loading ? (
              <div role="status" className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-white animate-spin fill-gray-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 
                    100.591 50 100.591C22.3858 100.591 0 
                    78.2051 0 50.5908C0 22.9766 22.3858 
                    0.59082 50 0.59082C77.6142 0.59082 
                    100 22.9766 100 50.5908ZM9.08144 
                    50.5908C9.08144 73.1895 27.4013 
                    91.5094 50 91.5094C72.5987 91.5094 
                    90.9186 73.1895 90.9186 50.5908C90.9186 
                    27.9921 72.5987 9.67226 50 9.67226C27.4013 
                    9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 
                    97.8624 35.9116 97.0079 33.5539C95.2932 
                    28.8227 92.871 24.3692 89.8167 
                    20.348C85.8452 15.1192 80.8826 
                    10.7238 75.2124 7.41289C69.5422 
                    4.10194 63.2754 1.94025 56.7698 
                    1.05124C51.7666 0.367541 46.6976 
                    0.446843 41.7345 1.27873C39.2613 
                    1.69328 37.813 4.19778 38.4501 
                    6.62326C39.0873 9.04874 41.5694 
                    10.4717 44.0505 10.1071C47.8511 
                    9.54855 51.7191 9.52689 55.5402 
                    10.0491C60.8642 10.7766 65.9928 
                    12.5457 70.6331 15.2552C75.2735 
                    17.9648 79.3347 21.5619 82.5849 
                    25.841C84.9175 28.9121 86.7997 
                    32.2913 88.1811 35.8758C89.083 
                    38.2158 91.5421 39.6781 93.9676 
                    39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>Generating...</span>
              </div>
            ) : (
              <>
                <SendHorizontal className="w-5 h-5" />
                <span>Generate Content</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PostGenerator;