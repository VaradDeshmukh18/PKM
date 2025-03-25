import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <svg
        className="animate-spin h-12 w-12 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          className="opacity-25"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          strokeDasharray="31.4"
          strokeDashoffset="0"
          className="opacity-75 animate-pulse"
        />
      </svg>
    </div>
  );
};

export default Loader;