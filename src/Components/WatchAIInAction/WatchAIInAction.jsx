import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

const WatchAIInAction = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const elements = [headingRef.current, featuredRef.current, gridRef.current];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeinup");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => {
      if (el) {
        el.classList.remove("animate-fadeinup");
        el.style.opacity = 0;
        el.style.transform = "translateY(24px)";
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="video" className="bg-black text-white py-12 md:py-16 px-4 md:px-8 mx-4 sm:mx-6 md:mx-8 lg:mx-16 flex flex-col items-center min-h-screen">
      <div className="max-w-5xl flex flex-col gap-6 md:gap-8">
        {/* Featured Video - Custom Layout */}
        <div ref={featuredRef} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-lg">
          <div className="flex flex-col md:flex-row gap-0 md:gap-6 bg-black rounded-2xl overflow-hidden">
            {/* Video with Featured badge */}
            <div className="relative md:w-2/3 w-full h-48 sm:h-56 md:h-72 flex items-center justify-center">
              <video
                src="/v1.mp4"
                controls
                loop
                muted
                poster={videos[0].poster}
                className="object-cover w-full h-full rounded-xl"
              />
              <span className="absolute top-3 left-3 bg-red-600 text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
              <span className="absolute bottom-3 right-3 bg-black/70 text-xs px-2 py-1 rounded">{videos[0].duration}</span>
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center p-4 sm:p-6 md:w-1/3 w-full">
              <span className="bg-gray-700 text-xs px-2 py-1 rounded mb-2 w-max">{videos[0].tag}</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{videos[0].title}</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{videos[0].description}</p>
              <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 gap-3 sm:gap-4">
                <span>👁 {videos[0].views}</span>
                <span>⏱ {videos[0].duration}</span>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform text-sm sm:text-base" onClick={() => navigate(`/videos/${videos[0].id}`)}>
                Watch Now
              </button>
            </div>
          </div>
        </div>
        {/* Video Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.slice(1).map((video, idx) => (
            <VideoCard key={video.id} video={video} idx={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchAIInAction; 