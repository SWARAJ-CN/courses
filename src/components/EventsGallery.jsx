import React from 'react';
import { Play, Calendar, MapPin, Eye, Camera } from 'lucide-react';

const EventsGallery = () => {

  const shortReels = [
    { id: 1, title: "Moments of OWASP Dubai Meetup", cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400" },
    { id: 2, title: "Money Heist CTF Teaser", cover: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=400" },
    { id: 3, title: "The CTF was Tremendous", cover: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400" },
    { id: 4, title: "Cybersecurity Workshop Dubai", cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" },
    { id: 5, title: "NULLBYTE Hacker Academy Hub", cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400" },
  ];

  const photoGrid = [
    { id: 1, url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500", span: "col-span-1 md:col-span-4 h-[200px]" },
    { id: 2, url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=500", span: "col-span-1 md:col-span-4 h-[200px]" },
    { id: 3, url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500", span: "col-span-1 md:col-span-4 h-[200px]" },
    { id: 4, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600", span: "col-span-1 md:col-span-5 h-[320px]" },
    { id: 5, url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600", span: "col-span-1 md:col-span-7 h-[320px]", hasLabel: true },
  ];

  return (
    <div className="w-full bg-[#0f1115] text-white py-16 px-4 sm:px-6 md:px-16 lg:px-24 font-sans flex flex-col items-center gap-24">
 
      <div className="w-full max-w-7xl flex flex-col gap-8">
        
        
        <div className="w-full relative rounded-2xl overflow-hidden aspect-21/9 min-h-65 bg-slate-900 border border-slate-800/80 group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200"
            alt="RedTeam Academy Team Summit Feature"
            className="w-full h-full object-cover object-top brightness-[0.85] transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0f1115] via-transparent to-transparent opacity-60" />
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {shortReels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative aspect-9/16 bg-slate-900 rounded-xl overflow-hidden border border-slate-800/60 group cursor-pointer hover:border-blue-500/40 shadow-lg transition-all duration-300"
            >
              <img 
                src={reel.cover} 
                alt={reel.title} 
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 brightness-90 group-hover:brightness-75 transition-all duration-500" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-md border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-4 h-4 fill-white translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-3 bg-linear-to-t from-black via-black/70 to-transparent pt-8">
                <p className="text-[11px] md:text-xs font-semibold text-slate-200 line-clamp-2 leading-snug tracking-wide group-hover:text-white">
                  {reel.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full max-w-7xl flex flex-col items-center">

        <div className="text-center mb-10">
          <span className="text-blue-500 font-bold text-xs md:text-sm tracking-widest uppercase block mb-2">
            Our Events
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Small Bytes From Our Previous Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full auto-rows-auto">
          {photoGrid.map((img) => (
            <div 
              key={img.id} 
              className={`${img.span} relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800/40 group shadow-md hover:border-slate-700 transition-colors duration-300`}
            >
              <img 
                src={img.url} 
                alt="Past hacking presentation or community session event" 
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-700" 
              />
              
              <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2.5 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-sm">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
              
              {img.hasLabel && (
                <div className="absolute bottom-3 left-3 right-3 bg-[#161920]/90 backdrop-blur-md border border-slate-800 rounded-lg p-3 text-left flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">SEC 2024 SUMMIT</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Sharjah University • Cybersecurity Panel</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Live
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default EventsGallery;