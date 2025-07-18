import React from "react";
// import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, idx }) => {
  // const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="relative h-40 flex items-center justify-center">
        <video
          src="/v1.mp4"
          controls
          loop
          muted
          className="object-cover w-full h-full rounded-xl"
          poster={video.poster || `https://images.unsplash.com/photo-1519${idx}389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80`}
        />
        <span className="absolute top-3 left-3 bg-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{video.tag}</span>
        <span className="absolute bottom-3 right-3 bg-black/70 text-xs px-2 py-1 rounded">{video.duration}</span>
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h4 className="text-lg font-bold mb-1">{video.title}</h4>
          <p className="text-gray-300 text-sm mb-2">{video.description}</p>
        </div>
        <div className="flex items-center text-gray-400 text-xs gap-4 mb-2">
          <span>👁 {video.views}</span>
          <span>⏱ {video.duration}</span>
        </div>
        {/* Removed Watch Now button */}
      </div>
    </div>
  );
};

export default VideoCard; 