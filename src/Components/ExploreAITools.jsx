import React, { useState, useRef, useEffect } from "react";

const tabs = [
  "Content Creation",
  "Coding",
  "Presentation",
  "Marketing",
  "Productivity",
];

const tools = [
  {
    name: "Canva",
    desc: "Design stunning graphics, presentations, and social media posts with ease.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg" alt="Canva" className="w-7 h-7" />
      </span>
    ),
    category: "Content Creation",
    demoUrl: "https://www.canva.com/",
  },
  {
    name: "ChatCPT",
    desc: "Get instant answers, creative ideas, and automate conversations with AI.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" alt="ChatGPT" className="w-7 h-7" />
      </span>
    ),
    category: "Content Creation",
    demoUrl: "https://chat.openai.com/",
  },
  {
    name: "Zapier",
    desc: "Automate workflows by connecting your favorite apps and services.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" alt="Zapier" className="w-7 h-7" />
      </span>
    ),
    category: "Productivity",
    demoUrl: "https://zapier.com/",
  },
  {
    name: "Copy.ai",
    desc: "Generate high-quality marketing copy, blog posts, and more in seconds.",
    icon: (
      <span className="bg-[#06b6d4] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">
        C
      </span>
    ),
    category: "Content Creation",
    demoUrl: "https://www.copy.ai/",
  },
  {
    name: "Notion",
    desc: "Organize notes, manage projects, and collaborate all in one workspace.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" alt="Notion" className="w-7 h-7" />
      </span>
    ),
    category: "Productivity",
    demoUrl: "https://www.notion.so/",
  },
  {
    name: "GitHub Copilot",
    desc: "AI-powered code completion and suggestions for faster development.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub Copilot" className="w-7 h-7" />
      </span>
    ),
    category: "Coding",
    demoUrl: "https://github.com/features/copilot",
  },
  {
    name: "Jasper",
    desc: "Create engaging marketing content and ad copy with AI assistance.",
    icon: (
      <span className="bg-[#a259ff] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">
        J
      </span>
    ),
    category: "Marketing",
    demoUrl: "https://www.jasper.ai/",
  },
  // Example for Presentation tab
  {
    name: "Beautiful.ai",
    desc: "Create stunning presentations effortlessly with AI-powered design.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://www.beautiful.ai/favicon.ico" alt="Beautiful.ai" className="w-7 h-7" />
      </span>
    ),
    category: "Presentation",
    demoUrl: "https://www.beautiful.ai/",
  },
  {
    name: "Gamma",
    desc: "Create modern, interactive presentations and docs with AI in seconds.",
    icon: (
      <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
        <img src="https://gamma.app/favicon.ico" alt="Gamma" className="w-7 h-7" />
      </span>
    ),
    category: "Presentation",
    demoUrl: "https://gamma.app/",
  },
];

const ExploreAITools = () => {
  const [activeTab, setActiveTab] = useState(0);
  const filteredTools = tools.filter(tool => tool.category === tabs[activeTab]);
  const cardRefs = useRef([]);
  const tabRefs = useRef([]);

  // Card animation on scroll
  useEffect(() => {
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
    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => observer.disconnect();
  }, [filteredTools]);

  // Tab button animation on scroll
  useEffect(() => {
    // Set all tab buttons to hidden state before observing (only on mount)
    tabRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.remove("animate-fadeinup");
        ref.classList.add("opacity-0", "translate-y-6");
      }
    });

    const tabObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fadeinup");
              entry.target.classList.remove("opacity-0", "translate-y-6");
            }, idx * 100);
            tabObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    tabRefs.current.forEach((ref) => {
      if (ref) {
        tabObserver.observe(ref);
      }
    });
    return () => tabObserver.disconnect();
  }, []);

  return (
    <div id="tools" className="bg-black rounded-2xl p-4 sm:p-8 max-w-5xl mx-auto my-8 shadow-lg">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-8">Explore AI Tools You’ll Learn</h2>
      <div className="flex gap-4 justify-center mb-8 flex-wrap bg-black p-4 rounded-xl">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            ref={el => tabRefs.current[idx] = el}
            className={`px-4 py-2 rounded-full font-semibold text-base transition-colors duration-200 !bg-black border border-white/10 ${
              idx === activeTab
                ? "text-yellow-300 shadow"
                : "!text-white hover:text-yellow-200"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTools.map((tool, idx) => (
          <div
            key={tool.name}
            ref={el => cardRefs.current[idx] = el}
            className="bg-white/5 rounded-xl p-5 flex flex-col gap-4 shadow border border-white/10 min-h-[170px] justify-between opacity-0 translate-y-6 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              {tool.icon}
              <span className="text-white font-semibold text-lg">{tool.name}</span>
            </div>
            <div className="text-gray-300 text-sm mb-4 flex-1">{tool.desc}</div>
            <div className="flex gap-3">
              <button className="!bg-black !text-white px-2.5 py-1 rounded-md text-[0.7rem] font-medium border border-white/10 transition hover:bg-yellow-300 hover:text-black whitespace-nowrap">Watch Reel</button>
              <button className="!bg-black !text-white px-2.5 py-1 rounded-md text-[0.7rem] font-medium border border-white/10 transition hover:bg-yellow-300 hover:text-black whitespace-nowrap mr-1" onClick={() => window.open(tool.demoUrl, '_blank')}>Try Demo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreAITools; 