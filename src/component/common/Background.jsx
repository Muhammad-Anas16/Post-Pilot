"use client";

import React from "react";
import Cubes from "../ui/Cubes";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Cubes
          gridSize={13}
          maxAngle={60}
          radius={4}
          borderStyle="2px dashed #5227FF"
          faceColor="#1a1a2e"
          rippleColor="#ff6b6b"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;