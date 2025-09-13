"use client";

import { motion } from "motion/react";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const SocialPostsSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Social Posts that Fuel Engagement
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col gap-12 max-w-6xl mx-auto">
        {/* Card 1 - Text Left / Image Right */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              20% More Social Media Engagement
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>
                Create posts for LinkedIn, Facebook, Twitter, and Instagram that
                achieve 20% more reach
              </li>
              <li>
                Scale content creation with pre-built templates for multiple
                platforms
              </li>
              <li>
                Use predictive performance scores to choose the best copy
              </li>
              <li>
                Access performance-boosting AI directly within your channels
              </li>
            </ul>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
            >
              Drive Social Engagement
            </motion.button> */}
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/social-engagement.jpeg"
              alt="Social Engagement"
              width={600}
              height={400}
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Card 2 - Image Left / Text Right */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row-reverse items-center gap-8"
        >
          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Content That Speaks Directly to Your Audience
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>
                Train AI on your top-performing messages to create authentic
                content
              </li>
              <li>Gain insights from your historical audience data</li>
              <li>
                Tailor messages with pre-built customer personas for relevance
              </li>
              <li>
                Automatically include keywords and talking points that resonate
              </li>
            </ul>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
            >
              Craft Persona-Specific Messaging
            </motion.button> */}
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/audience-content.jpg"
              alt="Audience Content"
              width={600}
              height={400}
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialPostsSection;