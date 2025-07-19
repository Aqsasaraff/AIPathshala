import React from "react";

const NewsCard = ({ mainNews, relatedNews, onFullCoverage, height, buttonSmall }) => {
  return (
    <div
      className="relative flex flex-col md:flex-row gap-4 bg-gradient-to-br from-[#10131a] to-[#181c2a] rounded-2xl shadow-xl px-6 py-4 md:px-8 md:py-5 w-full max-w-3xl mx-auto border-0 ring-2 ring-purple-400/20 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-300 overflow-hidden group items-stretch"
      style={height ? { height } : {}}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400/30 via-transparent to-yellow-300/10 z-0" />
      {/* Left: Main News Image & Headline */}
      <div className="md:w-2/5 w-full flex flex-col items-center justify-center z-10">
        <div className="relative w-full">
          <img
            src="/d1.jpg"
            alt="AI News"
            className="w-full h-28 md:h-32 object-cover rounded-xl shadow-md border-2 border-purple-400/30"
          />
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded shadow-md uppercase tracking-wide">
            {mainNews.source}
          </span>
        </div>
        <div className="hidden md:block w-full mt-3">
          <div className="text-lg md:text-xl font-bold mb-1 text-white leading-tight drop-shadow-sm">
            {mainNews.headline}
          </div>
          <div className="text-xs text-gray-300 mb-1 font-medium">
            {mainNews.time}
          </div>
        </div>
      </div>
      {/* Right: Related News */}
      <div className="flex-1 flex flex-col justify-between z-10 min-h-0">
        <div className="md:hidden block mb-2">
          <div className="text-lg md:text-xl font-bold mb-1 text-white leading-tight drop-shadow-sm">
            {mainNews.headline}
          </div>
          <div className="text-xs text-gray-300 mb-1 font-medium">
            {mainNews.time}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-3 flex-1 min-h-0 overflow-y-auto">
          {relatedNews.map((news, idx) => (
            <div key={idx} className="flex items-start gap-2 md:gap-3 bg-white/5 rounded-lg px-3 py-1.5 md:py-2 hover:bg-yellow-300/10 transition">
              <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 flex-shrink-0 shadow" />
              <div>
                <div className="text-xs md:text-sm font-semibold text-yellow-300">{news.source}</div>
                <div className="text-sm md:text-base font-medium text-white leading-tight">{news.headline}</div>
                <div className="text-xs text-gray-400">{news.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 md:mt-5">
          <button
            onClick={onFullCoverage}
            className={`flex items-center gap-2 ${buttonSmall ? "px-2.5 py-1.5 text-xs" : "px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm"} bg-gradient-to-r from-purple-500 to-yellow-400 hover:from-yellow-400 hover:to-purple-500 text-black font-bold rounded-lg shadow transition-all duration-200 group-hover:scale-105`}
            style={{ minWidth: 110 }}
          >
            <span className="material-icons text-black text-base">travel_explore</span>
            Full coverage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 