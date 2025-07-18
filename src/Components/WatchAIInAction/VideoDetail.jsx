import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const videos = [
  {
    id: 0,
    type: "Featured",
    tag: "Tutorial",
    title: "ChatGPT Complete Tutorial",
    description: "Learn how to use ChatGPT effectively for productivity, coding, and creative tasks",
    views: "1.2M views",
    duration: "12:45",
    poster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1,
    type: "Demo",
    tag: "Demo",
    title: "Perplexity AI Research Demo",
    description: "Discover how Perplexity AI revolutionizes research with real-time, cited information",
    views: "856K views",
    duration: "8:30",
  },
  {
    id: 2,
    type: "Deep dive",
    tag: "Deep dive",
    title: "Claude AI Advanced Features",
    description: "Explore Claude’s advanced reasoning capabilities and document analysis features",
    views: "645K views",
    duration: "15:20",
  },
  {
    id: 3,
    type: "Comparison",
    tag: "Comparison",
    title: "AI Tools Comparison",
    description: "Side-by-side comparison of the top AI tools and when to use each one",
    views: "2.1M views",
    duration: "9:10",
  },
  {
    id: 4,
    type: "Development",
    tag: "Development",
    title: "Building with AI APIs",
    description: "Step-by-step guide to integrating AI tools into your applications and workflows",
    views: "718K views",
    duration: "22:15",
  },
  {
    id: 5,
    type: "Insights",
    tag: "Insights",
    title: "Future of AI Technology",
    description: "Expert predictions and insights into where AI technology is heading next",
    views: "1.8M views",
    duration: "25:30",
  },
];

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find((v) => v.id === Number(id));

  if (!video) return <div className="text-white p-8">Video not found.</div>;

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-0 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-3xl mx-auto">
        <button
          className="mb-6 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold shadow hover:scale-105 transition-transform"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 shadow-lg flex flex-col items-center">
          <video
            src="/v1.mp4"
            controls
            loop
            muted
            className="object-cover w-full h-[300px] md:h-[450px] rounded-xl mb-6"
            poster={video.poster || `https://images.unsplash.com/photo-1519${id}389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80`}
          />
          <h2 className="text-3xl font-bold mb-2">{video.title}</h2>
          <p className="text-gray-300 mb-4">{video.description}</p>
          <div className="flex items-center text-gray-400 text-sm gap-4 mb-2">
            <span>👁 {video.views}</span>
            <span>⏱ {video.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDetail; 