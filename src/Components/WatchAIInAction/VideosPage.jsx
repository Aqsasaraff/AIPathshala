import React from "react";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 0,
    type: "Featured",
    tag: "Tutorial",
    title: "ChatGPT Complete Tutorial",
    description: "Learn how to use ChatGPT effectively for productivity, coding, and creative tasks",
    views: "1.2M views",
    duration: "12:45",
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

const VideosPage = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-0 flex flex-col items-center min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AI Videos</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Browse all our AI video tutorials, demos, and expert insights in one place.
        </p>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, idx) => (
          <VideoCard key={video.id} video={video} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default VideosPage; 