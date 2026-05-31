import React, { useState } from 'react';

const CourseModules = () => {
  const modules = [
    { id: "01", text: "1. Foot Printing , Scanning ,Google Dorking, Cyber Threat Intelligence, OSINT" },
    { id: "02", text: "2. Vulnerability Analysis, System Hacking, Exploitation, Metasploit Framework" },
    { id: "03", text: "Malware Threats, Virus , Trojans" },
    { id: "04", text: "Wireless Hacking, Wireless Sniffing, RouterSploit" },
    { id: "05", text: "Social Engineering , Hacking Web Application, SQL Injection" },
    { id: "06", text: "Art of Scanning & Protocol Enumeration" },
    { id: "07", text: "Web Application testing and bug bounty Hunting" }
  ];

  const features = [
    "100% Internship Assistance.",
    "Hands-on Experience",
    "App-Based Learning",
    "Expert Mentorship",
    "International Certifications",
    "Flexible Study Options"
  ];

  const faqs = [
    {
      question: "What skills will I learn during the internship?",
      answer: "You will gain core operational knowledge in network scanning, penetration testing, ethical hacking tools (like Metasploit and RouterSploit), bug bounty hunting, and web application threat mitigation."
    },
    {
      question: "Is there an opportunity to get certified during the internship?",
      answer: "Yes, our program is closely aligned with globally recognized international cybersecurity certifications, providing you with preparation pathways and practical validation."
    },
    {
      question: "Will I be working on real-world systems?",
      answer: "Absolutely. The internship focuses heavily on practical lab scenarios, simulating live network environments, threat models, and vulnerability assessments."
    },
    {
      question: "What are the career opportunities after the internship?",
      answer: "Graduates routinely move into critical functions such as SOC Analysts, Vulnerability Assessment Specialists, Penetration Testers, and Web Application Security Researchers."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
  
    <div className="bg-slate-950 font-sans min-h-screen text-slate-100">

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Modules In This Course
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Explore Our Cyber Security Internships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id} 
                className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-xl border border-slate-800/60 shadow-2xl backdrop-blur-md hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg tracking-wide shadow-md shadow-blue-900/50">
                  {module.id}
                </div>
                <p className="text-slate-300 font-medium text-sm leading-relaxed">
                  {module.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 lg:px-24 border-t border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Turn Passion into Expertise.
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Hack Your Future: NULLBYTE Hacker Academy Internships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 bg-slate-950/60 p-5 rounded-xl border border-slate-800/50 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-blue-400 shrink-0 stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-200 font-semibold text-sm tracking-wide">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 px-6 md:px-12 lg:px-24 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Ethical Hacking Internships
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-slate-800/80 pb-4 h-fit transition-all duration-200"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start gap-3 text-left group py-2 focus:outline-none"
                >
                  <span className={`mt-1 shrink-0 text-blue-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-90' : ''}`}>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </span>
                  <span className="text-slate-200 font-semibold text-sm group-hover:text-blue-400 transition-colors duration-150">
                    {faq.question}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFaq === idx ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
                  <div className="overflow-hidden">
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed pl-7 pr-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CourseModules;