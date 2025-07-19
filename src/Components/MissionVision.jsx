import React from "react";

const RocketIcon = ({ className = "" }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 56 56"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M28 2L34 18H50L36 28L42 44L28 34L14 44L20 28L6 18H22L28 2Z"
      fill="#FFD600"
    />
  </svg>
);

// New Bulb Icon from uploaded image
const NewBulbIcon = ({ className = "" }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 48 64"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="20" fill="#FFD600" />
    <rect x="14" y="48" width="20" height="8" rx="4" fill="#FFD600" />
  </svg>
);

const DividerRocketIcon = ({ className = "" }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16 2L19.5 10.5H28L20.5 16L24 25L16 19.5L8 25L11.5 16L4 10.5H12.5L16 2Z"
      fill="#FFD600"
    />
  </svg>
);

const MissionVision = () => (
  <div
    className="relative bg-gradient-to-br from-[#10131a] to-[#181c2a] rounded-2xl shadow-2xl mx-4 md:mx-auto my-16 p-8 max-w-md min-h-[500px] flex flex-col justify-between animate-fadein md:max-w-4xl md:min-h-[400px] md:p-16"
    tabIndex={0}
    aria-label="Mission and Vision"
  >
    {/* Optional background pattern */}
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-10"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #a78bfa 0%, transparent 60%)",
      }}
    />
    <div className="flex flex-col gap-10 h-full justify-between relative z-10">
      {/* Mission */}
      <div>
        <div className="flex items-center gap-3 mb-2 group">
          <span className="drop-shadow-[0_2px_8px_rgba(255,214,0,0.4)] md:w-16 md:h-16 transition-transform group-hover:scale-110 motion-reduce:transform-none">
            <RocketIcon />
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-purple-400 leading-tight tracking-wider"
            style={{ letterSpacing: 2 }}
          >
            OUR
            <br />
            MISSION
          </h2>
        </div>
        <p className="text-gray-100 text-base md:text-lg mt-2 max-w-xs md:max-w-md">
          We help students, indie developers, and early-stage founders learn and
          apply AI tools without the overwhelm.
        </p>
      </div>
      {/* Divider with rocket icon */}
      <div className="w-full flex justify-center my-2 relative">
        <div className="h-[2px] w-2/3 bg-gradient-to-r from-purple-400/30 via-gray-600/10 to-yellow-300/30 rounded-full" />
        <span
          className="absolute -top-4 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <DividerRocketIcon />
        </span>
      </div>
      {/* Vision */}
      <div className="self-end text-right">
        <div className="flex items-center gap-3 mb-2 justify-end group">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 leading-tight tracking-wider"
            style={{ letterSpacing: 2 }}
          >
            OUR
            <br />
            VISION
          </h2>
          <span className="drop-shadow-[0_2px_8px_rgba(255,214,0,0.4)] md:w-16 md:h-16 transition-transform group-hover:scale-110 motion-reduce:transform-none">
            <NewBulbIcon />
          </span>
        </div>
        <p className="text-gray-100 text-base md:text-lg mt-2 max-w-xs md:max-w-md">
          To simplify AI into real-world results, enabling you to build faster,
          think smarter, and grow your potential.
        </p>
      </div>
    </div>
    {/* Fade-in animation */}
    <style>
      {`
        .animate-fadein {
          animation: fadeinup 1s cubic-bezier(.39,.575,.565,1.000) both;
        }
        @keyframes fadeinup {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: none;}
        }
      `}
    </style>
  </div>
);

export default MissionVision;