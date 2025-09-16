"use client";

import { useState } from "react";
import { ArrowRight, Search, Upload } from "lucide-react";

const DashboardProjects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Untitled project",
      modified: "14 minutes ago by Post Pilot",
    },
  ]);

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 ">
      {/* Heading */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-2xl font-extrabold">All projects</h1>
      </div>

      {/* Create Section */}
      <div className="bg-white border rounded-lg p-5 mb-6">
        <h2 className="text-lg font-medium mb-3">
          What do you want to create?
        </h2>
        <form className="border rounded-md p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <textarea
            className="w-full min-h-[80px] outline-none resize-none text-sm flex-1"
            placeholder="Describe the content you want to create or select from one of the options below."
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-3 py-2 border rounded-md text-sm flex items-center justify-center gap-1 bg-black text-white transition cursor-pointer hover:bg-gray-800"
          >
            <span>Submit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>

      {/* Search + Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500"
            />
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-md overflow-hidden">
        <div className="hidden sm:grid sm:grid-cols-2 text-sm font-medium border-b px-4 py-2 bg-gray-50">
          <div>Name</div>
          <div className="text-right">Last modified</div>
        </div>

        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-2 text-sm px-4 py-3 border-b last:border-0 hover:bg-gray-50"
          >
            <div className="font-medium">{p.name}</div>
            <div className="text-gray-600 text-sm text-right">{p.modified}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DashboardProjects;