import React, { useRef, useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    mainNews: {
      image: "https://source.unsplash.com/featured/?artificialintelligence",
      headline: "OpenAI Releases GPT-5: The Next Leap in Generative AI",
      source: "The Verge",
      time: "2 hours ago",
    },
    relatedNews: [
      {
        source: "TechCrunch",
        headline: "GPT-5 shows massive improvements in reasoning tasks.",
        time: "1 hour ago",
      },
      {
        source: "MIT Technology Review",
        headline: "Experts weigh in on GPT-5's global impact.",
        time: "3 hours ago",
      },
      {
        source: "Wired",
        headline: "OpenAI’s GPT-5 sets new benchmarks in AI safety.",
        time: "2 hours ago",
      },
    ],
  },
  {
    mainNews: {
      image: "https://source.unsplash.com/featured/?robotics,ai",
      headline: "Google Unveils Gemini: Multimodal AI for Everyone",
      source: "TechCrunch",
      time: "1 hour ago",
    },
    relatedNews: [
      {
        source: "The Verge",
        headline: "Gemini AI brings new features to Android ecosystem.",
        time: "45 minutes ago",
      },
      {
        source: "Wired",
        headline: "How Gemini is changing the AI assistant landscape.",
        time: "1 hour ago",
      },
      {
        source: "MIT Technology Review",
        headline: "Gemini’s multimodal approach explained.",
        time: "2 hours ago",
      },
    ],
  },
  {
    mainNews: {
      image: "https://source.unsplash.com/featured/?machinelearning,ai",
      headline: "Meta Launches Llama 3: Open-Source AI Model Rivals GPT-5",
      source: "Wired",
      time: "3 hours ago",
    },
    relatedNews: [
      {
        source: "TechCrunch",
        headline: "Llama 3’s open weights spark innovation in AI research.",
        time: "2 hours ago",
      },
      {
        source: "The Verge",
        headline: "Meta’s Llama 3 challenges closed-source giants.",
        time: "2 hours ago",
      },
      {
        source: "MIT Technology Review",
        headline: "What Llama 3 means for the future of open AI.",
        time: "3 hours ago",
      },
    ],
  },
  {
    mainNews: {
      image: "https://source.unsplash.com/featured/?ai,healthcare",
      headline: "AI Revolutionizes Healthcare Diagnostics Globally",
      source: "MIT Technology Review",
      time: "4 hours ago",
    },
    relatedNews: [
      {
        source: "Wired",
        headline: "AI-powered diagnostics reach rural hospitals.",
        time: "3 hours ago",
      },
      {
        source: "TechCrunch",
        headline: "Startups use AI to detect rare diseases early.",
        time: "2 hours ago",
      },
      {
        source: "The Verge",
        headline: "Doctors embrace AI for faster, accurate results.",
        time: "1 hour ago",
      },
    ],
  },
  {
    mainNews: {
      image: "https://source.unsplash.com/featured/?ai,education",
      headline: "AI Transforms Classrooms with Personalized Learning",
      source: "EdTech Magazine",
      time: "5 hours ago",
    },
    relatedNews: [
      {
        source: "TechCrunch",
        headline: "AI tutors adapt to every student’s needs.",
        time: "4 hours ago",
      },
      {
        source: "Wired",
        headline: "Schools pilot AI-driven lesson plans.",
        time: "3 hours ago",
      },
      {
        source: "The Verge",
        headline: "Teachers and AI: A new partnership in education.",
        time: "2 hours ago",
      },
    ],
  },
  {
    mainNews: {
      image: "https://source.unsplash.com/featured/?ai,climate",
      headline: "AI Tackles Climate Change with Predictive Analytics",
      source: "Nature",
      time: "6 hours ago",
    },
    relatedNews: [
      {
        source: "MIT Technology Review",
        headline: "AI models forecast extreme weather events.",
        time: "5 hours ago",
      },
      {
        source: "Wired",
        headline: "How AI is helping reduce carbon emissions.",
        time: "4 hours ago",
      },
      {
        source: "TechCrunch",
        headline: "Startups use AI to optimize energy grids.",
        time: "3 hours ago",
      },
    ],
  },
];

const AINewsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [direction, setDirection] = useState('right'); // 'left' or 'right'
  const autoPlayRef = useRef();

  // Detect if screen is md or larger
  useEffect(() => {
    const checkScreen = () => {
      setAutoPlay(window.innerWidth >= 0); // Enable auto-play on all devices
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto-slide logic for desktop/tablet
  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setDirection('right');
      setActiveIdx((prev) => (prev + 1) % newsData.length);
    }, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, newsData.length]);

  // Pause auto-slide on user interaction
  const handleUserNav = (idx) => {
    setActiveIdx(idx);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setTimeout(() => {
        if (autoPlay) {
          autoPlayRef.current = setInterval(() => {
            setDirection('right');
            setActiveIdx((prev) => (prev + 1) % newsData.length);
          }, 3000);
        }
      }, 5000);
    }
  };

  // Infinite loop navigation
  const goToPrevious = () => {
    setDirection('left');
    const newIdx = activeIdx === 0 ? newsData.length - 1 : activeIdx - 1;
    handleUserNav(newIdx);
  };

  const goToNext = () => {
    setDirection('right');
    const newIdx = (activeIdx + 1) % newsData.length;
    handleUserNav(newIdx);
  };

  return (
    <section id="news" className="py-12 md:py-12 px-4 md:px-8 mx-4 sm:mx-6 md:mx-8 lg:mx-24 bg-[#181c2a] shadow-2xl relative overflow-hidden rounded-full">
      <div className="max-w-6xl mx-auto text-center mb-6 md:mb-8 animate-fadeinup">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AI News</span>
        </h2>
      </div>
      <div className="relative w-full flex items-center justify-center overflow-x-hidden" style={{ paddingTop: 16, paddingBottom: 16 }}>
        <button
          className="hidden sm:flex absolute left-2 z-10 bg-black/70 hover:bg-black text-yellow-300 rounded-full p-2 shadow-lg"
          onClick={goToPrevious}
          aria-label="Scroll left"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><polygon points="15,6 9,12 15,18" fill="currentColor"/></svg>
        </button>
        <div className="flex justify-center items-center w-full">
          <div
            key={activeIdx}
            className={`news-slider-card flex-shrink-0 ${direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}
            style={{ width: "90vw", maxWidth: 340, minWidth: 280, 
              ...(window.innerWidth >= 1280 ? { maxWidth: 650 } : window.innerWidth >= 768 ? { maxWidth: 500 } : {})
            }}
            onMouseEnter={() => {
              if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
              }
            }}
            onMouseLeave={() => {
              if (autoPlay) {
                autoPlayRef.current = setInterval(() => {
                  setDirection('right');
                  setActiveIdx((prev) => (prev + 1) % newsData.length);
                }, 3000);
              }
            }}
          >
            <NewsCard
              mainNews={newsData[activeIdx].mainNews}
              relatedNews={newsData[activeIdx].relatedNews}
              onFullCoverage={() => window.open("https://news.google.com/search?q=artificial+intelligence", "_blank")}
              buttonSmall={true}
            />
          </div>
        </div>
        <button
          className="hidden sm:flex absolute right-2 z-10 bg-black/70 hover:bg-black text-yellow-300 rounded-full p-2 shadow-lg"
          onClick={goToNext}
          aria-label="Scroll right"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><polygon points="9,6 15,12 9,18" fill="currentColor"/></svg>
        </button>
      </div>
      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-1.5">
        {newsData.map((_, idx) => (
          <button
            key={idx}
            className={`w-1.5 h-1.5 rounded-sm ${activeIdx === idx ? "bg-yellow-300" : "bg-gray-600"}`}
            onClick={() => {
              setDirection(idx > activeIdx ? 'right' : 'left');
              handleUserNav(idx);
            }}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
      <style>{`
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
          background: #181c2a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #a78bfa 0%, #fde047 100%);
          border-radius: 8px;
        }
        .custom-scrollbar {
          scrollbar-color: #fde047 #181c2a;
          scrollbar-width: thin;
        }
      `}</style>
      <div className="absolute left-0 bottom-0 w-full pointer-events-none" style={{lineHeight:0}}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#181c2a" />
        </svg>
      </div>
    </section>
  );
};

export default AINewsSection; 