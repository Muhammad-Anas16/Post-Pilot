"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "motion/react";
import { SendHorizontal } from "lucide-react";

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

  const onSubmit = (data) => {
    console.log("✅ Final Data:", data);
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
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
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
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
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
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
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
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white"
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
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            <SendHorizontal className="w-5 h-5" />
            <span>Generate Content</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PostGenerator;