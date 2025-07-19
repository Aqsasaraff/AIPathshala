import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaTools, FaQuestionCircle, FaUserFriends, FaLightbulb } from "react-icons/fa";

const faqs = [
  { q: "How are you creating tools?", a: "We use the latest AI technologies and hands-on learning to build practical tools.", icon: <FaTools className="text-yellow-400 text-2xl mr-3" /> },
  { q: "I have more learning queries, what now?", a: "Contact us or join our community for more support and resources.", icon: <FaQuestionCircle className="text-yellow-400 text-2xl mr-3" /> },
  { q: "What special resources do you offer?", a: "Project-based tutorials, privacy-focused learning, and productivity boosters.", icon: <FaLightbulb className="text-yellow-400 text-2xl mr-3" /> },
  { q: "How can I connect to experts for help?", a: "Join our forums or attend live Q&A sessions with industry experts.", icon: <FaUserFriends className="text-yellow-400 text-2xl mr-3" /> },
];

const FAQs = () => {
  const [open, setOpen] = useState(null);
  const sectionRef = useRef(null);
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

  return (
    <section id="faqs" ref={sectionRef} className="bg-gray-950 text-gray-100 py-16 px-4 md:mt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl border shadow-sm transition-all duration-300 ${
                open === idx
                  ? "border-yellow-400 bg-gray-900"
                  : "border-gray-800 bg-gray-800"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="flex items-center">
                  {faq.icon}
                  <span className={`text-lg font-medium ${open === idx ? "text-yellow-300" : ""}`}>{faq.q}</span>
                </span>
                <FaChevronDown
                  className={`ml-2 text-yellow-400 transition-transform duration-300 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-500 ${
                  open === idx ? "max-h-40 py-4 px-6" : "max-h-0 py-0 px-6"
                }`}
                style={{ transitionProperty: "max-height, padding" }}
              >
                {open === idx && (
                  <div className="w-full">
                    <div className="faq-animate text-left text-base text-yellow-100 font-semibold">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .faq-animate {
            animation: fadeSlideIn 0.5s;
          }
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQs; 