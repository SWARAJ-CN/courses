import React from "react";
import { Phone, Mail, MessageSquare, Terminal, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Corporate Training", href: "#" },
    { name: "Events", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "News", href: "#" },
    { name: "Internship", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Career", href: "#" },
  ];

  const locations = [
    "Calicut",
    "Kottakkal",
    "Kochi",
    "Thrissur",
    "Perinthalmanna",
    "Trivandrum",
    "Chennai",
    "Dubai",
    "Bangalore",
  ];

  return (
    <>
      <footer className="w-full bg-[#0b0c10] text-slate-400 py-16 px-6 md:px-16 lg:px-24 border-t border-slate-900 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center gap-2 group select-none">
              <Terminal className="w-7 h-7 text-blue-500 group-hover:rotate-6 transition-transform" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-wider leading-none">
                  NULLBYTE
                </span>
                <span className="text-[10px] font-bold tracking-[0.22em] text-blue-500 uppercase mt-1">
                  Hackers Academy
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                NULLBYTE Hackers Academy’s career-focused, implementation-based
                learning programs pave the road to a success-assured career in
                Ethical Hacking & Cybersecurity. Our expert instructors provide
                hands-on training in real-world scenarios, ensuring students are
                well-prepared to tackle dynamic digital threats.
              </p>
              <p>
                Join us to become a part of a growing community of professionals
                dedicated to making the digital world a safer place. Start your
                journey with NULLBYTE and secure your future in the best{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4 transition-colors"
                >
                  cybersecurity institute in Kerala
                </a>
                , India.
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold bg-slate-900/50 border border-slate-800/60 rounded-lg p-2.5 mt-2 text-slate-300 w-fit">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Kakkanadu, Mavelipuram, Kochi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-white font-bold text-base tracking-wide mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-0.5 after:bg-blue-500">
              Our Links
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5 hover:translate-x-0.5 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base tracking-wide mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-0.5 after:bg-blue-500">
              Locations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {locations.map((loc, index) => (
                <li
                  key={index}
                  className={`hover:text-white transition-colors duration-200 cursor-pointer ${
                    loc === "Kochi" ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base tracking-wide mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-0.5 after:bg-blue-500">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="group-hover:text-white transition-colors">
                  +91 7907715669
                </span>
              </div>

              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="group-hover:text-white transition-colors break-all">
                  contact@nullbyteacademy.com
                </span>
              </div>

              <div className="flex items-center gap-3.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="group-hover:text-white transition-colors">
                  +91 799 656 473
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full bg-gray-900 p-6 md:py-8 md:px-12 lg:px-24 xl:px-32 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
        <div className="text-center sm:text-left">
          <p className="text-xs text-white/80 tracking-tight">
            &copy; {new Date().getFullYear()} NULLBYTE Hackers Academy. All
            Rights Reserved.
          </p>
        </div>

        <button className="whitespace-nowrap px-6 py-2.5 text-xs font-medium border border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl active:scale-[0.98] transition-all duration-150 cursor-pointer">
          Terms of Service | Privacy Policy
        </button>
      </div>
    </>
  );
};

export default Footer;
