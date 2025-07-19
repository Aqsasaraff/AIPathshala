import React, { useRef, useEffect } from "react";

const features = [
  {
    icon: "✅",
    title: "Trusted by Thousands",
    description: "Professionals rely on us to master and implement AI tools.",
  },
  {
    icon: "🚀",
    title: "Boost Productivity",
    description: "Achieve more with streamlined, ready-to-use AI solutions",
  },
  {
    icon: "🎓",
    title: "Hands-on Approach",
    description: "Experiment and apply AI techniques through practical projects",
  },
  {
    icon: "🔒",
    title: "Privacy Focused",
    description: "Your data remains safe, secure, and completely confidential",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Animate section on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-6");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-fadeinup");
            el.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animate cards on scroll
  useEffect(() => {
    cardRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.classList.add("opacity-0", "translate-y-6");
      }
    });
    const cardObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setTimeout(() => {
              entry.target.classList.add("animate-fadeinup");
              entry.target.classList.remove("opacity-0", "translate-y-6");
            }, idx * 120);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) {
        cardObserver.observe(ref);
      }
    });
    return () => cardObserver.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="bg-[#10131a] text-white rounded-2xl p-5 sm:p-10 max-w-3xl mx-auto my-8 shadow-lg"
    >
      <h2 className="text-yellow-300 text-4xl font-bold text-center mb-5 tracking-wide">WHY CHOOSE US</h2>
      <p className="text-gray-300 text-center mb-10 text-base leading-7">
        We help students, indie developers, and early-stage founders learn and apply AI tools without the overwhelm. Through bite-sized reels, practical tutorials, and ready-to-use workflows, we simplify complex AI into real-world results. Unlike generic courses or hype-based content, we focus on hands-on learning that helps you build faster, think smarter, and grow independently.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div
            className="bg-white/5 rounded-xl p-5 flex items-start gap-4 shadow border border-white/10"
            key={idx}
            ref={el => cardRefs.current[idx] = el}
            data-idx={idx}
          >
            <span className="text-3xl mt-1">{feature.icon}</span>
            <div>
              <div className="text-yellow-300 font-semibold text-lg mb-1">{feature.title}</div>
              <div className="text-gray-300 text-sm">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs; 