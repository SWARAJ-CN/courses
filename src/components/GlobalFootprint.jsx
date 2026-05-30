import React, { useState } from 'react';
import { ChevronRight, Globe, HelpCircle } from 'lucide-react';
import { assets } from '../assets/assets';


const GlobalFootprint = () => {
 
  const mapPins = [
    { id: 1, top: '25%', left: '15%', label: 'North America' },
    { id: 2, top: '30%', left: '20%', label: 'US East' },
    { id: 3, top: '36%', left: '43%', label: 'UK Hub' },
    { id: 4, top: '41%', left: '46%', label: 'Europe Center' },
    { id: 5, top: '56%', left: '44%', label: 'West Africa' },
    { id: 6, top: '55%', left: '47%', label: 'East Africa' },
    { id: 7, top: '38%', left: '58%', label: 'Central Asia' },
    { id: 8, top: '49%', left: '56%', label: 'Middle East' },
    { id: 9, top: '48%', left: '70%', label: 'India West' },
    { id: 10, top: '50%', left: '70%', label: 'India South' },
    { id: 11, top: '49%', left: '53%', label: 'Southeast Asia' },
    { id: 12, top: '43%', left: '69%', label: 'Indonesia' },
    { id: 13, top: '24%', left: '73%', label: 'Philippines' },
    { id: 14, top: '29%', left: '72%', label: 'Malaysia' },
    { id: 15, top: '78%', left: '82%', label: 'Australia' },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What are the benefits of taking an ethical hacking course?",
      answer: "An ethical hacking course offers comprehensive hands-on skills to proactively identify system vulnerabilities, prepares you for global security certifications, and unlocks lucrative career opportunities in advanced defensive and offensive cybersecurity roles."
    },
    {
      id: 2,
      question: "Are there any hands-on labs or practical exercises in the course?",
      answer: "Yes, 100%. The program is built entirely around live sandboxed environments and capture-the-flag (CTF) challenges where you simulate real-world cyberattacks and system breach defenses."
    },
    {
      id: 3,
      question: "Can I learn cyber security with no prior IT experience?",
      answer: "Absolutely. Our foundational tracks start from pure scratch, covering networking models, operating system architecture, and basic command-line environments before advancing into core penetration testing configurations."
    },
    {
      id: 4,
      question: "How can I choose a cybersecurity course that aligns with my career goals?",
      answer: "Our expert academic counselors provide personalized mentorship evaluations based on your existing career background, baseline technical skills, and target enterprise roles (e.g., SOC analyst vs. Penetration Tester)."
    }
  ];

  return (
   <>
        <div className="w-full bg-[#0f1115] text-white py-20 px-6 md:px-16 lg:px-24 font-sans flex flex-col items-center">
          
         
          <div className="w-full max-w-6xl text-center mb-12">
            <span className="text-blue-500 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">
              Global Engagement
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Our Global Footprint is Increasing
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              We're expanding our cybersecurity training and ethical hacking education across India and international locations through new strategic enterprise partnerships.
            </p>
          </div>
    
         
          <div className="w-full max-w-5xl relative mb-24 select-none pointer-events-none filter brightness-[0.85] contrast-[1.05]">
           
            <img 
              src={assets.map} 
              alt="...map" 
              className=" opacity-20 "
            />
    
       
            {mapPins.map((pin) => (
              <div 
                key={pin.id}
                className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group pointer-events-auto cursor-pointer"
                style={{ top: pin.top, left: pin.left }}
                title={pin.label}
              >
                
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-500/40 animate-ping opacity-75" />
                
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_12px_#3b82f6] animate-pulse" />
              </div>
            ))}
          </div>
    
    
        
          <div className="w-full max-w-6xl text-left mt-4 border-t border-slate-900 pt-16">
            <div className="mb-10">
              <span className="text-blue-500 font-bold text-xs md:text-sm tracking-widest uppercase block mb-2">
                Ethical Hacking Training Support Center
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>
    
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 items-start">
              {faqData.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="border-b border-slate-800/60 py-4 transition-colors duration-200"
                  >
                  
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full flex items-start gap-3 text-left group focus:outline-none"
                    >
                      <ChevronRight className={`w-4 h-4 mt-1 shrink-0 text-blue-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-90 text-blue-400' : 'group-hover:translate-x-0.5'
                      }`} />
                      <span className={`text-sm md:text-base font-semibold tracking-wide transition-colors duration-200 ${
                        isOpen ? 'text-blue-400' : 'text-slate-200 hover:text-white'
                      }`}>
                        {faq.question}
                      </span>
                    </button>
    
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 pl-7' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}>
                      <div className="overflow-hidden">
                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    
        </div>

        <div className="w-full mx-auto bg-linear-to-r from-blue-700 via-black to-blue-600 p-8 md:p-8 md:px-80 flex flex-row sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                        Book A Demo With Us
                        </h2>
                    </div>

                    <button className="whitespace-nowrap px-8 py-3.5 border border-white/40 hover:border-white text-sm font-semibold text-white bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer">
                        Join Us Today
                    </button>

            </div>
   </>
  );
};

export default GlobalFootprint;