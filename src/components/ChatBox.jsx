import { ChartArea, MessageCircle, Cross, X, Send, ArrowLeft, ShieldAlert } from "lucide-react";
import React, { useEffect, useState } from "react";

const ChatBox = () => {
  const [open, setOpen] = useState(false);

  const handilOpen = () => {
    setOpen(!open);

    console.log(open);
  };

//   useEffect(() => {
//     setOpen(true);
//   }, []);

  return (
    <>
      <button
        onClick={handilOpen}
        className="absolute fixed bottom-5 right-5 z-50 bg-blue-600 p-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-500"
      >
        {open ?  <X color="white" /> :  <MessageCircle color="white" />}
      </button>

      { open ?  

      <div className="z-50 text-white absolute fixed bottom-15 right-1 md:right-15 w-fit h-fit p-4 rounded-full">
      
        <div className="w-80 md:w-95 h-150 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans text-sm">
          
          <div className="bg-blue-600 p-4 flex items-center gap-3 border-b border-blue-500/20 shadow-md">
            <button onClick={handilOpen} className="hover:bg-blue-700 p-1 rounded transition-colors text-white">
             <ArrowLeft />
            </button>

            
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
             <ShieldAlert/>
            </div>

            <div>
              <h3 className="font-bold text-base leading-tight tracking-wide text-white">
                NULLBYTE
              </h3>
              <p className="text-xs text-blue-200 font-medium">
                NULLBYTE Support Executive
              </p>
            </div>
          </div>

         
          <div className="[&::-webkit-scrollbar]:hidden flex-1 bg-zinc-950 p-4 overflow-y-auto flex flex-col gap-4">
            <span className="text-xs text-zinc-500 font-medium self-center my-1">
              NULLBYTE Academy
            </span>

            
            <div className="flex flex-col max-w-[85%] self-start bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-none p-3 shadow-sm">
              <p className="text-zinc-300 leading-relaxed">
                Hey, Welcome To NULLBYTE! India's Leading Cybersecurity Training
                Institute.
              </p>
              <span className="text-[10px] text-zinc-500 self-end mt-1 font-mono">
                12:43 AM
              </span>
            </div>

            
            <div className="flex flex-col max-w-[85%] self-start bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-none p-3 shadow-sm">
              <p className="text-zinc-300 leading-relaxed">
                How can I help you?
              </p>
              <span className="text-[10px] text-zinc-500 self-end mt-1 font-mono">
                12:43 AM
              </span>
            </div>

           
            <div className="flex flex-col items-end gap-2 mt-2 w-full">
              {[
                "NULLBYTE's Best Certifications",
                "CompTIA Certification",
                "EC Council Certification",
                "Chat with Support",
              ].map((text, idx) => (
                <button
                  key={idx}
                  className="max-w-[90%] px-4 py-2 bg-transparent hover:bg-blue-600/10 border border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-blue-400 rounded-full text-right text-sm transition-all duration-200 ease-in-out cursor-pointer active:scale-[0.98]"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

         
          <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2">
            <div className="flex-1 relative flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-24 py-3 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 px-3 py-1.5 bg-blue-600/60 hover:bg-blue-500 active:scale-95 text-white text-xs font-semibold rounded-lg transition-all cursor-pointer shadow-md"
              >
                <Send/>
              </button>
            </div>
          </div>
        </div>
      </div>
        : null
        }
    </>
  );
};

export default ChatBox;
