import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function Alert({ message, icon, visible }) {
  return (
    <div
      className={`absolute inset-x-[calc((100vw-12rem)/2)] transition-transform duration-500 w-64 h-10 -top-16 bg-white border-accent rounded-2xl flex justify-center items-center p-2 gap-2 border-2 z-10 ${
        visible ? "translate-y-[8.5rem]" : ""
      }`}
    >
      <div className="text-2xl text-accent">{icon}</div>
      <h3 className="leading-4 text-gray-500">{message}</h3>
    </div>
  );
}
